"use client"; // this is a client component
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState, useContext, useEffect } from "react";
import * as Yup from "yup";
import "./Login.css";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleLogin = async (values: any, { setSubmitting }: any) => {
    try {
      authContext.login(values);
    } catch (error) {
      setErrorMessage("Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="card">
          <Formik
            onSubmit={handleLogin}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            {({ isSubmitting }) => (
              <Form>
                <h2 className="text-center mb-3">Login</h2>
                <div className="form-floating mb-3">
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email">Email</label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-floating mb-3">
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <label htmlFor="password">Password</label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger mb-3">{errorMessage}</div>
                )}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
