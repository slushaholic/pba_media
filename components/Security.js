export default function Security() {
    return (
        <>
            <h1 className="text-[20px] font-semibold">Security</h1>
            <div className="">
                <div className="border border-outline p-1">
                    <h2 className="font-semibold">User Settings</h2>
                    <p>Username: exampleUsername</p>
                    <p>Password: examplePassword</p>
                </div>
                <div className="border border-outline p-1">
                    <h2 className="font-semibold">Profile Privacy</h2>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="">Public</span>
                            <input type="radio" name="radio-1" className="radio checked:bg-gray-600" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="">Private</span>
                            <input type="radio" name="radio-1" className="radio checked:bg-gray-600" checked />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}