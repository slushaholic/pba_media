import { unstable_getServerSession } from "next-auth"
import {authOptions} from './auth/[...nextauth]'

export default async (req, res) => {
    const session = await unstable_getServerSession( req, ers, authOptions)

    if (session) {
        res.send({
            content: "This is protected content.",
        })
    } else {
        res.send({
            error: "You must be signed in to view this content",
        })
    }
}
