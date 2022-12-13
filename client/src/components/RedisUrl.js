import React from 'react'

const RedisUrl = () => {
    const redisUrl = process.env.REDIS_URL
    const amazonId = 'amazonaws.com:'

    const index = redisUrl.indexOf(amazonId)
    const length = amazonId.length

    const amazonIdCorrected = parseInt(redisUrl.slice(index + length)) + 1
    const redisUrlCorrected = redisUrl.slice(0, index + length) + amazonIdCorrected

    console.log('redisUrl.js -> redisUrlCorrected', redisUrlCorrected)

    return (
        redisUrlCorrected
    )
}

export default RedisUrl