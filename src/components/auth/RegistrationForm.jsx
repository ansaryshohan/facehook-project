import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "./Field";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmitHandle = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: "Something went wrong",
      });
    }
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
      onSubmit={handleSubmit(onSubmitHandle)}
    >
      <Field label={"First Name"} error={errors.firstName}>
        <input
          {...register("firstName", {
            required: "firstName field can't be empty",
          })}
          className={`auth-input ${!errors.firstName ? "" : "border-red-500"}`}
          name="firstName"
          type="text"
          id="firstName"
        />
      </Field>
      <Field label={"Last Name"} error={errors.lastName}>
        <input
          {...register("lastName")}
          className={`auth-input ${!errors.lastName ? "" : "border-red-500"}`}
          name="lastName"
          type="text"
          id="lastName"
        />
      </Field>
      <Field label={"Email"} error={errors.email}>
        <input
          {...register("email", { required: "email field can't be empty" })}
          className={`auth-input ${!errors.email ? "" : "border-red-500"}`}
          name="email"
          type="email"
          id="email"
        />
      </Field>
      <Field label={"password"} error={errors.password}>
        <input
          {...register("password", {
            required: "password field can't be empty",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
          className={`auth-input ${!errors.password ? "" : "border-red-500"}`}
          name="password"
          type="password"
          id="password"
        />
      </Field>
      <p className="my-1 text-xs font-medium text-red-500">
        {errors?.root?.random?.message}
      </p>
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegistrationForm;
