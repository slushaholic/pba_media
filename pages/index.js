import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import SendPost from '../components/SendPost'
import RecivedPost from '../components/RecivedPost'
import UserPost from '../components/UserPost'
import UserMessage from '../components/UserMessage'
export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='flex justify-center items-center my-5'>
                    <div className='my-2 w-10/12'>
                        <Card>
                            <SendPost />
                        </Card>
                    </div>
                </div>
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
                                        <p className="p-4"><a className="font-semibold">Elon Musk</a> Shared a post</p>
                                    </div>
                                </div>
                                <div className="float-right inline-flex my-2">
                                    <div className="like">
                                        <p>Like</p>
                                    </div>
                                    <div className="comment mx-2">
                                        <p>Comment</p>
                                    </div>
                                </div>
                                <div className="text container">
                                    <div className="text-sm mx-12 p-1">
                                        {/* Proffesional paragraph of message sent */}
                                        Had a great time at the conference today! Loving the California sun!
                                    </div>
                                    <div className='border-solid border-2 border-gray-600'></div>
                                    <div className="rounded-md overflow-hidden w-full p-2">
                                        {/* An image if the proffessional sender sent a proffessional image */}
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfD_J1bYZ0EMFdPuvKf46QUWnMerHNr2_BDnr2S0H2wg&usqp=CAU&ec=48600112https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klook.com%2Fcity%2F124-los-angeles-things-to-do%2F&psig=AOvVaw3V7OPJU0hFoysIvWAT_i-J&ust=1681919215140000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjh7ePjs_4CFQAAAAAdAAAAABAIttps://images.unsplash.com/photo-1612827https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/uni4vfxknblsldmpxmxq.jpg788868-c8632040ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                            className="object-siz-down max-w-full max-h-72 rounded rounded-full"
                                        />
                                    </div>
                                    <div className='inline-flex my-2 p-2'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0LKQb4WDl6GiyEj00Hm0PctCtOUs9fvN3BfoJhyyPg&usqp=CAU&ec=48600112'
                                            className="h-12 rounded-full"
                                        />
                                        <p className="p-4"><a className="font-semibold">Donald Trump</a> Can't wait to hangout later Elon.</p>
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
                                        <img src="https://thumbs.dreamstime.com/b/jeff-bezos-jeff-bezos-th-annual-lacma-art-film-gala-presented-gucci-held-lacma-los-angeles-usa-november-234026571.jpg"
                                            className="h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="Name">
                                        {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                                        <p className="p-4"><a className="font-semibold">Jeff Bezos</a> Shared a post</p>
                                    </div>
                                </div>
                                <div className="float-right inline-flex my-2">
                                    <div className="like">
                                        <p>Like</p>
                                    </div>
                                    <div className="comment mx-2">
                                        <p>Comment</p>
                                    </div>
                                </div>
                                <div className="text container">
                                    <div className="text-sm p-2 mx-10">
                                        {/* Proffesional paragraph of message sent */}
                                        Definetly winning the Business Competition
                                    </div>

                                    <div className='border-solid border-2 border-gray-600'></div>
                                    <div className="rounded-md overflow-hidden w-full">
                                        {/* An image if the proffessional sender sent a proffessional image */}

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='inline-flex my-2 p-2'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-s9mb40pooaNzAaEq-TAjPLStfBmHoqCoaW1hVbmfA&usqp=CAU&ec=48665701'
                                            className="h-12 rounded rounder-full"
                                        />
                                        <div className='flex flex-col'>
                                            <p className="p-4"><a className="font-semibold">Mark Zuckerburg</a> commented</p>
                                            <p className='mx-5'>Not on my watch.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex my-2 p-2'>
                                            <img src='https://thumbs.dreamstime.com/b/jeff-bezos-jeff-bezos-th-annual-lacma-art-film-gala-presented-gucci-held-lacma-los-angeles-usa-november-234026571.jpg'
                                                className="h-12 rounded-full"
                                            />
                                            <div className='flex flex-col'>
                                                <p className="p-4"><a className="font-semibold">Jeff Bezos</a> commented</p>
                                                <p className='mx-5'>@m.zucks Never META worse take.</p>
                                            </div>
                                        </div>
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
                        <div className="bg-gray-100">
                                <div className="inline-flex">
                                    <div className="pic">
                                        {/* Profile PICTRUE GOES IN THE SRC */}
                                        <img src="https://thumbs.dreamstime.com/b/jeff-bezos-jeff-bezos-th-annual-lacma-art-film-gala-presented-gucci-held-lacma-los-angeles-usa-november-234026571.jpg"
                                            className="h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="Name">
                                        {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                                        <p className="p-4"><a className="font-semibold">Bruce Wayne</a> Shared a post</p>
                                    </div>
                                </div>
                                <div className="float-right inline-flex my-2">
                                    <div className="like">
                                        <p>Like</p>
                                    </div>
                                    <div className="comment mx-2">
                                        <p>Comment</p>
                                    </div>
                                </div>
                                <div className="text container">
                                    <div className="text-sm p-2 mx-10">
                                        {/* Proffesional paragraph of message sent */}
                                        Can't wait to see all the competitors at Anaheim this year.
                                    </div>

                                    <div className='border-solid border-2 border-gray-600'></div>
                                    <div className="rounded-md overflow-hidden w-full">
                                        {/* An image if the proffessional sender sent a proffessional image */}

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='inline-flex my-2 p-2'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-s9mb40pooaNzAaEq-TAjPLStfBmHoqCoaW1hVbmfA&usqp=CAU&ec=48665701'
                                            className="h-12 rounded rounder-full"
                                        />
                                        <div className='flex flex-col'>
                                            <p className="p-4"><a className="font-semibold">Batman</a> commented</p>
                                            <p className='mx-5'>Great Guy.</p>
                                        </div>
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
                                        <img src="https://thumbs.dreamstime.com/b/jeff-bezos-jeff-bezos-th-annual-lacma-art-film-gala-presented-gucci-held-lacma-los-angeles-usa-november-234026571.jpg"
                                            className="h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="Name">
                                        {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                                        <p className="p-4"><a className="font-semibold">Barack Obama</a> Shared a post</p>
                                    </div>
                                </div>
                                <div className="float-right inline-flex my-2">
                                    <div className="like">
                                        <p>Like</p>
                                    </div>
                                    <div className="comment mx-2">
                                        <p>Comment</p>
                                    </div>
                                </div>
                                <div className="text container">
                                    <div className="text-sm p-2 mx-10">
                                        {/* Proffesional paragraph of message sent */}
                                        Let me be clear. BPA Nationals is going to be great this year. Cannot wait to compete.
                                    </div>

                                    <div className='border-solid border-2 border-gray-600'></div>
                                    <div className="rounded-md overflow-hidden w-full">
                                        {/* An image if the proffessional sender sent a proffessional image */}

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='inline-flex my-2 p-2'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-s9mb40pooaNzAaEq-TAjPLStfBmHoqCoaW1hVbmfA&usqp=CAU&ec=48665701'
                                            className="h-12 rounded rounder-full"
                                        />
                                        <div className='flex flex-col'>
                                            <p className="p-4"><a className="font-semibold">George Bush</a> commented</p>
                                            <p className='mx-5'>You're gonna lose.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='inline-flex my-2 p-2'>
                                            <img src='https://thumbs.dreamstime.com/b/jeff-bezos-jeff-bezos-th-annual-lacma-art-film-gala-presented-gucci-held-lacma-los-angeles-usa-november-234026571.jpg'
                                                className="h-12 rounded-full"
                                            />
                                            <div className='flex flex-col'>
                                                <p className="p-4"><a className="font-semibold">Michelle Obama</a> commented</p>
                                                <p className='mx-5'>You've got it honey.</p>
                                            </div>
                                        </div>
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
                                        <img src="https://thumbs.dreamstime.com/b/jeff-bezos-jeff-bezos-th-annual-lacma-art-film-gala-presented-gucci-held-lacma-los-angeles-usa-november-234026571.jpg"
                                            className="h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="Name">
                                        {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                                        <p className="p-4"><a className="font-semibold">Christopher Columbus</a> Shared a post</p>
                                    </div>
                                </div>
                                <div className="float-right inline-flex my-2">
                                    <div className="like">
                                        <p>Like</p>
                                    </div>
                                    <div className="comment mx-2">
                                        <p>Comment</p>
                                    </div>
                                </div>
                                <div className="text container">
                                    <div className="text-sm p-2 mx-10">
                                        {/* Proffesional paragraph of message sent */}
                                        I sailed the ocean blue just to compete this week. Hopefully there is a navigation competition.
                                    </div>

                                    <div className='border-solid border-2 border-gray-600'></div>
                                    <div className="rounded-md overflow-hidden w-full">
                                        {/* An image if the proffessional sender sent a proffessional image */}

                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='inline-flex my-2 p-2'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-s9mb40pooaNzAaEq-TAjPLStfBmHoqCoaW1hVbmfA&usqp=CAU&ec=48665701'
                                            className="h-12 rounded rounder-full"
                                        />
                                        <div className='flex flex-col'>
                                            <p className="p-4"><a className="font-semibold">Captain Cook</a> commented</p>
                                            <p className='mx-5'>You don't even make the top ten list of explorers.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                {/* End Copy here! */}
                
            </div>
        </>
    )
}
