import Card from "./Card";
import RecivedPost from "./RecivedPost";

export default function ProfileLayout() {
    return ( 
        <>
            <div className="top w-7/12 border border-outline">
                <img  src="https://images.freeimages.com/images/large-previews/43a/an-old-stone-wall-1641420.jpg"
                      className="w-full p-0"
                />
                <h1 className="">Joshua Wise</h1>
                <ul>
                    <li><a className="" href="/Settings">Settings</a></li>
                </ul>
            </div>
        </>
       
    )
}