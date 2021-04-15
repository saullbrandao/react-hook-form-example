import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
})

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('firstName')} placeholder="First Name..." />
          <p>{errors.firstName?.message}</p>
          <input type="text" {...register("lastName")} placeholder="Last Name..." />
          <p>{errors.lastName?.message}</p>
          <input type="text" {...register("email")} placeholder="Email..." />
          <p>{errors.email?.message}</p>
          <input type="text" {...register("age")} placeholder="Age..." />
          <p>{errors.age?.message}</p>
          <input type="password" {...register("password")} placeholder="Password..." />
          <p>{errors.password?.message}</p>
          <input type="password" {...register("confirmPassword")} placeholder="Confirm Password..." />
          <p>{errors.confirmPassword && 'Passwords Should Match!'}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;