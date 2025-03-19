import { Routes, Route} from "react-router"

import { Refund } from "../pages/Refund"
import { NotFound } from "../pages/NotFound"
import { Comfirm } from "../pages/Confirm"

import { AppLayout } from "../components/AppLayout"

export function EmployRoutes(){
  return (
    <Routes>
      <Route path= "/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Comfirm />} />
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}