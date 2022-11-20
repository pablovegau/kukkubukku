import { useWatch } from "react-hook-form"

import { Label } from "components/Label"
import { TextField } from "../TextField"
import { Button } from "components/Button"
import { IconButton } from "components/IconButton"
import { Icon } from "components/Icon"
import { IngredientWrapper, Ingredient } from "./styles"
import { InputWrapperGroup, IngredientsWrapper } from "components/Form/formStyles"

interface IngredientField {
  id: string,
  name: string,
  amount: string,
  measurement: string,
  moreInfo: string,
}

interface Props {
  errors: any
  formErrors: any,
  register: any,
  control: any,
  ingredientAppend: any,
  ingredientRemove: any,
  ingredientFields: IngredientField[],
}

function IngredientList({ control, ingredientRemove }: { control: any, ingredientRemove: any }) {
  const ingredients = useWatch({
    control,
    name: "ingredients",
  })

  if (ingredients.length === 1) {
    return null;
  }

  return (
    <IngredientsWrapper>
      {ingredients.map((item: any, index: number) => {
        if (index === ingredients.length - 1) {
          return null
        }

        return (
          <IngredientWrapper key={item.id}>
            <Ingredient>
              {item.amount && <span>{item.amount} </span>}
              {item.measurement && <span>{item.measurement} - </span>}
              <span>{item.name}</span>
              {item.moreInfo && <span> ({item.moreInfo})</span>}
            </Ingredient>

            <IconButton onClick={() => ingredientRemove(index)}>
              <Icon type={Icon.TYPE.CROSS} size={12} fillColor="--kkbk--color--text--dim"/>
            </IconButton>
          </IngredientWrapper>
        )
      })}
    </IngredientsWrapper>
  )
}

function IngredientsForm({
  errors,
  formErrors,
  register,
  control,
  ingredientAppend,
  ingredientRemove,
  ingredientFields,
}: Props) {
  return (
    <>
      <Label htmlFor="ingredients" additionalText='Obligatorio'>Ingredientes</Label>

      <IngredientList control={control} ingredientRemove={ingredientRemove} />

      {ingredientFields.map((ingredient, index) => {
        if (index !== ingredientFields.length - 1) {
          return null
        }

        return (
          <InputWrapperGroup key={ingredient.id}>
            <TextField
              errors={errors}
              fieldName="ingredientName"
              formErrors={formErrors}
              label="Nombre"
              register={register}
              registerElement={`ingredients.${index}.name`}
              typeOfMandatory={TextField.TYPE_OF_MANDATORY.MANDATORY}
            />

            <TextField
              errors={errors}
              fieldName="ingredientAmount"
              formErrors={formErrors}
              label="Cantidad"
              register={register}
              registerElement={`ingredients.${index}.amount`}
              inputType="number"
            />

            <TextField
              errors={errors}
              fieldName="ingredientMeasurement"
              formErrors={formErrors}
              label="Medida"
              register={register}
              registerElement={`ingredients.${index}.measurement`}
            />

            <TextField
              errors={errors}
              fieldName="ingredientMoreInfo"
              formErrors={formErrors}
              label="Más información"
              register={register}
              registerElement={`ingredients.${index}.moreInfo`}
            />

            <Button type={Button.TYPE.PRIMARY} onClick={() => ingredientAppend()}>Añadir</Button>
          </InputWrapperGroup>
        )
      })}
    </>
  )
}

export default IngredientsForm
