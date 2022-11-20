import { Label } from "components/Label"
import { InputError } from "components/InputError"
import { InputWrapper } from "components/Form/formStyles"
import { ImageWrapper, InputFile } from "./styles"

interface Props {
  errors: any
  fieldName: string,
  formErrors: any,
  label: string,
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
  preview: string,
  register: any,
  typeOfMandatory?: string,
}

function ImageField({ errors, fieldName, formErrors, label, onChangeImage, preview, register, typeOfMandatory }: Props) {
  return (
    <InputWrapper>
      <Label htmlFor={fieldName} additionalText={typeOfMandatory}>{label}</Label>
      <InputFile
        {...register('images')}
        onChange={onChangeImage}
        type="file"
      />
      {errors[fieldName] &&
        <InputError
          type={errors[fieldName].type}
          message={errors[fieldName].message!}
          types={Object.keys(formErrors[fieldName])}
        />
      }
      {preview && (
        <ImageWrapper>
          <img src={preview} alt="Preview" />
        </ImageWrapper>)
      }
    </InputWrapper>
  )
}

ImageField.TYPE_OF_MANDATORY = Label.TYPE_OF_MANDATORY

export default ImageField
