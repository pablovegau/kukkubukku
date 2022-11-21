/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from 'components/Label'
import { InputError } from 'components/InputError'
import { Select } from './styles'
import { InputWrapper } from 'components/Form/formStyles'
import { FormError } from 'pages/create/recipe'
import { UseFormRegister } from 'react-hook-form'

interface Option {
  value: string
  label: string
}

interface Props {
  errors: any
  fieldName: string
  formErrors: FormError
  label: string
  options: Option[]
  register: UseFormRegister<FormData>
  registerElement?: any
  typeOfMandatory?: string
}

function SelectField({
  errors,
  fieldName,
  formErrors,
  label,
  options,
  register,
  registerElement,
  typeOfMandatory,
}: Props) {
  const registerInput = registerElement || fieldName

  return (
    <InputWrapper>
      <Label htmlFor={fieldName} additionalText={typeOfMandatory}>
        {label}
      </Label>
      <Select {...register(registerInput, { ...formErrors[fieldName] })}>
        {options.map(({ value, label }) => (
          <option key={`${value}${label}`} value={value}>
            {label}
          </option>
        ))}
      </Select>
      {errors[fieldName] && (
        <InputError
          type={errors[fieldName].type}
          message={errors[fieldName].message}
          types={Object.keys(formErrors[fieldName])}
        />
      )}
    </InputWrapper>
  )
}

export default SelectField
