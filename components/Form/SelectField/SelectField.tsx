import { Label } from "components/Label"
import { InputError } from "components/InputError"
import { Select } from "./styles"
import { InputWrapper } from "components/Form/formStyles"

interface Option {
  value: string,
  label: string,
}

interface Props {
  errors: any
  fieldName: string,
  formErrors: any,
  label: string,
  options: Option[],
  register: any,
  typeOfMandatory?: string,
}

function SelectField({
  errors,
  fieldName,
  formErrors,
  label,
  options,
  register,
  typeOfMandatory
}: Props) {
  return (
    <InputWrapper>
      <Label htmlFor={fieldName} additionalText={typeOfMandatory}>{label}</Label>
      <Select {...register(fieldName, { ...formErrors[fieldName] })}>
        {options.map(({ value, label }) => (
          <option key={`${value}${label}`} value={value}>{label}</option>
        ))}
      </Select>
      {errors[fieldName] &&
        <InputError
          type={errors[fieldName].type}
          message={errors[fieldName].message!}
          types={Object.keys(formErrors[fieldName])}
        />
      }
    </InputWrapper>
  )
}

export default SelectField
