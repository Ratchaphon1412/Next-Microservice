import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type ImageProduct = {
  [key: string]: string;
};
type ColorProduct = {
  [key: string]: string;
};
interface ColorInterface {
  [key: string]: string;
}

export async function Card({
  id,
  name,
  images,
  price,
  colors,
}: {
  id: string;
  name: string;
  images: Array<ImageProduct>;
  price: number;
  colors: Array<ColorProduct>;
}) {
  const [imageProduct, setImageProduct] = useState("");
  const [colorProduct, setColorProduct] = useState<Array<ColorInterface>>([]);

  useEffect(() => {
    if (images.length != 0) {
      const image: ImageProduct = images[0];
      setImageProduct("https://storage.ratchaphon1412.co/" + image.path);
    } else {
      setImageProduct(
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
      );
    }

    setColorProduct(colors);
    console.log("color", colors);
  }, []);

  return (
    <div className="container">
      <Link href={`/store/detail/${id}`} className="max-w-md w-full    p-6">
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
                src={imageProduct}
                alt="Just a flower"
                className=" w-full   object-fill  rounded-2xl"
              />
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-black hover:text-purple-500 truncate ">
                    {name}
                  </h2>
                </div>
              </div>
              <div className="text-xl text-black font-semibold mt-1">
                ฿{price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
