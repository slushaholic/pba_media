import { unstable_getServerSession } from "next-auth"
import  nextAuth  from "./auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, nextAuth)

    if (session) {
        return res.send({
            content: "This is protected content. You can view this content because you are signed in.",
        })
    }

    res.send({
        error: "You must be signed in to view the protected content of this page."
    })
}