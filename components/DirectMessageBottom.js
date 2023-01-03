import CardMessages from "../components/CardMessages"
export default function DirectMessageBottom () {
    return (
        <div className="absolute bottom-x-0 bottom-0 w-10/12 m-10">
        <div className="flex w-11/12 justify-center items-center">
          <CardMessages>
          <div className="w-full inline-flex">
              <textarea className="textarea textarea-bordered w-11/12" placeholder="Send a Message..."></textarea>
                <button className="btn btn my-3 mx-2">
                Send
              </button>
              <button className="btn btn my-3">
                Images
              </button>
          </div>
          </CardMessages>    
        </div>
      </div>
    )
}