import React from "react";
import css from "@/ui/RHFTextField/RHFTextField.module.css";
import Text from "@/ui/text/text";

interface PropsType {
    type: string;
    label: string;
    placeholder?: string;
    id: string;
    errors: any;
    register: any;
    name: string;
}

const RHFTextField = ({
    type,
    label,
    placeholder = "",
    id,
    errors,
    register,
    name
}: PropsType) => {
    return (
        <div className={css["form-container"]}>
            <label htmlFor={id} className={css.label}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={css.field}
                {...register}
            />
            <Text as="p" color="var(--rose-500)" fontSize="10px" style={{opacity: errors[name]?.message ? "1" : "0"}}>
                {errors[name]?.message || "error"}
            </Text>
        </div>
    );
};

export default RHFTextField;
