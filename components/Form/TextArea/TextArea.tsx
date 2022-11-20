import { Label } from "components/Label"
import { InputError } from "components/InputError"
import { TextArea } from "./styles"
import { InputWrapper } from "components/Form/formStyles"

interface Props {
  errors: any
  fieldName: string,
  formErrors: any,
  label: string,
  register: any,
  placeholder?: string,
  registerElement?: any,
  typeOfMandatory?: string,
}

function TextField({
  errors,
  fieldName,
  formErrors,
  label,
  placeholder,
  register,
  registerElement,
  typeOfMandatory,
}: Props) {

  const registerInput = registerElement ? registerElement : fieldName

  return (
    <InputWrapper>
      <Label htmlFor={fieldName} additionalText={typeOfMandatory}>{label}</Label>
      <TextArea
        {...register(registerInput, { ...formErrors[fieldName] })}
        aria-invalid={!!errors[fieldName]}
        placeholder={placeholder}
        id={fieldName}
      />
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

TextField.TYPE_OF_MANDATORY = Label.TYPE_OF_MANDATORY

export default TextField
