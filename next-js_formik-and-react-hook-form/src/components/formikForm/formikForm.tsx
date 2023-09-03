"use client"
import { Formik, Form, Field, ErrorMessage } from "formik"

interface Person {
  name: string,
  email: string
}

const handleSubmit = (values: Person) => {
  console.log(values)
}

const handleValidate = (values: Person) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is mandatory'
  }

  if (!values.email) {
    errors.email = 'email is mandatory'
  }
  // if(!isValidEmail(values.email)){
  //   errors.email = "email isn't valid"
  // }

  return errors
}

function FormikForm() {


  return (
    <>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={handleSubmit}
        validate={handleValidate}
        // validateOnChange
      >
        <Form>
          <Field type='text' name='name' placeholder='name' />
          <ErrorMessage name='name' component='div' />
          <Field type='email' name='email' placeholder='email' />
          <ErrorMessage name='email' component='div' />
          <button type='submit'>Send form</button>
        </Form>
      </Formik>
    </>
  )
}

export default FormikForm