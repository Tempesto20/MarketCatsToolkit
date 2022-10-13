import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './bottom.scss';

const SignupSchema = yup.object().shape({
  // firstName: yup.string().required(),
  // emailForm: yup.string().required(),
  email: yup
    .string()
    .required('Введите пожалуйста свой Email')
    .email('Введите пожалуйста свой Email'),
});

const Bottom = () => {
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
    <div className="botton__content">
      <div className="bottom__conteiner section-container">
        <div className="bottom__background">
          <div className="bottom__row">
            <h2 className="bottom__title">Успей купить!</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bottom_link">
                <div className="bottom__email">
                  <input
                    placeholder="Введите ваш e-mail"
                    name="email"
                    type="text"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className={clsx(errors.email ? ' bottom__email_red' : 'bottom__email-2')}
                  />
                  <div className="comments">{errors.email?.message}</div>
                </div>

                <div className="bottom__button">
                  <div className="button__batton">
                    <button type="submit" className="bottom__button-text but ">
                      <p className="button-text"> Подписаться</p>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="bottom__row-1">
            <h3 className="bottom__subtitle">
              Подпишись и успей
              <br></br>
              словить все акции
            </h3>
            <div className="bottom__input">
              <label className="bottom__subscribe">
                <input type="checkbox" className="input__bottom"></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="subscribe__text">
              <p>Подписаться на новости</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bottom;

{
  /* {clsx(buy !== 'Продан' ? 'buy__cat buy' : 'buy__cat sold')} */
}
{
  /* 
// className={'bottom__email-2 form-control' + (errors.email && touched.email ? ' is-invalid' : '') }

// className={`bottom__email-2 form-control ${errors.email ? 'red' : ''}`}

// className={
//   'bottom__email-2 form-control' +
//   (errors.email  ? ' red' : '')
// }

// className={`form-control ${errors.email ? 'is-invalid' : ''}`} */
}

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
<label>Email</label>
<input
  name="email"
  type="text"
  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
  className={clsx(errors.email  ? 'red' : '') }
/>
<div className="invalid-feedback">{errors.email?.message}</div>

<input type="submit" />
</form> */
}

// class Bottom extends React.Component {
//   render() {
//     const errorMessange = <div className="errorMessange">Введите корректный емаил</div>;

//     return (
//       <div className="botton__content">
//         <div className="bottom__conteiner section-container">
//           <div className="bottom__background">
//             <div className="bottom__row">
//               <h2 className="bottom__title">Успей купить!</h2>

//               <Formik
//                 initialValues={{
//                   email: '',
//                 }}
//                 validationSchema={Yup.object().shape({
//                   email: Yup.string().email('Email is invalid').required(errorMessange),
//                 })}
//                 onSubmit={(values) => {
//                   //console.log(values)
//                 }}
//                 render={({ errors, touched }) => (
//                   <Form>
//                     <div className="bottom_link">
//                       <div className="form-group bottom__email">
//                         <Field
//                           name="email"
//                           type="text"
//                           placeholder="Ваш e-mail"
//                           className={
//                             'bottom__email-2 form-control' +
//                             (errors.email && touched.email ? ' is-invalid' : '')
//                           }
//                         />
//                         <ErrorMessage name="email" component="div" className="invalid-feedback" />
//                       </div>

//                       <div className="bottom__button">
//                         <div className="button__batton">
//                           <button type="submit" className="bottom__button-text but ">
//                             <p className="button-text"> Подписаться</p>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </Form>
//                 )}
//               />
//             </div>
//             <div className="bottom__row-1">
//               <h3 className="bottom__subtitle">
//                 Подпишись и успей
//                 <br></br>
//                 словить все акции
//               </h3>
//               <div className="bottom__input">
//                 <label className="bottom__subscribe">
//                   <input type="checkbox" className="input__bottom"></input>
//                   <span className="checkmark"></span>
//                 </label>
//               </div>
//               <div className="subscribe__text">
//                 <p>Подписаться на новости</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Bottom;

// import React from 'react';
// import './bottom.scss';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
