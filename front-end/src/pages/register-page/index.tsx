import { Outlet, useNavigate } from "react-router-dom"
import { ContentLoginStyle } from "../login-page/style"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useUser } from "../../providers/user/user"
import { IUserRequest } from "../../interfaces"
import { useEffect } from "react"



export function RegisterPage(){
  const {createUser, redirectToLogin, setRedirectToLogin} = useUser()
  const navigate = useNavigate()


  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório").min(6, "Campo nome precisa ter no minimo 6 caracteres"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório")
  })

  const { register, handleSubmit, formState: {errors},} = useForm({
    resolver: yupResolver(schema)
  })

  const submit = handleSubmit((data: IUserRequest | any) => {
    createUser(data)
  })


  useEffect(() => {
    setTimeout(() => {
      if(redirectToLogin){
        navigate("/login")
        setRedirectToLogin(false)
    }
    }, 1000)
  }, [redirectToLogin])



  return(
    <>
    <Outlet/>
    <ContentLoginStyle>
      <h2>Criar Conta</h2>
      <form action="" onSubmit={submit}>
        <input type="text" placeholder="Nome" {...register("username")}/>
        <input type="email" placeholder="E-mail" {...register("email")}/>
        <input type="password" placeholder="Senha" {...register("password")}/>
        <button>Cadastrar</button>
      </form>
    </ContentLoginStyle>
    </>
  )
}