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
      <div className='container'>
        <div className='inline-flex'>
          <div className='flex justify-center items-center my-5 relative'>
          <div className='my-2 w-1/2'>
              <DirectMessageSender />
          </div>
        </div>
        <div className='flex justify-center items-center my-5 relative'>
          <div className='my-2 w-1/2'>
            
          </div>
        </div>
        </div>
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
              <UserMessage />
            </Card>
          </div>
        </div>
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
              <OtherMessage />
            </Card>
          </div>
        </div>
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
              <OtherMessage />
            </Card>
          </div>
        </div>
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
              <OtherMessage />
            </Card>
          </div>
        </div>
        <div className='flex justify-center items-center my-5'>
          <div className='my-2 w-10/12'>
            <Card>
              <OtherMessage />
            </Card>
          </div>
        </div>
        <div className='flex justify-center items-center my-5'>
        </div>
      </div>
    </>
  )
}
