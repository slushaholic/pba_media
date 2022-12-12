import Card from "../components/Card"
import ProfileLayout from "../components/ProfileLayout"
import Security from "../components/Security"
import Notifications from "../components/Notifications"
import Help from "../components/Help"
import Policy from "../components/Policy"
export default function Settings() {
    return (
        <>
            <ProfileLayout />
            <div className='flex justify-center items-center my-5'>
                <div className='my-2 w-10/12'>
                    <Card>
                        <Security />
                    </Card>
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className='my-2 w-10/12'>
                    <Card>
                        <Notifications />
                    </Card>
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className='my-2 w-10/12'>
                    <Card>
                        <Help />
                    </Card>
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className='my-2 w-10/12'>
                    <Card>
                        <Policy />
                    </Card>
                </div>
            </div>
        </>

    )
}