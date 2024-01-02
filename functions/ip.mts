import { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  const res = await fetch("https://jsonip.com/")
  const body = await res.json()
  return new Response(body.ip)
}

export const config: Config = {
  path: "/lambda-ip"
}

