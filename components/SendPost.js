export default function SendPost() {
    return (
            <div className="container">
                <div className="inline-flex w-full">
                     <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="h-12 rounded-full"
                />
                <p className="p-3"><a className="font-semibold">Josh Wise</a> send a post</p>
                </div>
                <div className="container">
                    <div className="p-2">
                        <textarea placeholder="Send a Post" className="grow p-4 w-3/4 border border-outline"></textarea>
                        <div className="inline-flex float-right mr-9 px-4">
                        <button className="btn m-5">Send</button>
                        <button className="btn my-5">Image</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}