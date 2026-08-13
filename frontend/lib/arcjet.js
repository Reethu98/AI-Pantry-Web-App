import arcjet from "@arcjet/next";
import { tokenBucket } from "@arcjet/next";

export const aj = arcjet({
    key: process.env.NEXT_PUBLIC_ARCJET_API_KEY,
    rules:[],
})

// Free toer pantry scan limits (10 scans per month)

export const freePantryScans = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristics: ["userID"],
        refillRate:10,
        interval:"30d",
        capacity:10,
        
    })
)

// Free tier meal recommendations (5 per month)
export const freeMealRecommendations = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristics: ["userID"],
        refillRate:5,
        interval:"30d",
        capacity:5,
        
    })
)

//Pro tier - effectively unlimited (very high limits)
export const proTierLimit = aj.withRule(
    tokenBucket({
        mode:"LIVE",
        characteristics: ["userID"],
        refillRate:1000,
        interval:"1d",
        capacity:1000,
        
    })
)

//1000 request per day should be more than enough for any user.
