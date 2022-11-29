export default function Login() {
    return ( 
        <>
        <link
    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n\n        .font-family-karla {\n            font-family: karla;\n        }\n    "
    }}
  />
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
    <div className="w-full md:w-1/2 flex flex-col">
      <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p className="text-center text-3xl">Welcome.</p>
        <form
          className="flex flex-col pt-3 md:pt-8"
          onsubmit="validateForm();"
        >
          <div className="flex flex-col pt-4">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <input
            type="submit"
            defaultValue="Log In"
            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
          />
        </form>
        <div className="text-center pt-12 pb-12">
          <p>
            Don't have an account?{" "}
            <a href="register" className="underline font-semibold">
              Register here.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</>
    )

}

function validateForm(){
  const email = document.querySelector('#email').value
  console.log(email)
}