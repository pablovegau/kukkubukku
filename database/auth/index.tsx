import { supabase } from 'database/supabaseClient'

interface User {
  username: string
  password: string
}

export async function signUpAuth(data: User) {
  const userData = await supabase.auth.signUp({
    email: data.username,
    password: data.password,
  })

  return userData
}

export async function logInAuth(data: User) {
  const userData = await supabase.auth.signInWithPassword({
    email: data.username,
    password: data.password,
  })

  return userData
}
