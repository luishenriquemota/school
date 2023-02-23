import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react"
import { IChildren, ILogin, IUserRequest } from "../../interfaces"
import { api } from "../../services/api"
import { toast } from "react-hot-toast"


interface IUSerProviderProps{
  createUser: (data: IUserRequest) => void;
  createUserTeacher: (data: IUserRequest) => void;
  login: (data: ILogin) => void;
  token: string
  setToken: Dispatch<SetStateAction<string>>
  redirectToLogin: boolean
  setRedirectToLogin: Dispatch<SetStateAction<boolean>>
  redirectToHome: boolean
  setRedirectToHome: Dispatch<SetStateAction<boolean>>
}

const UserContext = createContext<IUSerProviderProps>({} as IUSerProviderProps)

export function UserContextProvider({children}: IChildren){
  const [token, setToken] = useState<string>("")
  const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false)
  const [redirectToHome, setRedirectToHome] = useState<boolean>(false)


useEffect(() => {
  
  getToken()
}, [])


  function createUser(data: IUserRequest){
    api.post("api/user/", data)
    .then(res => {
      toast.success("Usuario criado com sucesso.")
      setRedirectToLogin(true)
    })
    .catch(err => {
      toast.error("Algo deu errado, tente novamente.")
      setRedirectToLogin(false)
    })
  }

  
  function createUserTeacher(data: IUserRequest){
    api.post("/api/user/teacher/", data)
    .then(res => {

    })
    .catch(err => {

    })
  }


  function login(data: ILogin){
    api.post("/api/user/login/", data).then(res => {
      toast.success("Login realizado.")
      localStorage.setItem("@Token", JSON.stringify(res.data.token))
      getToken()
      setRedirectToHome(true)
    })
    .catch(err => {
      toast.error("Algo deu errado, tente novamente.")
      setRedirectToHome(false)
    })
  }

  function getToken(){
    setToken(JSON.parse(localStorage.getItem("@Token")!))
  }

  return (
    <UserContext.Provider value={{
      createUser, 
      createUserTeacher, 
      login, 
      token, 
      setToken,
      redirectToLogin, 
      setRedirectToLogin,
      redirectToHome,
      setRedirectToHome,
      }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)