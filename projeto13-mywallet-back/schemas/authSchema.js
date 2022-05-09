import joi from "joi"

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})
export async function validateSignUp(req, res, next) {
    try {
        await signUpSchema.validateAsync(req.body, { abortEarly: false })
    } catch (e) {
        res.status(400).send(e)
    }
    next()
}

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})
export async function validateSignIn(req, res, next) {
    try {
        await signInSchema.validateAsync(req.body, { abortEarly: false })
    } catch (e) {
        res.status(400).send(e)
    }
    next()
}