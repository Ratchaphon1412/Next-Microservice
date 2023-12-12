
import SlideShow from "@/app/components/slideShow"

export default function Component() {

  // image use next image
  return (
    <div className="min-h-screen bg-black flex items-center relative">
      <div className="absolute z-10 w-full h-full">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            ></rect>
          </svg>
        </div>
      </div>

      <div className="h-full w-full flex items-center relative z-20">
        <div className=" flex-1 justify-center">
          <SlideShow></SlideShow>
        </div>
       
        <div className=" flex-1 flex flex-col min-[1280px]:pl-64 pl-4">
          <p className="text-6xl font-pixelletMedium text-white">
            DISCOVER <br /> OUR <br />
            COLLECTION
          </p>
          <a href="" className="text-2xl text-gray-50 font-pixelletMedium mt-4">
              <p>see more</p>
          </a>
        </div>
      </div>
    </div>
  );
}
