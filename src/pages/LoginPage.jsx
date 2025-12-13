import LoginForm from "../Components/LoginForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/schema";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleLoginSubmit = (data) => {
    console.log(data);
  };
  return (
    <LoginForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      handleLoginSubmit={handleLoginSubmit}
    />
  );
};

export default LoginPage;
