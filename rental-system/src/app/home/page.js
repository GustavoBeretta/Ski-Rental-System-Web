'use client';
import { useRouter } from 'next/navigation'; // Correção: importar de 'next/navigation' em vez de 'next/router'

export default function Home() {
  const router = useRouter();

  const handleClickEditAccount = () => {
    router.push('/edit-account');
  }
  const handleClickRentalRequests = () => {
    router.push('/rental-requests');
  }

  return (
    <main className="flex flex-col items-center justify-between pt-52 py-0 mb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-60">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl mb-1 text-[#8F8E8E]">NEW RENTAL REQUEST</h1>
          <h2 className="text-sm mb-4 text-[#8F8E8E] mb-2">Make sure guest information is updated!</h2>
          <form className="space-y-4 md:space-y-6 w-3/4 mb-4" action="#">
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
                      <input id="ski-board" aria-describedby="ski-board" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="ski-board" className="text-[#8F8E8E]">SKI/BOARD</label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="boots" aria-describedby="boots" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="boots" className="text-[#8F8E8E]">BOOTS</label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="helmet" aria-describedby="helmet" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="helmet" className="text-[#8F8E8E]">HELMET</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button type="submit" className="w-2/4 text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">submit</button>
        </div>
        <div className="flex flex-col justify-center space-y-10">
          <button type="submit" onClick={handleClickRentalRequests} className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-extrabold rounded-3xl text-3xl px-5 py-2.5 text-center h-full">Rental Historic</button>
          <button type="button" onClick={handleClickEditAccount} className="text-white bg-[#4094A5] hover:bg-[#81C9D8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-extrabold rounded-3xl text-3xl px-5 py-2.5 text-center h-full">Account Settings </button>
        </div>
      </div>
    </main>
  );
}
