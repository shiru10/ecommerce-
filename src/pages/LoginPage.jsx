import LoginForm from "../Components/LoginForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/schema";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../Api/api";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutateAsync } = useMutation({
    mutationFn: userLogin,
  });
  const handleLoginSubmit = async (data) => {
    try {
      const res = await mutateAsync(data);
      if (res) {
        setUserData(res);
        localStorage.setItem("userData", JSON.stringify(res));
        navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LoginForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        handleLoginSubmit={handleLoginSubmit}
      />
    </div>
  );
};

export default LoginPage;
