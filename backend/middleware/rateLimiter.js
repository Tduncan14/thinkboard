import ratelimit from "../Config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try {
        const key = req.ip || "anonymous"

        const { success } = await ratelimit.limit('my-key-limit') // ✅ FIXED

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later",
            })
        }

        next() // ✅ only called when allowed
    } catch (error) {
        console.log("Rate limit error", error)
        next(error)
    }
}

export default rateLimiter
