import {FC} from "react"
import { Ns601 } from "./ns601"
import { Ns523 } from "./ns523"
import { Ns501 } from "./ns501"
import { Dyntrac } from "./dyntrac"
import { Ns913 } from "./ns913"

import { useLocation } from "react-router-dom"


export const Preview:FC = () => {

    const locacion = useLocation()
    const dato = locacion.state?.dato || []
   
    return(
        <>
        {dato === "NS601" && <Ns601/>}
        {dato === "NS523" && <Ns523/>}
        {dato === "NS501" && <Ns501/>}
        {dato === "DYNTRAC" && <Dyntrac/>}
        {dato === "NS913" && <Ns913/>}
        </>
    )
}