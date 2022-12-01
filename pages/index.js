import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import SendPost from '../components/SendPost'
export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-3/4 ml-28'>
    <Card>
        <SendPost />
    </Card>
      </div>
    </div>
      
   
  )
}
