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
                        <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            className="h-12 rounded-full"
                        />
                    </div>
                    <div className="Name">
                    {/* The name of the profile goes  in the A tag don't change the shared a post thing */}
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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
                        <p className="p-4"><a className="font-semibold">Josh Wise</a> Shared a post</p>
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
                    <div className="text-sm p-1">
                    {/* Proffesional paragraph of message sent */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus tortor, posuere vitae erat vel, placerat volutpat turpis. Nulla sit amet dolor eget arcu dignissim auctor vel non nulla. Nunc mattis orci non dui scelerisque, eu accumsan nisl ullamcorper. Sed faucibus sem quam, at auctor lorem fermentum fringilla. Donec et leo porta, consectetur massa in, dapibus mauris. Vestibulum vitae imperdiet odio. Proin maximus dui quis odio vehicula, vitae auctor augue elementum. Orci varius natoque penatibus et magnis dis parturient montes.
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

        
      </div>
    </>
  )
}
