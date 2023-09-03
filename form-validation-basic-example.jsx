import React, { useState } from 'react'

export default function ManualValidationForm() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [errrors, setErrors] = useState[{}];


  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'el usuario es requerido'
    }

    if (!formData.email) {
      newErrors.email = 'el email es requerido'

     const  existEmail = verifyExistEmail() // fetch data
    }

    if (!formData.password) {
      newErrors.password = 'el password es requerido'
    }

    if (formData.password.length < 6) {
      newErrors.password = 'la contrasena debe ser mayor a 6 caracteres'
    }

    setErrors(newErrors)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();
  }


  return (
    <form>
      <input type="text"  name='username' />
      {errrors.username && <p>{errrors.username}</p>}
      <input type="email" name='email' />
      {errrors.email && <p>{errrors.email}</p>}
      <input type="password" name='password' />
      {errrors.password && <p>{errrors.password}</p>}

    </form>
  )
}
