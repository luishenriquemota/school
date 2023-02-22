import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../../providers/user/user";
import { ContentLoginStyle } from "./style";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { IUserRequest } from "../../interfaces";
import { useEffect } from "react";


export function LoginPage(){
  const {login, redirectToHome, setRedirectToHome} = useUser()
  const navigate = useNavigate()


  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório").min(6, "Campo nome precisa ter no minimo 6 caracteres"),
    password: yup.string().required("Campo obrigatório")
  })

  const { register, handleSubmit, formState: {errors},} = useForm({
    resolver: yupResolver(schema)
  })

  const submit = handleSubmit((data: IUserRequest | any) => {
    login(data)
  })

  useEffect(() => {
    setTimeout(() => {
      if(redirectToHome){
        navigate("/home")
        setRedirectToHome(false)
    }
    }, 1000)
  }, [redirectToHome])

  return(
    <>
    <Outlet/>
    <ContentLoginStyle>
      <h2>Login</h2>
      <form action="" onSubmit={submit}>
        <input type="text" placeholder="Nome" {...register("username")}/>
        <input type="password" placeholder="Senha" {...register("password")}/>
        <button>Entrar</button>
      </form>
    </ContentLoginStyle>
    </>
  )
}