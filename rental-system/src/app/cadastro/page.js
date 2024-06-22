export default function Cadastro() {
  const inputs = [
    { label: "Full name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Password", name: "password" },
    { label: "Password confirmation", name: "passwordConfirmation" },
    { label: "Gender", name: "gender", options: ["Masculine", "Feminine"] },
    { label: "US Shoe Size", name: "shoeSize" },
    { label: "Age", name: "age" },
    { label: "Weight (KG)", name: "weight" },
    { label: "Height (CM)", name: "height" },
  ];

  return (
    <main>
      <section className="flex flex-col items-center justify-center px-6 py-8 lg:py-0 snap-none">
        <h1 className="text-4xl text-[#8F8E8E] pt-6">Create New Account</h1>
        <p className="text-l text-[#4094A5] mt-4">
          Already registered? <a href="/" className="text-sm font-medium text-[#4094A5] hover:underline hover:text-black">Sign in</a>
        </p>
        <div className="flex items-center content-center flex-col w-6/12">
          <form className="w-full bg-white rounded-lg p-6 space-y-4 sm:p-8">
            {inputs.map((input) => (
              <div key={input.name}>
                <label htmlFor={input.name} className="block mb-1 text-sm font-medium text-[#8F8E8E]">
                  {input.label}
                </label>
                {input.options ? (
                  <select name={input.name} id={input.name} className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required>
                    <option value="" disabled selected hidden>Select an option</option>
                    {input.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input type="text" name={input.name} id={input.name} className="bg-[#ECECEC] border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" required />
                )}
              </div>
            ))}
          </form>
          <button type="submit" className="bg-[#4094A5] hover:bg-[#81C9D8] text-white font-semibold text-lg rounded-lg p-2.5 w-8/12 mt-4 mb-4">sign up</button>
        </div>
      </section>
    </main>
  );
}
