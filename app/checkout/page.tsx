"use client";

import Item from "./components/item";
import Shipping from "./components/shipping";
import useApiBase from "@/lib/useApi";
import { CreditCard } from "./components/creditCard";
import { useEffect, useState } from "react";
import AddressShow from "@/app/components/Setting/AddressShow";

import { useAppSelector } from "@/redux/store";
import { loadAddress } from "@/redux/features/auth-slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
interface GrandTotal {
  [key: string]: any;
}

interface ChargeToken {
  [Key: string]: string | number | any;
}

interface ResponseToken {
  [key: string]: string | number | boolean;
}

interface Item {
  [key: string]: any;
}
interface Cart {
  [key: string]: [Item];
}

interface CreditCard {
  [key: string]: string;
}

export default function Checkout() {
  const [cart, setCart] = useState<Array<Item>>([]);
  const [total, setTotal] = useState<GrandTotal>({});
  const [creditCard, setCreditCard] = useState<CreditCard>({
    email: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    city: "",
    postal_code: "",
  });
  const address = useAppSelector((state) => state.authReducer.address);
  const user = useAppSelector((state) => state.authReducer.user);

  const dispatch = useDispatch<AppDispatch>();

  async function DeleteCartItem(item: any) {
    await useApiBase(process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/cart/", {
      method: "DELETE",
      body: JSON.stringify({
        product_id: item.product.id,
        color: item.color,
        size: item.size,
      }),
    });
  }

  async function DeleteCart(res: any) {
    cart.map(async (item) => {
      await DeleteCartItem(item);
    });
    window.location.href = res?.Charge.authorize_uri;
    return;
  }

  async function AuthorizationPayment(token: any) {
    const res = await useApiBase<ChargeToken>(
      process.env.NEXT_PUBLIC_BASEURL_PAYMENT +
        `/omise/charge-credit-card/${user.id}`,
      {
        method: "POST",
        body: JSON.stringify({
          token: token?.id,
          amount: total.total * 100,
        }),
      }
    );

    return res;
  }

  async function Payment() {
    const token = await useApiBase<ResponseToken>(
      process.env.NEXT_PUBLIC_BASEURL_PAYMENT + "/omise/token",
      {
        method: "POST",
        body: JSON.stringify({
          name: creditCard.cardName,
          number: creditCard.cardNumber,
          expiration_month: parseInt(creditCard.expiryDate.split("/")[0]),
          expiration_year: parseInt(creditCard.expiryDate.split("/")[1]),
          city: creditCard.city,
          postal_code: creditCard.postal_code,
          security_code: creditCard.cvv,
        }),
      }
    );
    return token;
  }

  async function Order() {
    const token = await Payment();
    const res = await AuthorizationPayment(token);
    DeleteCart(res);
  }

  async function LoadAddressData() {
    const res: any = await useApiBase(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/address/",
      {
        method: "GET",
      }
    );

    if (res != null) {
      dispatch(loadAddress(res));
    }
  }

  async function GetCart() {
    const res = await useApiBase<Cart>(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/cart/",
      {
        method: "GET",
      }
    );

    if (res != null) {
      console.log(res);
      setCart(res.cart);
      setTotal(res.shopping_cart);
    }
  }

  useEffect(() => {
    GetCart();
    LoadAddressData();
  }, []);

  return (
    <div className="bg-white">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 py-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium text-black">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border border-transparent px-2 py-4 sm:px-6">
            {cart.map((item: Item) => {
              return (
                <Item
                  key={item.product.id}
                  name={item.product.name}
                  color={item.color}
                  size={item.size}
                  quantity={item.quantity}
                  price={item.product.price}
                  image={item.product.image}
                />
              );
            })}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <Shipping />
          </form>
          <p className="mt-8 text-lg font-medium">Address</p>
          <form className="mt-5 grid gap-6">
            {address.length > 0 ? (
              address?.map((addressItem, index) => {
                return (
                  <div className="flex  " key={index}>
                    <div className="flex-1 py-5 pl-5 overflow-hidden ">
                      <ul>
                        <li className="text-xs text-white uppercase ">
                          {addressItem.fullname}
                        </li>
                        <div className="text-gray-600">
                          <li>{addressItem.detail_address}</li>
                          <li>{addressItem.country}</li>
                          <li>{addressItem.province}</li>
                          <li>{addressItem.zip_code}</li>
                          <li>{addressItem.phone}</li>
                        </div>
                      </ul>
                    </div>

                    <div className="flex-none pt-2.5 pr-2.5 pl-1">
                      <button
                        type="button"
                        className="px-2 py-2 font-medium tracking-wide bg-gray-400 text-gray-200 capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M5 18.08V19h.92l9.06-9.06-.92-.92z"
                            opacity=".3"
                          ></path>
                          <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-400">
                No address found please add in Settings
              </p>
            )}
          </form>
        </div>
        <CreditCard
          total={total.total}
          setCreditCard={setCreditCard}
          creditCard={creditCard}
          payment={Order}
        />
      </div>
    </div>
  );
}
