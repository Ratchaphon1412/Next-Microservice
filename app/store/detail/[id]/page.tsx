"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, use } from "react";

import useApiBase from "@/lib/useApi";

type FindProduct = {
  [key: string]: any;
};

type ProductInterface = {
  [key: string]: FindProduct;
};

export function ColorShow({ colorHex }: { colorHex: string }) {
  return (
    <span
      aria-hidden="true"
      className={`h-8 w-8  rounded-full border border-black border-opacity-10 `}
      style={{ ["backgroundColor" as any]: colorHex }}
    ></span>
  );
}

export default function Detail() {
  const [product, setProduct] = useState<FindProduct | null>(null);
  const [colorSelected, setColorSelected] = useState<string>("");
  const [sizeSelected, setSizeSelected] = useState<string>("");
  const { id } = useParams();

  async function addCart() {
    const response = await useApiBase(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/cart/",
      {
        method: "POST",
        body: JSON.stringify({
          product_id: parseInt(product?.id),
          name: product?.name,
          price: product?.price,
          image:
            "https://storage.ratchaphon1412.co/" + product?.images[0]?.path,

          category: product?.category.name,
          quantity: 1,
          size: sizeSelected,
          color: colorSelected,
        }),
      }
    );
    if (response != null) {
    }
  }

  async function getDetail() {
    const response: ProductInterface | null = await useApiBase(
      process.env.NEXT_PUBLIC_BASEURL_PRODUCT + "/public/graphql",
      {
        method: "POST",
        body: JSON.stringify({
          query: `{
          findProduct(id:${id}){
            id
            name
            price
            gender
            description
            images{
                path
            }
            category{
              name
            }
            sizes{
              name
            }
            colors{
              hex_color
            }
            stocks {
              id
              price
              quantity
              size {
                id
                name
              }
              color {
                hex_color
              }
            }
          }
        }`,
        }),
      }
    );
    if (response != null) {
      setProduct(response.data.findProduct);
      console.log(response);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {product?.gender}
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {product?.category?.name}
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product?.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {product?.images?.map((imageItem: FindProduct) => {
            return (
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={"https://storage.ratchaphon1412.co/" + imageItem.path}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product?.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ฿{product?.price}
            </p>

            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <svg
                    className="text-gray-200 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  117 reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset className="mt-4">
                  <legend className="sr-only">Choose a color</legend>
                  <div className="flex items-center space-x-3">
                    {product?.colors?.map(
                      (colorItem: FindProduct, index: number) => {
                        return (
                          <label
                            className={
                              colorSelected != colorItem.hex_color
                                ? "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400"
                                : "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-black border border-black"
                            }
                            key={index}
                            onClick={() =>
                              setColorSelected(colorItem.hex_color)
                            }
                          >
                            <input
                              type="radio"
                              name="color-choice"
                              value="White"
                              className="sr-only"
                              aria-labelledby="color-choice-0-label"
                            />
                            <span id="color-choice-0-label" className="sr-only">
                              White
                            </span>
                            <ColorShow colorHex={colorItem.hex_color} />
                          </label>
                        );
                      }
                    )}
                  </div>
                </fieldset>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <fieldset className="mt-4">
                  <legend className="sr-only">Choose a size</legend>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product?.sizes?.map(
                      (sizeItem: FindProduct, index: number) => {
                        return (
                          <label
                            className={
                              sizeSelected != sizeItem.name
                                ? "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm border-black"
                            }
                            key={index}
                            onClick={() => setSizeSelected(sizeItem.name)}
                          >
                            <input
                              type="radio"
                              name="size-choice"
                              value="XS"
                              className="sr-only"
                              aria-labelledby="size-choice-1-label"
                            />
                            <span id="size-choice-1-label">
                              {sizeItem.name}
                            </span>

                            <span
                              className="pointer-events-none absolute -inset-px rounded-md"
                              aria-hidden="true"
                            ></span>
                          </label>
                        );
                      }
                    )}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  await addCart();
                }}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {product?.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Gender</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">{product?.gender}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Category</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {product?.category?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
