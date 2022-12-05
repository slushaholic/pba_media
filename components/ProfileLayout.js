import Card from "./Card";

export default function ProfileHeader() {
    return ( 
       <div className="w-full h-24 flex justify-center items-center border border-outline">
            <div className="top w-7/12 border border-outline">
                <h1>Name of Account</h1>
                <ul>
                    <li>Settings</li>
                </ul>
            </div>
       </div>
    )
}