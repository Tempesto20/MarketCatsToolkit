import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

const SignupSchema = yup.object().shape({
  // firstName: yup.string().required(),
  // emailForm: yup.string().required(),
  email: yup.string()
  .required('Введите пожалуйста свой Email')
  .email('Введённый Email не'),
});

function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div>
        <label>First Name</label>
        <input {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div> */}

      <label>Email</label>
      <input
        name="email"
        type="text"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
      />
      <div className="invalid-feedback">{errors.email?.message}</div>

      <input type="submit" />
    </form>
  );
}
export default Example;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import clsx from 'clsx';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// import './styles.css';

// const SignupSchema = yup.object().shape({
//   // firstName: yup.string().required(),
//   // emailForm: yup.string().required(),
//   email: yup.string()
//   .required('Введите пожалуйста свой Email')
//   .email('Введённый Email не корректен '),
// });

// function Example() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(SignupSchema),
//   });
//   const onSubmit = (data) => {
    
//     console.log(JSON.stringify(data));
    
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>Email</label>
//       <input
//         name="email"
//         type="text"
//         {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
//         className={clsx(errors.email  ? 'red' : '') }
//       />
//       <div className="invalid-feedback">{errors.email?.message}</div>

//       <input type="submit" />
//     </form>
//   );
// }
// export default Example;
