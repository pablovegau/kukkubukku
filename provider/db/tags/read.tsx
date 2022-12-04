import { supabase } from 'provider/supabaseClient'

export async function getAllTags() {
  return await supabase.from('Tag').select('*')
}
