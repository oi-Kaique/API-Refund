import { useState } from "react"
import { z, ZodError } from "zod"
import { AxiosError } from "axios"
import { useNavigate } from "react-router"

import { api} from "../services/api"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signUpSchema = z.object({
  name: z.string().trim().min(1, {message: "Informe um nome"}),
  email: z.string().email({message: "E-mail inválido"}),
  password: z.string().min(6, {message: "Informe uma senha com pelo menos 6 caracteres"}),
  passwordConfirm: z.string({message: "Congirme a senha"}),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "As senhas não são iguais",
  path: ["passwordConfirm"]
})


export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()


  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    alert("Entrando!")

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm
      })


      await api.post("/users", data)

      if(confirm("Cadastrado com sucesso, Ir para tela de entrar?")){
        navigate("/")
      }

    }catch(error){
      console.log(error)
      
      if(error instanceof ZodError){
        return alert(error.issues[0].message)
      }

      if(error instanceof AxiosError){
        return alert(error.response?.data.message)
      }

      alert("Não foi possível cadastrar")
    } finally {
      setIsLoading(false)
    }
  }


  return( 
    <form onSubmit={ onSubmit } className="w-full flex flex-col gap-4">

      <Input 
        required 
        legend="Name" 
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />  

      <Input 
        required 
        legend="E-mail" 
        type="email" 
        placeholder="seu@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
    

      <Input 
        required 
        legend="Senha" 
        type="password" 
        placeholder="sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />

        
      <Input 
        required 
        legend="Confirme sua senha" 
        type="password" 
        placeholder="Confirme sua senha"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

        <Button type="submit" isLoading = {isLoading}>Cadastrar</Button>

        <a
          href="/" 
          className="test-sm font-semibold text-gray-100 mt-10 mb-4 
          text-center hover:text-green-800 transition ease-linear"
          >
            Já tenho uma conta 
        </a>

    </form>
  )
}