export type ParamType = string | number | null

export type BodyType<T> = {
    code: number
    errmsg: string
    result: T[]
}

export type ResponseType<T> = Promise<{
    statusCode: number
    headers?: {
        access_token?: string
        refresh_token?: string
    }
    body: BodyType<T>
}>
