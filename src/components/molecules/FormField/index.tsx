import { FormInput } from "@/components/atoms";
import { FormFieldPropsType } from "./types";

const FormField = (data: FormFieldPropsType) => {
    return (
        <div>
            <label htmlFor={data.name} className="block text-gray-600">
                {data.label}
            </label>
            <FormInput {...data} />
        </div>
    )
}

export default FormField;