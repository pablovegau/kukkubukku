//@ts-nocheck
import { useRouter } from 'next/router'

import { useEffect, useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"

import { AppLayout } from "components/AppLayout"
import { MainTitle } from "components/MainTitle"
import { Label } from "components/Label"

import {
  Container,
  Form,
  InputRadioWrapper,
  SubmitButtonWrapper,
} from "styles/pages/create/recipe"
import { addRecipe } from "services/recipes"

import { formatRecipe } from "services/utils"
import { TextField } from "components/Form/TextField"
import { Textarea } from "components/Form/TextArea"
import { ImageField } from "components/Form/ImageField"
import { IngredientsForm } from "components/Form/IngredientsForm"
import { StepsForm } from "components/Form/StepsForm"
import { SelectField } from "components/Form/SelectField"
import { SubmitButton } from "components/Form/SubmitButton"

interface Ingredient {
  name: string,
  amount: string,
  measurement: string,
  moreInfo: string,
}

interface Step {
  description: string,
}

interface Recipe {
  description: string,
  difficulty: string,
  diners: string,
  duration: string,
  images: File[],
  ingredients: Ingredient[],
  isPublic: boolean,
  name: string,
  steps: Step[],
  tags: string,
}

// TODO: Check accessibility for inputs https://ariakit.org/components/form
// TODO: https://react-hook-form.com/advanced-usage
// TODO: When will add Combobox https://react-hook-form.com/get-started#IntegratingwithUIlibraries
// TODO: Usar el useWatch o el watch para mostrar la o las imagenes
// TODO: styles -> que no se rompan los ingredientes muy largos al añadirse
// TODO: Revisar este componente, sobretodo los controles de incrementar y decrementar
// TODO: Revisar las dos interfaces

interface FormData {
  description: string;
  difficulty: string;
  diners: number;
  duration: number;
  images: string;
  ingredients: Ingredient[],
  isPublic: boolean;
  name: string;
  steps: Step[],
  tags: string;
};

const formErrors = {
  name: {
    required: {
      value: true,
      message: "Este campo es requerido"
    },
    minLength: {
      value: 3,
      message: "Este campo debe contener almenos tres caracteres"
    }
  },
  diners: {
    required: {
      value: true,
      message: "Este campo es requerido"
    },
    min: {
      value: 1,
      message: "Este campo debe contener almenos un comensal"
    },
    max: {
      value: 12,
      message: "Este campo debe contener como máximo diez comensales"
    }
  },
  duration: {
    min: {
      value: 1,
      message: "La duración debe ser mayor o igual a 1 minuto"
    }
  }
}

const difficultyOptions = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'easy', label: 'Facil' },
  { value: 'medium', label: 'Media' },
  { value: 'high', label: 'Alta' },
]

export default function CreateRecipe() {
  const router = useRouter()

  const { register, formState: { errors }, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      ingredients: [
        {
          name: '',
          amount: '',
          measurement: '',
          moreInfo: '',
        }
      ],
      steps: [
        {
          description: ''
        }
      ],
    },
  });

  const {
    fields: ingredientFields,
    append: ingredientAppend,
    remove: ingredientRemove,
  } = useFieldArray({
    name: 'ingredients',
    control,
  });

  const {
    fields: stepFields,
    append: stepAppend,
    remove: stepRemove,
  } = useFieldArray({
    name: 'steps',
    control,
  });

  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  const onSubmit = (data: Recipe) => {
    const formattedRecipe = formatRecipe(data)
    addRecipe(formattedRecipe)
    router.push('/')
  }

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  // TODO: use the proper type for the file
  const onChangeImage = (event: any) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined)
      return
  }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(event.target.files[0])
  }

  return (
    <AppLayout title=" - Crear receta">
      <Container>
        <MainTitle>Crear receta</MainTitle>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/**
           * Recipe name
           */}
          <TextField
            errors={errors}
            fieldName="name"
            formErrors={formErrors}
            label="Nombre"
            placeholder="e.g. Tortilla de patatas"
            register={register}
            typeOfMandatory={TextField.TYPE_OF_MANDATORY.MANDATORY}
          />

          {/**
           * Diners
           */}
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

          {/**
           * Description
           */}
          <Textarea
            errors={errors}
            fieldName="description"
            formErrors={formErrors}
            label="Descripción"
            placeholder="e.g. La tortilla de patatas, de papas o tortilla española es una tortilla a la que se le agrega patatas troceadas. Se trata de uno de los platos más conocidos y emblemáticos de la cocina española, siendo un producto muy popular que se puede encontrar en casi cualquier bar o restaurante del país."
            register={register}
          />

          {/**
           * Images
           */}
          <ImageField
            errors={errors}
            fieldName="images"
            formErrors={formErrors}
            label="Imágenes"
            onChangeImage={onChangeImage}
            preview={preview}
            register={register}
            typeOfMandatory={TextField.TYPE_OF_MANDATORY.RECOMMENDABLE}
          />

          {/**
           * Ingredients
           */}
          <IngredientsForm
            control={control}
            ingredientAppend={ingredientAppend}
            ingredientFields={ingredientFields}
            ingredientRemove={ingredientRemove}
            errors={errors}
            formErrors={formErrors}
            register={register}
          />

          {/**
           * Steps
           */}
          <StepsForm
            control={control}
            errors={errors}
            formErrors={formErrors}
            register={register}
            stepAppend={stepAppend}
            stepFields={stepFields}
            stepRemove={stepRemove}
          />

          {/**
           * Duración
           */}
          <TextField
            errors={errors}
            fieldName="duration"
            formErrors={formErrors}
            label="Tiempo de preparación (minutos)"
            placeholder="e.g. 30"
            register={register}
          />

          {/**
           * Dificultad
           */}
          <SelectField
            errors={errors}
            fieldName="difficulty"
            formErrors={formErrors}
            label="Dificultad"
            options={difficultyOptions}
            register={register}
          />

          {/**
           * Tags
           */}
          <TextField
            errors={errors}
            fieldName="tags"
            formErrors={formErrors}
            label="Tags"
            placeholder="e.g. italiana, postre, sin gluten, ..."
            register={register}
            typeOfMandatory={TextField.TYPE_OF_MANDATORY.RECOMMENDABLE}
          />

          {/* Publica */}
          <Label htmlFor="">Quieres que tu receta sea pública?</Label>
          <InputRadioWrapper>
            <div>
              <input {...register('isPublic')} type="radio" id="publicTrue" name="isPublic" value="true" checked />
              <label htmlFor="publicTrue"> Si</label>
            </div>

            <div>
              <input {...register('isPublic')} type="radio" id="publicFalse" name="isPublic" value="false" />
              <label htmlFor="publicFalse"> No</label>
            </div>
          </InputRadioWrapper>

          <SubmitButtonWrapper>
            <SubmitButton value="Crear receta" />
          </SubmitButtonWrapper>
        </Form>
      </Container>
    </AppLayout>
  )
}
