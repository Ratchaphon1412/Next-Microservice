"use client";

import Logo from "@/app/components/logo";
import Cart from "@/app/store/components/cart";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
export default function Component() {
  const [isToggled, toggle] = useState(false);

  const [isToggledHum, setToggleHum] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    toggle(false);
  });

  const callback = () => {
    toggle(!isToggled);
  };

  const toggleCartCallback = () => {
    setOpenCart(!openCart);
  };

  const toggleHumbergerCallback = () => {
    setToggleHum(!isToggledHum);
  };

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-30 mx-auto  w-full max-w-screen-2xl bg-black py-4 px-2  shadow backdrop-blur-lg md:top-6 md:rounded-2xl lg:max-w-screen-4xl border border-gray-500"
    >
      <div className="px-4 hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              {/* <img
                  className="h-7 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt=""
                /> */}
              <Logo class="h-5" />
              <p className="text-white font-pixelletMedium">Pixel Man</p>
            </a>
          </div>

          <div className="flex items-center justify-end gap-3">
            <div
              className="-mb-px flex space-x-4 px-2"
              aria-orientation="horizontal"
              role="tablist"
            >
              <button
                id="tabs-1-tab-1"
                className="border-transparent text-white flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium font-pixellet"
                onClick={callback}
                aria-controls="tabs-1-panel-1"
                role="tab"
                type="button"
              >
                Story
              </button>
            </div>
            <div
              className="-mb-px flex space-x-4 px-2"
              aria-orientation="horizontal"
              role="tablist"
            >
              <a
                href="/store"
                id="tabs-1-tab-1"
                className="border-transparent text-white flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium font-pixellet"
                aria-controls="tabs-1-panel-1"
                role="tab"
                type="button"
              >
                Shop
              </a>
            </div>
            <div
              className="-mb-px flex space-x-4 px-2"
              aria-orientation="horizontal"
              role="tablist"
            >
              <a
                href="/gallery"
                id="tabs-1-tab-1"
                className="border-transparent text-white flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium font-pixellet"
                aria-controls="tabs-1-panel-1"
                role="tab"
                type="button"
              >
                Gallery
              </a>
            </div>

            <a
              className="items-center justify-center rounded-xl font-pixellet  px-3 py-2 text-sm font-semibold text-white hover:text-black shadow-sm hover:ring-1 hover:ring-inset hover:ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </a>

            <button
              onClick={toggleCartCallback}
              className="items-center justify-center rounded-xl  px-3 py-2 text-sm font-semibold text-white hover:text-black shadow-sm hover:ring-1 hover:ring-inset hover:ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </button>
            <div className="border-l-2 border-gray-400 h-[30px]"></div>
            <a
              className="items-center justify-center rounded-xl font-pixellet px-3 py-2 text-sm font-semibold text-white hover:text-black shadow-sm hover:ring-1 hover:ring-inset hover:ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/auth/register"
            >
              Sign in
            </a>
            <a
              className="inline-flex items-center justify-center font-pixellet rounded-xl bg-amber-400 px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/auth/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      {/*
      Menu open: "block", Menu closed: "hidden"
      */}
      <div
        id="tabs-1-panel-1"
        className={
          isToggled ? "space-y-10 px-4 pb-8 pt-10 hidden md:block" : "hidden"
        }
        aria-labelledby="tabs-1-tab-1"
        role="tabpanel"
      >
        <div className="grid grid-cols-5 gap-x-4">
          <div>
            <p
              id="women-clothing-heading-mobile"
              className="font-medium text-amber-400"
            >
              Clothing
            </p>
            <ul
              role="list"
              aria-labelledby="women-clothing-heading-mobile"
              className="mt-6 flex flex-col space-y-6"
            >
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Tops
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Dresses
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Pants
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Denim
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Sweaters
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  T-Shirts
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Jackets
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Activewear
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Browse All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p
              id="women-accessories-heading-mobile"
              className="font-medium text-amber-400"
            >
              Accessories
            </p>
            <ul
              role="list"
              aria-labelledby="women-accessories-heading-mobile"
              className="mt-6 flex flex-col space-y-6"
            >
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Watches
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Wallets
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Bags
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Sunglasses
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Hats
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Belts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p
              id="women-brands-heading-mobile"
              className="font-medium text-amber-400"
            >
              Brands
            </p>
            <ul
              role="list"
              aria-labelledby="women-brands-heading-mobile"
              className="mt-6 flex flex-col space-y-6"
            >
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Full Nelson
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  My Way
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Re-Arranged
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Counterfeit
                </a>
              </li>
              <li className="flow-root">
                <a href="#" className="-m-2 block p-2 text-gray-300">
                  Significant Other
                </a>
              </li>
            </ul>
          </div>
          <div className="group relative text-sm">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img
                src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                className="object-cover object-center"
              />
            </div>
            <a href="#" className="mt-6 block font-medium text-white">
              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
              New Arrivals
            </a>
            <p aria-hidden="true" className="mt-1">
              Shop now
            </p>
          </div>
          <div className="group relative text-sm">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img
                src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                className="object-cover object-center"
              />
            </div>
            <a href="#" className="mt-6 block font-medium text-white">
              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
              Basic Tees
            </a>
            <p aria-hidden="true" className="mt-1">
              Shop now
            </p>
          </div>
        </div>
      </div>
      {/* 
        mobile navbar
      */}
      <div className="px-4 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              {/* <img
                  className="h-7 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt=""
                /> */}
              <Logo class="h-5" />
              <p className="text-white font-pixelletMedium">Pixel Man</p>
            </a>
          </div>
          {/*
            Hamburger button, show/hide based on menu open state.
          */}
          <button
            onClick={toggleHumbergerCallback}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/*
            Mobile menu, toggle classes based on menu state.

            Open: "block", closed: "hidden"
          */}
        <div
          className={isToggledHum ? "w-full" : "hidden w-full"}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-600"
                aria-current="page"
              >
                Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded  text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded  text-gray-400 md:dark:hover:text-white hover:bg-gray-700 hover:text-white"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded  text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Cart showCart={openCart} toggleCart={toggleCartCallback} />
    </header>
  );
}
