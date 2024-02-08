"use client";

import Item from "./components/item";
import Shipping from "./components/shipping";
import useApiBase from "@/lib/useApi";
import { CreditCard } from "./components/creditCard";
import { useEffect, useState } from "react";

interface GrandTotal {
  [key: string]: any;
}

interface Item {
  [key: string]: any;
}
interface Cart {
  [key: string]: [Item];
}

export default function Checkout() {
  const [cart, setCart] = useState<Array<Item>>([]);
  const [total, setTotal] = useState<GrandTotal>({});

  async function getCart() {
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
    getCart();
  }, []);

  return (
    <div className="bg-black">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 py-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium text-white">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border border-transparent px-2 py-4 sm:px-6">
            {cart.map((item: Item) => {
              return (
                <Item
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
        </div>
        <CreditCard />
      </div>
    </div>
  );
}
