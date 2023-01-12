import Card from "./Card";

export default function DirectMessageSender() {
    return (
        <>
            <div className="w-full">
                <Card>
                <div className="inline-flex w-full">
                    <div className="w-3/4">
                        <textarea className="w-3/4" placeholder="Message..."></textarea>
                    </div>
                    <div className="w-1/4">
                        <button className="btn btn">
                            Send
                        </button>
                        <button className="btn btn mx-3">
                            Image
                        </button>
                    </div>
                </div>
            </Card>
            </div>
            
        </>

    )
}