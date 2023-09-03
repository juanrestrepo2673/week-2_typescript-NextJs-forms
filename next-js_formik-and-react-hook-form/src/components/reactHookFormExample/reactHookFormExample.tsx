"use client"
import { useForm } from 'react-hook-form'

const onSubmit = data => console.log(data);

export default function ReactHookFormExample() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input {...register('email')} />
      <button type='submit'>Send form</button>
    </form>


  )
}
