import { useRouter } from 'next/router'

import { AccessForm } from 'components/AccessForm'
import { AppLayout } from 'components/AppLayout'
import { useAuth } from 'services/auth'

interface User {
  username: string
  password: string
}

export default function Signup() {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = useAuth()

  const onSubmit = async (data: User) => {
    await auth.signup(data)
    router.push('/')
  }

  return (
    <AppLayout title="Sign up" showHeader={false} showFooter={false}>
      <AccessForm
        questionLabel="¿Vuelves a Kukkubukku?"
        questionLink="/login"
        questionLinkLabel="Iniciar sesión"
        submitLabel="Crear cuenta"
        onSubmit={onSubmit}
      />
    </AppLayout>
  )
}
