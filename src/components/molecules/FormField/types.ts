import { FieldValues } from "react-hook-form"
import { FormInputPropsType } from "@/components/atoms/FormInput/types"

export interface FormFieldPropsType extends FormInputPropsType<FieldValues> {
    label: string
}