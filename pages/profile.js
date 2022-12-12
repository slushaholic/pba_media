import Card from "../components/Card"
import ProfileLayout from "../components/ProfileLayout"
import RecivedPost from "../components/RecivedPost"
export default function Profile() {
  return (
    <>
      <ProfileLayout />
      <div className='flex justify-center items-center my-5'>
        <div className='my-2 w-10/12'>
          <Card>
            <RecivedPost />
          </Card>
        </div>
      </div>
    </>
  )
}