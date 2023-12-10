import Image from 'next/image'
import loginPicture from '@/public/assets/images/backgroundImage.png'

export default function login(){




    return (
        <div className="md:flex">
            <div className="md:basis-1/2">
                <div className="h-screen flex flex-col justify-center items-center">
                <p className="text-black text-3xl font-semibold tracking-wide mb-4">
                    YOUR ACCOUNT FOR
                    <br />
                    EVERYTHING MINNY.
                </p>
                <p className="text-xs mb-16 font-semibold tracking-wide">Welcome back!</p>
                <form className="w-[60%]">
                <div className="mb-4">
                    <div className="relative">
                    <input
                        type="text"
                        id="floating_outlined"
                        v-model="email"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                    />
                    <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >Email</label
                    >
                    </div>
                    <p  id="outlined_error_help" className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span> Some error message.
                    </p>
                </div>

                <div className="mb-4">
                    <div className="relative">
                    <input
                        type="password"
                        id="floating_outlined"
                     
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >password</label
                    >
                    </div>
                    <p  id="outlined_error_help" className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span> Some error message.
                    </p>
                </div>

                <div className="flex items-center justify-between my-10">
                    <div>
                    <input
                        id="link-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                        htmlFor="link-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Remember me</label>
                    </div>

                    <a href="" className="text-black hover:underline">
                    Forgot password
                    </a>
                </div>
                    <button
                        type="submit"
                        className="btn btn-info w-full text-white bg-[#2674B4] text-3xl"
                    >
                        Sign in
                    </button>
                </form>
                    <p className="mt-4">
                    Don't have an account?
                    <a href="/register" className="text-[#2674B4]"
                        > Sign up for free!</a>
                    </p>

                </div>
            </div>
            <div className="hidden basis-1/2 md:flex items-center md:visible">
                <Image
                    src={loginPicture}
                    className="max-h-screen w-full"
                    alt="Picture of the author"
                    // width={fill} automatically provided
                    // height={500} automatically provided
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
           
            </div>
        </div>
    );
}