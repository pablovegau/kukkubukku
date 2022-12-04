/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitButton } from 'components/Form/SubmitButton'
import { TextField } from 'components/Form/TextField'
import { Logo } from 'components/Logo'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Form } from 'styles/pages/create/recipe'
import { Container, LogoWrapper, Question, QuestionLink, QuestionWrapper, SubmitButtonWrapper } from './styles'
import { FormError } from 'pages/create/recipe'

interface Props {
  questionLabel: string
  questionLinkLabel: string
  questionLink: string
  submitLabel: string
  onSubmit: any
}

const formErrors: FormError = {}

export default function AccessForm({ questionLabel, questionLinkLabel, questionLink, submitLabel, onSubmit }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

  return (
    <Container>
      <LogoWrapper>
        <Logo width={140} />
      </LogoWrapper>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/**
         * username / email
         */}
        <TextField
          errors={errors}
          fieldName="username"
          formErrors={formErrors}
          label="Correo electrónico"
          placeholder="e.g. carbonara@kukkubukku.com"
          register={register}
          inputType="email"
        />

        {/**
         * password
         */}
        <TextField
          errors={errors}
          fieldName="password"
          formErrors={formErrors}
          label="Contraseña"
          register={register}
          inputType="password"
        />

        <SubmitButtonWrapper>
          <SubmitButton value={submitLabel} />
        </SubmitButtonWrapper>
      </Form>

      <QuestionWrapper>
        <Question>{questionLabel}</Question>
        <Link href={questionLink}>
          <QuestionLink>{questionLinkLabel}</QuestionLink>
        </Link>
      </QuestionWrapper>
    </Container>
  )
}
