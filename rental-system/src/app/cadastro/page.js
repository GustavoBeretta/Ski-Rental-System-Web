export default function Cadastro() {
  return (
    <main>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 lg:py-0 snap-none">
          <h1 className="text-4xl text-[#8F8E8E] pt-6  ">Create New Account</h1>
          <p className="text-l text-[#8F8E8E] mt-4">Already registered? <a href=".\login" className="text-sm font-medium text-[#8F8E8E] hover:underline hover:text-black">Sing in </a></p>
          <div className="flex items-center content-center flex-col w-6/12">
            <form className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 p-6 space-y-4 md:space-y-6 sm:p-8">
              {[
                { label: "Full name", name: "name" },
                { label: "Email", name: "email" },
                { label: "Password", name: "password" },
                { label: "Password confirmation", name: "passwordConfirmation" },
                { label: "Phone number", name: "phoneNumber" },
                { label: "Drive's Licence", name: "driveLicence" },
                { label: "State", name: "state" },
                { label: "City", name: "city" },
                { label: "Zip Code", name: "zipCode" },
                { label: "Address", name: "address" },
                { label: "Gender", name: "gender", options: ["Masculine", "Feminine"] },
                { label: "US Shoe Size", name: "shoeSize" },
                { label: "Skyer Type", name: "skyerType", options: ["Beginner", "Intermediate", "Advanced"] },
                { label: "Snowboaeder Type", name: "snowboarderType", options: ["Beginner", "Intermediate", "Advanced"] },
                { label: "Age", name: "age" },
                { label: "Weight (lbs)", name: "weight" },
                { label: "Heigth (FN/IN)", name: "height" },
              ].map((input) => (
                <div key={input.name}>
                  <label htmlFor={input.name} className="block mb-1 text-sm font-medium text-[#8F8E8E]">
                    {input.label}
                  </label>
                  {input.options ? (
                    <select name={input.name} id={input.name} className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                      <option value="" disabled selected hidden>Select an option</option>
                      {input.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input type="text" name={input.name} id={input.name} className="bg-[#ECECEC] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  )}
                </div>
              ))}
            </form>
            <button type="submit" className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4 focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2.5 text-center">Create Account</button>
          </div>
        </div>
      </section>
    </main>
  );
} 