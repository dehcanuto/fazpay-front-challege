import { FormInputPropsType } from "./types";

const FormInput = <TFormValues extends Record<string, unknown>>({
    name,
    type = "text",
    placeholder,
    register,
    required = false
    }: FormInputPropsType<TFormValues>) => {
    return (
        <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required })}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary"
        />
    )
}

export default FormInput;