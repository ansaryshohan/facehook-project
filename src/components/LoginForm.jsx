import { useForm } from "react-hook-form";
import Field from "./Field";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate=useNavigate()

  const onSubmitHandle = (formData) => {
    console.log(formData);
    navigate("/")
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
            className={`auth-input ${!errors.email?"":"border-red-500"}`}
            name="email"
            type="email"
            id="email"
          />
        </Field>
        <Field label={"password"} error={errors.password}>
          <input
            {...register("password", { required: "password field can't be empty" })}
            className={`auth-input ${!errors.password?"":"border-red-500"}`}
            name="password"
            type="password"
            id="password"
          />
        </Field>
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
