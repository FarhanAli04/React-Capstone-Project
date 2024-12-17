import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginSchema } from "../validationSchemas/loginSchema";
//import { loginSchema } from './validation/loginSchema'

export const LoginForm = () => (
  <>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div>
          <label className="text-sm" htmlFor="Email">
            Email
          </label>
          <Field
            className={
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            }
            id="email"
            name="email"
          />
          <ErrorMessage
            component="a"
            className={"text-red-600 text-xs"}
            name="email"
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="Password">
            Password
          </label>
          <Field
            className={
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            }
            id="password"
            name="password"
          />
          <ErrorMessage
            component="b"
            className={"text-red-600 text-xs"}
            name="password"
          />
        </div>
        <div className="mt-8">
          <button
          type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </Form>
    </Formik>
  </>
);
