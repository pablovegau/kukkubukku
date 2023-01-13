// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getLocalTimeZone, today } from '@internationalized/date'
import { AppLayout } from 'components/AppLayout'
import { RangeCalendar } from 'components/Calendar/RangeCalendar'
import { MainTitle } from 'components/MainTitle'
import { TextField } from 'components/Form/TextField'
import { SubmitButton } from 'components/Form/SubmitButton'
import { Form } from 'styles/pages/create/recipe'
import { useRouter } from 'next/router'
import { getCalendarEventsBetweenDates } from 'services/db/calendar/read'
import { addPlanification, addPlanificationEvents } from 'services/db/calendar/write'
import { PagesContainer } from 'styles/pages/sharedStyles'
import { RangeCalendarWrapper, SubmitButtonWrapper } from 'styles/pages/calendar/share/styles'
import { Textarea } from 'components/Form/TextArea'

const formErrors = {}

export default function SharePlanification() {
  const router = useRouter()
  const { calendarId } = router.query

  const [value, setValue] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

  const onSubmit = async (data) => {
    // TODO: move to services
    const { data: planning } = await addPlanification(data.planificationName, data.description)

    const { data: calendarEvents } = await getCalendarEventsBetweenDates(calendarId, value.start, value.end)

    const calendarEventsDates = []
    let position = -1

    const planificationEvents = []

    calendarEvents.forEach((calendarEvent) => {
      if (!calendarEventsDates.some((el) => el === calendarEvent.scheduleAt)) {
        calendarEventsDates.push(calendarEvent.scheduleAt)
        position++
      }

      planificationEvents.push({
        recipeId: calendarEvent.recipeId,
        meal: calendarEvent.meal,
        planningId: planning?.id,
        dayPosition: position,
      })
    })

    await addPlanificationEvents(planificationEvents)

    router.push('/calendar')
  }

  return (
    <AppLayout title="- Crear planificación">
      <PagesContainer>
        <MainTitle>Guardar planificación</MainTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            errors={errors}
            fieldName="planificationName"
            formErrors={formErrors}
            label="Nombre de la planificación"
            placeholder="e.g. Menu vegano para una semana"
            register={register}
            typeOfMandatory={TextField.TYPE_OF_MANDATORY.MANDATORY}
          />

          <Textarea
            errors={errors}
            fieldName="description"
            formErrors={formErrors}
            label="Descripción"
            register={register}
          />

          <RangeCalendarWrapper>
            <RangeCalendar aria-label="Calendar" value={value} onChange={setValue} calendarId={calendarId} />
          </RangeCalendarWrapper>

          <SubmitButtonWrapper>
            <SubmitButton value="Crear planificación" />
          </SubmitButtonWrapper>
        </Form>
      </PagesContainer>
    </AppLayout>
  )
}
