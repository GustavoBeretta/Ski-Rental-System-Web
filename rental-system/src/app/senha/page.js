export default function RedefinirSenha() {
    return (
        <main>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 lg:py-0 snap-none">
                    <h1 className="text-4xl text-[#8F8E8E] pt-6 mt-20">Forgot your password?</h1>
                    <p href=".\login" className="text-sm font-medium text-[#8F8E8E] mt-6">Receive it in email!</p>
                    <div className="w-1/5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8F8E8E] mt-6">EMAIL REGISTERED</label>
                        <input type="email" name="email" id="email" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your email" required="" />
                    </div>
                    <button className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-bold text-xs py-2 px-4 rounded-lg mt-6">Receive email</button>
                </div>
            </section>
        </main>
    );
} 