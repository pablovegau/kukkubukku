import { useWatch } from "react-hook-form"

import { Label } from "components/Label"
import { Button } from "components/Button"
import { IconButton } from "components/IconButton"
import { Icon } from "components/Icon"
import { Textarea } from "../TextArea"
import { StepsWrapper, StepWrapper, StepTitle, Description, Step } from "./styles"
import { InputWrapperGroup } from "components/Form/formStyles"

interface stepField {
  id: string,
  description: string,
}

interface Props {
  errors: any
  formErrors: any,
  register: any,
  control: any,
  stepAppend: any,
  stepRemove: any,
  stepFields: stepField[],
}

function StepsList({ control, stepRemove }: { control: any, stepRemove: any }) {
  const steps = useWatch({
    control,
    name: "steps",
  })

  if (steps.length === 1) {
    return null;
  }

  return (
    <StepsWrapper>
      {steps.map((item: any, index: number) => {
        if (index === steps.length - 1) {
          return null
        }

        return (
          <StepWrapper key={item.id}>
            <StepTitle>Paso {index + 1}</StepTitle>
            <Description>
              <Step>{item.description}</Step>

              <IconButton onClick={() => stepRemove(index)}>
                <Icon type={Icon.TYPE.CROSS} size={12} fillColor="--kkbk--color--text--dim"/>
              </IconButton>
            </Description>

          </StepWrapper>
        )
      })}
    </StepsWrapper>
  )
}

function StepsForm({
  errors,
  formErrors,
  register,
  control,
  stepAppend,
  stepRemove,
  stepFields,
}: Props) {
  return (
    <>
      <Label htmlFor="steps" additionalText='Obligatorio'>Pasos</Label>

      <StepsList control={control} stepRemove={stepRemove} />

      {stepFields.map((step, index) => {
        if (index !== stepFields.length - 1) {
          return null
        }

        return (
          <InputWrapperGroup key={step.id}>
            <Textarea
              errors={errors}
              fieldName={`steps.${index}.description`}
              formErrors={formErrors}
              label="Descripción"
              register={register}
            />
            <Button type={Button.TYPE.PRIMARY} onClick={() => stepAppend()}>Añadir</Button>
          </InputWrapperGroup>
        )
      })}
    </>
  )
}

export default StepsForm
