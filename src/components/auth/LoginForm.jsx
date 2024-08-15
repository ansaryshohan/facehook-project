import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Field from "./Field";

export default function LoginForm() {
  const { setAuth } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmitHandle = async (formData) => {
    try {
      // make api call
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        console.log(user);
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
          // set the user and token after login is successful---
          setAuth({ user, authToken, refreshToken });
          console.log(`token after login is ${authToken}`);
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `the email ${formData.email} is not found`,
      });
    }
  };

  return (
    <div>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
        onSubmit={handleSubmit(onSubmitHandle)}
      >
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
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
