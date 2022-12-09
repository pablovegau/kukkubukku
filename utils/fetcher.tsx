/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/ban-ts-comment
// @ts-nocheck

export default async function fetcher(...args: any) {
  const res = await fetch(...args)

  return res.json()
}

export async function fetcherGetCalendarId(url, userId) {
  const res = await fetch(url, {
    headers: {
      userId,
    },
  })

  return res.json()
}
