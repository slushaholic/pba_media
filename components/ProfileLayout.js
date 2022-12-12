import Card from "./Card";
import CardProfile from "../components/CardProfile"

export default function ProfileLayout() {
  return (
    <div className='flex justify-center items-center my-5'>
      <div className='w-10/12 mx-4'>
        <CardProfile>
          <div className=" inline-flex w-full">
            <div className="w-full">
              <div className="inline-flex w-full">
              <div>
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="h-32 overflow-hidden grow rounded-lg m-2 mx-w-12"
                />
              </div>
                <div className="w-full p-2">
                  <p className="float-right text-[15px] font-bold"><a href="/settings">Settings</a></p>
                  <h1 className="mx-2 text-[25px] font-semibold">Josh Wise</h1>
                  <p><a className="px-2"><a className="font-semibold">@exampleEmail</a>.com</a></p>
                  <p className="text-[15px] px-2 my-1">Total Posts: <a className="font-semibold">2</a></p>
                  <p className="text-[15px] px-2">Total Views: <a className="font-semibold">3</a></p>
                </div>
              </div>
            </div>
          </div>
        </CardProfile>
      </div>
    </div>
  )
}