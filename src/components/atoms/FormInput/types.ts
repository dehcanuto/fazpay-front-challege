import { HTMLInputTypeAttribute } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export interface FormInputPropsType<TFormValues extends FieldValues> {
    name: Path<TFormValues>
    type?: HTMLInputTypeAttribute
    placeholder?: string
    register: UseFormRegister<TFormValues>
    required?: boolean
}