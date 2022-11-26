/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/ban-ts-comment
// @ts-nocheck

export default async function fetcher(...args: any) {
  const res = await fetch(...args)

  return res.json()
}
