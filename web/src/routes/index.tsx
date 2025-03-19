import { BrowserRouter } from "react-router"

import { useAuth } from "../hooks/useAuth"

import { AuthRoutes } from "./AuthRoutes"
import { ManagerRoutes } from "./ManagerRoutes"
import { EmployRoutes } from "./EmployRoutes"
import { Loading } from "../components/Loading"

export function Routes(){

  const {session, isLoading} = useAuth()

  function Route(){
    switch(session?.user.role){
      case "employee":
        return <EmployRoutes />
      case "manager":
        return <ManagerRoutes />
      default:
        return <AuthRoutes />
    }
  }
  
  if(isLoading){
    return <Loading />
  }

  return(
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
  )
}