import { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  return new Response(`Node ${process.version}`)
}

export const config: Config = {
  path: "/node-version"
}

