export default function Register() {
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
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '65vh'}}>
    <div className="w-full md:w-1/2 flex flex-col">
      <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p className="text-center text-3xl">Create an Account!</p>
        <form
          className="flex flex-col pt-3 md:pt-8"
          onsubmit="event.preventDefault();"
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
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
             <label htmlFor="rePassword" className="text-lg">
              Enter Password Again
            </label>
            <input
              type="password"
              id="rePassword"
              placeholder="Enter Password Again"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          
          <input
            type="submit"
            defaultValue="Log In"
            className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
          />
        </form>
      </div>
    </div>
  </div>
</>    )
}