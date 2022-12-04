import { supabase } from 'provider/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data: tags } = await supabase.from('Tag').select('*')

  res.status(200).json(tags)
}
