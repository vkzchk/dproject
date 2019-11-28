import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

import './contact.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must have a character")
    .max(200, "Must be shorter than 200")
    .required("Required field"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(200, "Must be shorter than 200")
    .required("Required field"),
  message: Yup.string()
    .min(5, "Must have a character")
    .max(500, "Must be shorter than 500")
    .required("Required field"),
})

const Contact = () => {

  return (
    <div className="contact">
      <p>Contact me</p>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          fetch(`http://qzwxsdcvfrty.com//myproject/users/contactus/`, {
            method: 'POST',
            body: JSON.stringify(values)
          })
            .then(res => res.json())
            .catch(e => console.log(e))
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Enter your name.."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "has-error" : null}
              />
            </label>
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email.."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
            />
            <br />
            <label htmlFor="text">Text: </label>
            <textarea
              type="text"
              name="message"
              placeholder="Write something here.."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className={touched.message && errors.message ? "has-error" : null}
            />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </form>
        )}

      </Formik>
    </div>
  )
}

export default Contact;