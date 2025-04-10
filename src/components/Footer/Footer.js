import { useState,useEffect, use } from "react"
import { ENV } from "@/utils/constants"
import Link from "next/link"
import { map } from "lodash"
import { legalItems } from "@/api/legals"
import { MenuItems } from "@/api/menu"

const legatlCtrl = new legalItems();
const menuCtrl = new MenuItems();

export default function Footer(){

    const [items,setItems] = useState(null);
    const [menuItems,setMenuItems] = useState(null);

    useEffect(()=>{
        (async () =>{
                try {
                    const response = await legatlCtrl.getLegalItems();
                    setItems(response.data)
                    const response_2 = await menuCtrl.getMenuItems();
                    console.log(response_2)
                    setMenuItems(response_2.data);
                } catch (error) {
                    console.error("Error al obtener los legales:", error);
                }
            })();
    },[])

    return(
        <>
            
        </>
    )
}