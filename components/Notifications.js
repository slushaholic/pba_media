export default function Notifications() {
    return (
            <>
                <h1 className="text-[20px] font-semibold">Notifications</h1>
                <div className="p-1">
                    <h2 className="font-semibold">Post Notifications</h2>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="">Friends Only</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-gray-600" checked />
                        </label>
                    </div>                   
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="">Everyone</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-gray-600" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="">Private</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-gray-600" checked />
                        </label>
                    </div>
                </div>
            </>
        )
}