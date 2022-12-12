import Card from "./Card";
import CardProfile from "../components/CardProfile"

export default function ProfileLayout() {
  return (
    <div className='flex justify-center items-center my-5'>
      <div className='w-10/12 mx-4'>
        <CardProfile>
            <div className="border border-outline inline-flex w-full">
              <div>
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="h-32 overflow-hidden grow rounded-lg m-2 mx-w-full"
                />
              </div>
            </div>
        </CardProfile>
      </div>
    </div>
  )
}