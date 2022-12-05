export default function SendPost() {
    return (
        <div className="inline flex w-full">
            <div className="p-1 ">
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="h-12 rounded-full"
                />
                    <div className="name">
                        <p className="text-sm">Josh Wise</p>
                    </div>
            </div>
            <div className="w-full p-2">
                    <textarea placeholder="Send a Post" className="grow p-3 w-full"></textarea>
                <div className="inline-flex float-right">
                    <button className="btn m-2">Send</button>
                    <button className="btn m-2">Image</button>
                </div>
            </div>
        </div>
    )
}