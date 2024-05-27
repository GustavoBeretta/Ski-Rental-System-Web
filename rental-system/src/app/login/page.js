export default function Login() { 
    return (
        <main>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="text-5xl text-[#8F8E8E]">Login</h1>
                    <p className="text-l text-[#8F8E8E] mt-4">Sign in to continue</p>
                    <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0"> 
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8F8E8E]">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#8F8E8E]">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-[#8F8E8E]">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-[#8F8E8E] hover:underline hover:text-black">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline hover:text-black">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
