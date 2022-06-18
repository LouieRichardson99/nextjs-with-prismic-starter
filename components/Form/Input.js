import { Fragment } from "react"

export const Input = ({
  name,
  label,
  type,
  required,
  placeholder,
  register,
  autoComplete,
}) => (
  <Fragment>
    <label htmlFor={name}>{label}</label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    ) : (
      <input
        name={name}
        id={name}
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
      />
    )}
  </Fragment>
)
