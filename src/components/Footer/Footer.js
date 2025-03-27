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
            <footer className="mt-5">
                <div className="d-flex justify-content-center pt-5">
                    <ul className="legales d-flex flex-column flex-md-row gap-5 align-items-center">
                    {items && map(items, (item) => (
                    <li key={item.id} className="nav-item">
                        <Link
                    className="nav-legales"
                    href={`${ENV.SERVER_HOST}${item.file[0].url}`} // Asegura que no haya errores si file es undefined
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                        {item.title}
                        </Link>
                    </li>
                    ))}
                    </ul>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5 px-5 flex-column flex-md-row gap-5">
                    <img src="/images/logo.png" className="img-fluid" alt="logo"/>
                    <div>
                        <h3 className="text-white display-3">Navegación</h3>
                        <ul>
                            {menuItems && map(menuItems,(menuItem) => (
                                <li key={menuItem.id}>
                                    <Link href={menuItem.slug} className="footer-nav">
                                        {menuItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Link className="btn btn-primary btn-youtube text-uppercase fs-2" href="https://www.youtube.com/@HyperDriveGG"><svg xmlns="http://www.w3.org/2000/svg" color="#fff" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="0.75"> <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path> <path d="M10 9l5 3l-5 3z"></path> </svg>  Suscríbete a nuestro canal</Link>
                    </div>
                </div>

                <hr className="text-white mt-5"></hr>

                <div className="d-flex justify-content-center flex-column gap-2 mt-5">
                    <h3 className="text-white fs-1 text-center">Todos los derechos reservados © 2025</h3>
                    <p className="text-white fs-2 text-center">Hyper Drive Gaming® es un publisher de MVS Televisión®</p>
                </div>
            </footer>
        </>
    )
}