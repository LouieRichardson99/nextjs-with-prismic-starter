import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import styles from "./styles.module.scss"

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    // POST form data to API like Formspree
    setIsSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        name="full_name"
        label="Full Name"
        type="text"
        autoComplete="name"
        required
        register={register}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        required
        placeholder="name@example.com"
        register={register}
      />
      <Input
        name="message"
        label="Message"
        type="textarea"
        required
        placeholder="Enter message"
        register={register}
      />
      {isSubmitted ? (
        <p>Thank you for getting in touch.</p>
      ) : (
        <button className={styles.button}>Submit</button>
      )}
    </form>
  )
}
