import Image from "next/image";
export default function Shipping() {
  return (
    <div className="relative">
      <input
        className="peer hidden"
        id="radio_1"
        type="radio"
        name="radio"
        checked
      />
      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-transparent"></span>
      <label
        className="   flex cursor-pointer select-none rounded-lg p-4"
        htmlFor="radio_1"
      >
        <Image
          className="w-14 object-contain"
          src="https://yt3.googleusercontent.com/dSMIZcBg7A2BD5D5GEJpLrsSFjL43VOQyBxIhRaUPA7SxaDaNlrAScUFyakcBKoUYnssTgyoJQ=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div className="ml-5">
          <span className="mt-2 font-semibold">Kerry Express</span>
          <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
        </div>
      </label>
    </div>
  );
}
