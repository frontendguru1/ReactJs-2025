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
    <div className="flex justify-center items-center py-24 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          Login
        </h1>
        <Formik
          initialValues={initialLoginFormValues}
          validationSchema={loginFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            window.localStorage.setItem("isAuthenticated", true);
            navigate(MENU_PATH.HOME);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {isSubmitting && (
                <p className="text-center text-sm text-gray-500">
                  Submitting...
                </p>
              )}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="username"
                  className="text-red-500 text-xs mt-1"
                  component="div"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-600 font-medium mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  className="text-red-500 text-xs mt-1"
                  component="div"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-300"
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
