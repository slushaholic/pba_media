
export default function handler(req, res) {
    if (req.method === 'POST') {
        const {email, password} = req.body
        res.json({
            email,
            password,
            success: true
        })
    }
}