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
            <p>Your Timeline</p>
          </div>
        </div>
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
              <UserMessage></UserMessage>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
