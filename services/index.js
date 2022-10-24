// TODO: move to TS

import { supabase } from 'services/supabase'

export async function getRecipes() {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')

  return { data, error }
}

// useEffect(() => {
//   getRecipes().then((recipes) => {
//     setRecipes(recipes.data);
//   })
// }, [])

export async function getTags(id) {
  let { data, error } = await supabase
    .from('recipes')
    .select('Tags')

    return { data, error }
}
