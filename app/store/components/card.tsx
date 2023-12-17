import Image from "next/image";
import Link from "next/link";
export default function Components() {
  const styleBg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1604262725913-1c415cd27564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2142&q=80)",
  };

  return (
    <div className="container">
      <Link
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
                          <span className="block w-3 h-3 bg-blue-600 rounded-full"></span>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                          <span className="block w-3 h-3  bg-yellow-400 rounded-full"></span>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                          <span className="block w-3 h-3  bg-red-500 rounded-full"></span>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                          <span className="block w-3 h-3  bg-green-500 rounded-full"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
