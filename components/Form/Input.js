import styles from "./styles.module.scss"

export const Input = ({
  name,
  label,
  type,
  required,
  placeholder,
  register,
  autoComplete,
}) => (
  <div>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={styles.textarea}
      />
    ) : (
      <input
        name={name}
        id={name}
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
        className={styles.input}
      />
    )}
  </div>
)
