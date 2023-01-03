import Card from "../components/Card";
import MessageBox from "../components/MessageBox";
export default function SendMessaage() {
    return (
        <>
            <div>
                <div className='flex m-5'>
                    <div className='my-2 w-8/12 absolute bottom-6'>
                        <Card>
                            <div className="">
                                <input type="text" placeholder="Send Message" className="input input-bordered w-full max-w-xl" />
                                <div className="float-right">
                                    <button className="btn btn-text-white bg-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-600 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-600 mx-1">Send</button>
                                    <button className="btn btn-text-white bg-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-600 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-600">Image</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className=" flex m-5">
                    <div className="my-2 w-8/12 absolute bottom-32">
                        <MessageBox>
                           
                        </MessageBox>
                    </div>
                </div>
            </div>

        </>
    )
}