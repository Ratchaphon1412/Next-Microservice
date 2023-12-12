export default function RegisterPage() {
    return (
        <div className="md:flex justify-center items-center bg-black">
            <div className="md:basis-1/2">
                <div className="h-screen flex flex-col justify-center items-center">
                    <p className="text-white text-3xl font-semibold tracking-wide mb-10">
                    LET'S GET YOU STARTED
                    </p>
                    
                    <form className="w-1/2">
                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="floating_outlined"
                                    v-model="fullname"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                />
                                <label
                                    htmlFor="floating_outlined"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                    >Full name</label>
                            </div>
                            <p
                            
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600"
                            >
                                <span className="font-medium">Oh, snapp!</span> Some error message.
                            </p>

                        </div>
                        <div className="mb-4">
                            <div className="relative">
                            <input
                                type="text"
                                id="floating_outlined"
                               
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >Email address</label>
                            </div>
                            <p
                            v-if="error_email"
                            
                            className="mt-2 text-xs text-red-600"
                            >
                            <span className="font-medium">Oh, snapp!</span> Some error message.
                            </p>
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                            <input
                                type="tel"
                                id="floating_outlined"
                                v-model="phone"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >Phone number</label
                            >
                            </div>
                            <p
                            v-if="error_phone"
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600"
                            >
                            <span className="font-medium">Oh, snapp!</span> Some error message.
                            </p>
                        </div>
                        <div className="flex my-10">
                            <div className="mr-4">
                            <label htmlFor="underline_select" className="sr-only"
                                >Underline select</label>
                            <p className="mb-3 text-gray-500">gender</p>
                            <select
                                id="underline_select"
                                className="block w-full text-sm text-gray-500 bg-transparent rounded-lg border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 bg-gray-200 peer"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            </div>

                            
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                            <input
                                type="password"
                            
                                id="floating_outlined"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >Create password</label>
                            </div>
                            <div v-if="Password">
                            <p
                                
                                id="outlined_error_help"
                                className="mt-2 text-xs text-red-600"
                            >
                                Password must contain a minimum of 8 characters
                            </p>
                            <p
                                v-if="error_symbol"
                                id="outlined_error_help"
                                className="mt-2 text-xs text-red-600"
                            >
                                Password must contain at least one symbol e.g. @, !
                            </p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                            <input
                                type="password"
                                id="floating_outlined"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >Confirm password</label
                            >
                            </div>
                            <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600"
                            >
                            No match the password.
                            </p>
                        </div>
                        <button
                            type="submit" 
                            className="btn btn-info w-full text-white bg-[#2674B4] text-3xl"
                        >
                            Submit
                        </button>

                    </form>
                
                </div>

            </div>

        </div>
    );
}