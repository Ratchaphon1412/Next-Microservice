import SlideShow from "@/app/components/slideShow";

export default function Component() {
  // image use next image
  return (
    <div className="min-h-fit bg-black flex items-start relative">
      <div className="h-full w-full flex flex-col md:flex-row items-center relative z-20">
        <div className=" flex-1 flex flex-col min-[1280px]:pl-32 pl-4 my-6">
          <p className="text-6xl font-pixelletMedium text-white">
            DISCOVER <br /> OUR <br />
            COLLECTION
          </p>
          <a href="" className="text-2xl text-gray-50 font-pixelletMedium mt-4">
            <p>see more</p>
          </a>
        </div>
        <div className=" flex-1 justify-center">
          <SlideShow></SlideShow>
        </div>
      </div>
    </div>
  );
}
