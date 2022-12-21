import { useRouter } from 'next/router'

import { AccessForm } from 'components/AccessForm'
import { AppLayout } from 'components/AppLayout'
import { useAuth } from 'services/auth'

interface User {
  username: string
  password: string
}

export default function Login() {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = useAuth()

  const onSubmit = async (data: User) => {
    await auth.login(data)
    router.push('/')
  }

  return (
    <AppLayout title="Log in" showHeader={false} showFooter={false} loginRequired={false}>
      <>
        <AccessForm
          questionLabel="¿Primera vez en Kukkubukku?"
          questionLink="/signup"
          questionLinkLabel="Crea tu cuenta"
          submitLabel="Iniciar sesión"
          onSubmit={onSubmit}
        />
      </>
    </AppLayout>
  )
}
