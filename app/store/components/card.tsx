import CartButton from "@/app/store/components/cartButton";
import ViewButton from "@/app/store/components/viewButton";
export default function Components() {
  const styleBg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1604262725913-1c415cd27564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2142&q=80)",
  };

  return (
    // <div classNameNameNameName="overflow-hidden bg-white h-48 w-full place-self-center rounded-md hover:h-[32rem] duration-500">
    //     <div>
    //         <img src="https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/628a523bc5f87607ead535c5/ece97cd1dcac0a0aaf78.jpg/original" />
    //     </div>
    //     <div classNameNameNameName="flex justify-around my-4">
    //         <ViewButton />
    //         <CartButton />
    //     </div>
    // </div>
    //<!-- -->
    // <div classNameNameName="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    //   <a
    //     classNameNameName="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
    //     href="#"
    //   >
    //     <img
    //       classNameNameName="object-cover"
    //       src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    //       alt="product image"
    //     />
    //     <span classNameNameName="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
    //       39% OFF
    //     </span>
    //   </a>
    //   <div classNameNameName="mt-4 px-5 pb-5">
    //     <a href="#">
    //       <h5 classNameNameName="text-xl tracking-tight text-slate-900">
    //         Nike Air MX Super 2500 - Red
    //       </h5>
    //     </a>
    //     <div classNameNameName="mt-2 mb-5 flex items-center justify-between">
    //       <p>
    //         <span classNameNameName="text-3xl font-bold text-slate-900">$449</span>
    //         <span classNameNameName="text-sm text-slate-900 line-through">$699</span>
    //       </p>
    //       <div classNameNameName="flex items-center">
    //         <svg
    //           aria-hidden="true"
    //           classNameNameName="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           classNameNameName="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           classNameNameName="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           classNameNameName="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <svg
    //           aria-hidden="true"
    //           classNameNameName="h-5 w-5 text-yellow-300"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //         </svg>
    //         <span classNameNameName="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
    //           5.0
    //         </span>
    //       </div>
    //     </div>
    //     <a
    //       href="#"
    //       classNameNameName="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         classNameNameName="mr-2 h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         stroke-width="2"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //         />
    //       </svg>
    //       Add to cart
    //     </a>
    //   </div>
    // </div>
    <div className="container">
      <a
        href="/store/detail"
        className="max-w-md w-full bg-white shadow-lg rounded-xl p-6"
      >
        <div className="flex flex-col ">
          <div className="">
            <div className="relative h-62 w-full mb-3">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                alt="Just a flower"
                className=" w-full   object-fill  rounded-2xl"
              />
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-black hover:text-purple-500 truncate ">
                    Lorem ipsum is placeholder text commonly used in the graphic
                  </h2>
                  {/* <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    INSTOCK
                  </div> */}
                </div>
              </div>
              <div className="text-xl text-black font-semibold mt-1">
                $240.00
              </div>
              <div className="lg:flex  py-4  text-sm text-gray-600">
                <div className="flex-1 inline-flex items-center  mb-3">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <ul className="flex flex-row justify-center items-center space-x-2">
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                          <a
                            href="#blue"
                            className="block w-3 h-3 bg-blue-600 rounded-full"
                          ></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                          <a
                            href="#yellow"
                            className="block w-3 h-3  bg-yellow-400 rounded-full"
                          ></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#red"
                            className="block w-3 h-3  bg-red-500 rounded-full"
                          ></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#green"
                            className="block w-3 h-3  bg-green-500 rounded-full"
                          ></a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
