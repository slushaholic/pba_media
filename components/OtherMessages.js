export default function OtherMessage() {
    return(
        <>
        <div className="p-1">
            <div className="inline-flex w-full">
                <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="h-12 rounded-full"
                />
                <p className="p-3"><a className="font-semibold">Josh Wise</a></p>
            </div>
            <div className="text container">
                <div className="text-sm p-1">
                    This is a sample text that it will look like. So I have to make it super long to show that it will work properly the way I want it. Thank you for reading this massively long text since it is completely pointless
                    and has no affect on the code at all. Like why are you still reading this text I don't understand you.
                </div>
                <div className="rounded-md overflow-hidden w-full">
                    <img src="https://images.unsplash.com/photo-1612827788868-c8632040ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        className="object-siz-down max-w-full max-h-72"
                    />
                </div>
            </div>
        </div>
    </>    )
}