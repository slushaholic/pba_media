import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import DirectMessageSender from '../components/DirectMessageSender'
import OtherMessage from '../components/OtherMessages'
import UserMessage from '../components/UserMessage'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='flex justify-center items-center my-5 sticky top-0'>
          <div className='my-2 w-1/2'>
            <div>
              <DirectMessageSender />
            </div>
          </div>
        </div>
        {/* Start capy */}
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
            {/* Start copy here */}
            <div className="bg-gray-100">
                <div className="inline-flex">
                    <div className="pic">
                    {/* Profile PICTRUE GOES IN THE SRC */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
                            className="h-12 rounded-full"
                        />
                    </div>
                    <div className="Name">
                    {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                        <p className="p-4"><a className="font-semibold">Elon Musk</a> sent a message</p>
                    </div>
                </div>
                <div className="text container">
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Hello, This is Elon Musk and I am messaging to see how your day is, get back to me when you can.
                    </div>
                    <div className="rounded-md overflow-hidden w-full">
                    {/* An image if the proffessional sender sent a proffessional image */}
                        <img src="https://content.fortune.com/wp-content/uploads/2022/12/AP22347108382924-2.jpg"
                            className="object-siz-down max-w-full max-h-72"
                        />
                    </div>
                </div>
            </div>
            </Card>
          </div>
        </div>
        {/* End Copy here! */}
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
            {/* Start copy here */}
            <div className="bg-gray-100">
                <div className="inline-flex">
                    <div className="pic">
                    {/* Profile PICTRUE GOES IN THE SRC */}
                        <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="h-12 rounded-full"
                        />
                    </div>
                    <div className="Name">
                    {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                        <p className="p-4"><a className="font-semibold">Casimir Stjepan</a> sent a message</p>
                    </div>
                </div>
                <div className="text container">
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                    Hi, my name is Casimir and I am messaging you to see what your favorite type of food is, and if you are wondering mine is toast.
                    Here is a piece of toast.
                    </div>
                    <div className="rounded-md overflow-hidden w-full">
                    {/* An image if the proffessional sender sent a proffessional image */}
                        <img src="https://images.unsplash.com/photo-1612827788868-c8632040ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            className="object-siz-down max-w-full max-h-72"
                        />
                    </div>
                </div>
            </div>
            </Card>
          </div>
        </div>
        {/* End Copy here! */}
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
            {/* Start copy here */}
            <div className="bg-gray-100">
                <div className="inline-flex">
                    <div className="pic">
                    {/* Profile PICTRUE GOES IN THE SRC */}
                        <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="h-12 rounded-full"
                        />
                    </div>
                    <div className="Name">
                    {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                        <p className="p-4"><a className="font-semibold">Zalmon Animikii</a> sent a message</p>
                    </div>
                </div>
                <div className="text container">
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                    Hello, I am an experienced programming trying to collect data to see if people know anything about programming and if so what their favorite programming language is.
                    </div>
                    <div className="rounded-md overflow-hidden w-full">
                    {/* An image if the proffessional sender sent a proffessional image */}
                        <img src="https://www.voxco.com/wp-content/uploads/2021/04/students-feedback-survey-cvr.jpg"
                            className="object-siz-down max-w-full max-h-72"
                        />
                    </div>
                </div>
            </div>
            </Card>
          </div>
        </div>
        {/* End Copy here! */}
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
            {/* Start copy here */}
            <div className="bg-gray-100">
                <div className="inline-flex">
                    <div className="pic">
                    {/* Profile PICTRUE GOES IN THE SRC */}
                        <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="h-12 rounded-full"
                        />
                    </div>
                    <div className="Name">
                    {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                        <p className="p-4"><a className="font-semibold">Harjawaldaz Erastos</a> sent a message</p>
                    </div>
                </div>
                <div className="text container">
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                    Hello there, I am going to college for chemical engineering and was wondering what other people are planning on doing later in their life, so if you'd like to talk about the future get back to me.
                    </div>
                    <div className="rounded-md overflow-hidden w-full">
                    {/* An image if the proffessional sender sent a proffessional image */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzo_lzuE6_lSX-5z7Gg4xpQRFoh9rVKZ6JIA&usqp=CAU"
                            className="object-siz-down max-w-full max-h-72"
                        />
                    </div>
                </div>
            </div>
            </Card>
          </div>
        </div>
        {/* End Copy here! */}
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
            {/* Start copy here */}
            <div className="bg-gray-100">
                <div className="inline-flex">
                    <div className="pic">
                    {/* Profile PICTRUE GOES IN THE SRC */}
                        <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="h-12 rounded-full"
                        />
                    </div>
                    <div className="Name">
                    {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                        <p className="p-4"><a className="font-semibold">Simon</a> sent a message</p>
                    </div>
                </div>
                <div className="text container">
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                    Hello, I am running a survey to see what kind of music people are most interested in. Personally I really like country music, let me know what yours is.
                    </div>
                    <div className="rounded-md overflow-hidden w-full">
                    {/* An image if the proffessional sender sent a proffessional image */}
                        <img src="https://i.pinimg.com/originals/b1/9f/3c/b19f3c389e3a52f14fc90736e4a00bd6.jpg"
                            className="object-siz-down max-w-full max-h-72"
                        />
                    </div>
                </div>
            </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
