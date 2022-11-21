/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Label } from 'components/Label'
import { InputError } from 'components/InputError'
import { InputWrapper } from 'components/Form/formStyles'
import { ImageWrapper, InputFile } from './styles'
import { FormError } from 'pages/create/recipe'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  errors: any
  fieldName: string
  formErrors: FormError
  label: string
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
  preview: string
  register: UseFormRegister<FormData>
  registerElement?: any
  typeOfMandatory?: string
}

function ImageField({
  errors,
  fieldName,
  formErrors,
  label,
  onChangeImage,
  preview,
  register,
  registerElement,
  typeOfMandatory,
}: Props) {
  const registerInput = registerElement || 'images'

  return (
    <InputWrapper>
      <Label htmlFor={fieldName} additionalText={typeOfMandatory}>
        {label}
      </Label>
      <InputFile
        {...register(registerInput)}
        onChange={onChangeImage}
        type="file"
      />
      {errors[fieldName] && (
        <InputError
          type={errors[fieldName].type}
          message={errors[fieldName].message}
          types={Object.keys(formErrors[fieldName])}
        />
      )}
      {preview && (
        <ImageWrapper>
          <img src={preview} alt="Preview" />
        </ImageWrapper>
      )}
    </InputWrapper>
  )
}

ImageField.TYPE_OF_MANDATORY = Label.TYPE_OF_MANDATORY

export default ImageField
