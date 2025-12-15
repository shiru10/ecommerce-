import LoginForm from "../Components/LoginForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/schema";
import { useMutation} from "@tanstack/react-query";
import { userLogin } from "../Api/api";
import { data } from "react-router";
import { useEffect, useState } from "react";
const LoginPage = () => {
  const [apidatas, setApiDatas] = useState(null);
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
      setApiDatas(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    if(apidatas){
    localStorage.setItem("userData",JSON.stringify(apidatas))
    }
  },[apidatas])


  useEffect(()=>{
    const localData = JSON.parse(localStorage.getItem("userData"))
    if(localData){
      setApiDatas(localData);
    }
  },[])
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
