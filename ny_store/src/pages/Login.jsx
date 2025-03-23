import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialLoginFormValues } from "../config/constants";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { MENU_PATH } from "../config/Menus";
const Login = () => {
  const navigate = useNavigate();
  const loginFormSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "Password must be at least 6 characters")
      .max(10, "Password should not be more than 10 characters"),
  });

  return (
    <div className="max-w-[450px] m-auto py-8">
      <div className="p-5 border">
        <h1 className="text-center p-3 text-2xl">Login Page</h1>
        <Formik
          initialValues={initialLoginFormValues}
          validationSchema={loginFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            // set localstorage
            window.localStorage.setItem("isAuthenticated", true);
            // Redirect to home page
            navigate(MENU_PATH.HOME);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div>{isSubmitting ? "form is being submitted..." : ""}</div>
              <div className="block">
                <label htmlFor="username" className="block w-full">
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="border w-full p-1.5"
                />
                <ErrorMessage
                  name="username"
                  className="text-red-500 text-xs pt-3"
                  component={"div"}
                />
              </div>
              <div className="block mt-4">
                <label htmlFor="password" className="block w-full">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border w-full p-1.5"
                />
                <ErrorMessage
                  name="password"
                  className="text-red-500 text-xs pt-3"
                  component={"div"}
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="border border-amber-500 px-5 py-2"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
