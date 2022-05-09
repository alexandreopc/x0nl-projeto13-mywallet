import db from "../db.js"

export default async function tokenValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace('Bearer ', '')

    if (!token) {
        (console.log("nao enviou header"))
        return res.status(400).send('Unauthorized')
    }
    const session = await db.collection("sessions").findOne({ token })
    if (!session)
        return res.status(404).send("User not logged in. Invalid session token")

    const user = await db.collection("users").findOne({ _id: session.userId })
    if (!user)
        return res.status(404).send("Couldn't find user related to this session")

    delete user.password
    res.locals.user = user

    next()
}