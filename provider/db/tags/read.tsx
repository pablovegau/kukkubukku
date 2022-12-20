import { supabase } from 'provider/supabaseClient'
import { TABLE_NAMES } from '../constants'

export async function getAllTags() {
  return await supabase.from(TABLE_NAMES.TAG).select('*')
}
