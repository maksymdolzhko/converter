'use client'

export default async function ErrorConvertor({error}: {error: Error}) {
    return(
        <h1>{error.message}</h1>
    )
}
