import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import SendPost from '../components/SendPost'
import RecivedPost from '../components/RecivedPost'
export default function Home() {
  return (
    <div className='container grow'>
       <div className='flex justify-center items-center'>
        <div className='w-3/4 ml-64'>
          <Card>
            <SendPost />
          </Card>
        </div>
    </div>
    <div className='flex justify-center items-center my-5'>
      <div className='w-3/4 ml-64'>
        <Card>
          <RecivedPost />
        </Card>
      </div>
    </div>
  </div>
   
      
   
  )
}
