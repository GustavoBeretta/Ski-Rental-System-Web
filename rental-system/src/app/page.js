export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-6 py-0 mb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-60">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-[#8F8E8E]">NEW RENTAL REQUEST</h1>
          <h2 className="text-[#8F8E8E] mb-2">Make sure guest information is updated!</h2>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block m-2 text-sm font-medium text-[#8F8E8E]">GUEST NAME</label>
              <input type="email" name="email" id="email" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
            </div>
            <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8F8E8E]">SPORT</label>
              <select className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                <option>SKI</option>
                <option>SNOWBOARD</option>
              </select>
            </div>
            <div>
            <div className="flex flex-col space-y-4">
              <div className="text-sm font-medium text-[#8F8E8E]">Includes</div>
              <div className="flex items-center">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="ski-board" aria-describedby="ski-board" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="ski-board" className="text-[#8F8E8E]">SKI/BOARD</label>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="boots" aria-describedby="boots" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="boots" className="text-[#8F8E8E]">BOOTS</label>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="helmet" aria-describedby="helmet" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="helmet" className="text-[#8F8E8E]">HELMET</label>
                  </div>
                </div>
              </div>
            </div>

            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#8F8E8E]">PAYMENT CONFIRMATION NUMBER</label>
              <input type="email" name="email" id="email" className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
            </div>
              <div className="flex items-center ">
                <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-[#8F8E8E]">I AGREE WITH THE RENTAL AGREEMENT</label>
                </div>
              </div>  
            <button type="submit" className="w-full text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">submit</button>
            
            
          </form>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <button type="submit" className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          <button type="submit" className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
          <button type="submit" className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
        </div>
      </div>
    </main>
  );
}