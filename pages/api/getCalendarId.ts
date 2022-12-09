// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { NextApiRequest, NextApiResponse } from 'next'
import { getCalendarId } from 'services/db/calendar/read'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data: calendarId } = await getCalendarId(req.headers.userId)

  res.status(200).json(calendarId)
}
