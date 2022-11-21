/* eslint-disable @typescript-eslint/no-explicit-any */

import { Label } from 'components/Label'
import { InputError } from 'components/InputError'
import { Input } from './styles'
import { InputWrapper } from 'components/Form/formStyles'
import { UseFormRegister } from 'react-hook-form'
import { FormError } from 'pages/create/recipe'

interface Props {
  errors: any,
  fieldName: string,
  formErrors: FormError,
  label: string,
  register: UseFormRegister<FormData>,
  inputType?: string,
  placeholder?: string,
  registerElement?: any,
  typeOfMandatory?: string,
}

// TODO: The inputs type 'number', check the ⬆️ and ⬇️ buttons

function TextField ({
  errors,
  fieldName,
  formErrors,
  inputType = 'text',
  label,
  placeholder,
  register,
  registerElement,
  typeOfMandatory
}: Props) {
  const registerInput = registerElement || fieldName

  return (
    <InputWrapper>
      <Label htmlFor={fieldName} additionalText={typeOfMandatory}>{label}</Label>
      <Input
        {...register(registerInput, { ...formErrors[fieldName] })}
        aria-invalid={!!errors[fieldName]}
        placeholder={placeholder}
        type={inputType}
        id={fieldName}
      />
      {errors[fieldName] &&
        <InputError
          type={errors[fieldName].type}
          message={errors[fieldName].message}
          types={Object.keys(formErrors[fieldName])}
        />
      }
    </InputWrapper>
  )
}

TextField.TYPE_OF_MANDATORY = Label.TYPE_OF_MANDATORY

export default TextField
