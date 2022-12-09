// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { AppLayout } from 'components/AppLayout'
import { MainTitle } from 'components/MainTitle'
import { SelectField } from 'components/Form/SelectField'
import { TextField } from 'components/Form/TextField'
import { Form } from 'styles/pages/create/recipe'
import { Container } from 'styles/pages/add/calendar/meal/styles'
import { SubmitButton } from 'components/Form/SubmitButton'
import { useRouter } from 'next/router'

const mealOptions = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'breakfast', label: 'Desayuno' },
  { value: 'mid-morning_snack', label: 'Almuerzo' },
  { value: 'lunch', label: 'Comida' },
  { value: 'afternoon_snack', label: 'Merienda' },
  { value: 'dinner', label: 'Cena' },
]

const formErrors = {}

const Calendar: NextPage = () => {
  const router = useRouter()
  const date = router.query.date

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

  const onSubmit = (data) => {
    router.push({
      pathname: '/add/calendar/meal/search',
      query: { date, meal: data.meal, diners: data.diners },
    })
  }

  return (
    <AppLayout title=" - Añadir comida">
      <Container>
        <MainTitle>Añadir comidas</MainTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <SelectField
            errors={errors}
            fieldName="meal"
            label="Comida del día"
            options={mealOptions}
            register={register}
            formErrors={formErrors}
            typeOfMandatory={TextField.TYPE_OF_MANDATORY.MANDATORY}
          />

          <TextField
            errors={errors}
            fieldName="diners"
            formErrors={formErrors}
            label="Numero de personas"
            placeholder="1 - 12"
            register={register}
            typeOfMandatory={TextField.TYPE_OF_MANDATORY.MANDATORY}
            inputType="number"
          />

          <SubmitButton value="Buscar receta" />
        </Form>
      </Container>
    </AppLayout>
  )
}

export default Calendar
