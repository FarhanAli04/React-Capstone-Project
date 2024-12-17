import { Formik, Field, Form, ErrorMessage } from "formik";
import { registerSchema } from "../validationSchemas/registerSchema";

export const RegisterForm = () => (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={registerSchema}
    >
      <Form>
        <div>
          <label className={"text-sm"} htmlFor="Name">
            Full Name
          </label>
          <Field
            className={
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            }
            id="name"
            name="name"
          />
          <ErrorMessage
            component="a"
            className={"text-red-600 text-xs"}
            name="name"
          />
        </div>
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
            component="b"
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
            id="Password"
            name="password"
          />
          <ErrorMessage
            component="c"
            className={"text-red-600 text-xs"}
            name="password"
          />
        </div>
        <div class="mt-8">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
          >
            Register
          </button>
        </div>
      </Form>
    </Formik>
  </>
);

export default RegisterForm;