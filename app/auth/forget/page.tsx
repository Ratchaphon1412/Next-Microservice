export default function ForgetPage() {
    return (
        <div className="md:flex w-full justify-center items-center">
            <div className="bg-white w-1/2">
                <div className="h-screen flex flex-col justify-center items-center " id="intro">
                    <p className="text-black text-3xl font-semibold tracking-wide mb-4">
                        YOUR ACCOUNT FOR
                        <br/> 
                        EVERYTHING MINNY.
                    </p>
        
                    <p className="text-xs mb-16 font-semibold tracking-wide"> Welcome back! </p>
                    <form action="" className="w-1/2">
                        <div className="mb-4">     
                            <div className="relative">
                                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                            </div>
                            <p v-if="error_email" id="outlined_error_help" className="mt-2 text-xs text-red-600"><span className="font-medium">Oh, snapp!</span> Some error message.</p>    
                        </div>
        
                        <button type="submit" className="btn btn-info w-full text-white bg-[#2674B4] text-3xl">
                            SUBMIT
                        </button>
                    </form>
                    
                    <p className="mt-4 text-xs">Already a user? <a href="/auth/login" className="text-[#2674B4]">Login</a> </p>
                </div>

            </div>

        </div>
    );
}