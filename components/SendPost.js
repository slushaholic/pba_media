export default function SendPost() {
    return (
        <div className="container bg-gray-100">
            <div className="inline-flex w-full">
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="h-12 rounded-full"
                />
                <p className="p-3"><a className="font-semibold">Josh Wise</a> send a post</p>
            </div>
            <div className="container">
                <div className="p-2 flex flex-column justify-between">
                    <textarea placeholder="Send a Post" className="p-4 w-3/4 border border-outline"></textarea>
                    <div className="inline-flex float-right w-1/4">
                        <button className="btn m-5 text-white bg-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-600 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-600">Send</button>
                        <button className="btn my-5 text-white bg-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-600 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:border-gray-600">Image</button>
                    </div>
                </div>
            </div>
        </div>
    )
}