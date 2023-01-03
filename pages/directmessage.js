import DirectMessageBottom from "../components/DirectMessageBottom"
import CardMessages from "../components/CardMessages"
export default function directmessage() {
  return (
    <>
      <div className="mx-h-5/6 border border-outline">
            <CardMessages>
              <div className="UserMessage w-full border border-outline p-2">
                <div className="UserInfo border border-outline w-fit p-2">
                  <h1 className="text-s">Joshua Wise</h1>
                  <p className="text-xs">Sent Message</p>
                </div>
                <div className="container p-2">
                  <p className="text-s">This is a sample text message instead of lorem ipsum because I don't want to pull up a generator.</p>
                </div>
              </div>
            </CardMessages>
            <CardMessages>
              <div className="UserMessage w-full border border-outline p-2">
                <div className="UserInfo border border-outline w-fit p-2">
                  <h1 className="text-s">Joshua Wise</h1>
                  <p className="text-xs">Sent Message</p>
                </div>
                <div className="container p-2">
                  <p className="text-s">This is a sample text message instead of lorem ipsum because I don't want to pull up a generator.</p>
                </div>
              </div>
            </CardMessages>
            <CardMessages>
              <div className="UserMessage w-full border border-outline p-2">
                <div className="UserInfo border border-outline w-fit p-2">
                  <h1 className="text-s">Joshua Wise</h1>
                  <p className="text-xs">Sent Message</p>
                </div>
                <div className="container p-2">
                  <p className="text-s">This is a sample text message instead of lorem ipsum because I don't want to pull up a generator.</p>
                </div>
              </div>
            </CardMessages>
            <CardMessages>
              <div className="UserMessage w-full border border-outline p-2">
                <div className="UserInfo border border-outline w-fit p-2">
                  <h1 className="text-s">Joshua Wise</h1>
                  <p className="text-xs">Sent Message</p>
                </div>
                <div className="container p-2">
                  <p className="text-s">This is a sample text message instead of lorem ipsum because I don't want to pull up a generator.</p>
                </div>
              </div>
            </CardMessages>
      </div>
      <DirectMessageBottom />
    </>
  )
}