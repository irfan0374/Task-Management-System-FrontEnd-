import React, { useEffect, useRef, useState } from "react";
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { userSignup } from "../Api/userApi"
import { basicScheme } from "../Schema/signupValidation"
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigate()
  // SIGNUP FUNCTION START
  const onSubmit = async () => {
    try {
      setLoading(true)
      const res = await userSignup(values)
      if (res?.status === 201) {
        
            toast.success(res?.data?.message)
            navigation("/login")   
        
      }
    } catch (error) {
      console.log("hello error")
      console.log(error.response)
      setLoading(false);
      toast.error(error.response?.data?.status)
      console.log(err.message)
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: '',
      password: "",
      confirmPassword: ''
    },
    validationSchema: basicScheme,
    onSubmit,
  });

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  ">

          <form className="space-y-6" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-black">
              SignUp
            </h5>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Username:
              </label>
              <input
                type="text"
                name='name'
                id='name'
                className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-black"
                {...getFieldProps('name')}
                placeholder="Enter your name"
                required
              />
              {errors.name && touched.name && (<p className="text-red-800 text-sm">{errors.name}</p>)}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...getFieldProps('email')}
                className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-black"
                placeholder="name@example.com"
                required=""
              />
              {errors.email && touched.email && (<p className="text-red-800 text-sm">{errors.email}</p>)}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="••••••••"
                className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black"
                required=""
              />
              {errors.password && touched.password && (<p className="text-red-800 text-sm">{errors.password}</p>)}
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-black"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="••••••••"
                className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black"
                required=""
              />
              {errors.confirmPassword && touched.confirmPassword && (<p className="text-red-800 text-sm">{errors.confirmPassword}</p>)}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              SignUp your Account
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignupPage
