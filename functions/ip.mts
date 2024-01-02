import { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  const data = await fetch("https://jsonip.com/")
  const body = await data.json()
  return new Response(body.ip)
}

export const config: Config = {
  path: "/lambda-ip"
}

