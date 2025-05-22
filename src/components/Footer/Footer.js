import { useState,useEffect, use } from "react"
import { ENV } from "@/utils/constants"
import Link from "next/link"
import { map } from "lodash"
import { legalItems } from "@/api/legals"
import { MenuItems } from "@/api/menu"
import { Social } from "@/api/socials"

const legatlCtrl = new legalItems();
const menuCtrl = new MenuItems();
const socialCtrl = new Social();

export default function Footer(){

    const [items,setItems] = useState(null);
    const [menuItems,setMenuItems] = useState(null);
    const [socialItems,setSocialItems] =  useState(null);

    useEffect(()=>{
        (async () =>{
                try {
                    const response = await legatlCtrl.getLegalItems();
                    setItems(response.data)
                    const response_2 = await menuCtrl.getMenuItems();
                    setMenuItems(response_2.data);
                    const response_3 = await socialCtrl.social_links();
                    setSocialItems(response_3.data);
                } catch (error) {
                    console.error("Error al obtener los legales:", error);
                }
            })();
    },[])

    return(
        <>
            <footer className="mt-5">

                <div>
                   <img src="/images/logo_principal.png" className="img-fluid logo" alt="Logo" />
                </div>
                <div className="menu-footer">
                       <ul>
              {items &&
                map(menuItems, (menuItem) => (
                  <li key={menuItem.id} className="">
                    <Link className="" href={`${menuItem.slug}`}>
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
            </ul>
                </div>

                <div className="social-icons">
                       <ul className="">
              {items &&
                map(socialItems, (socialItem) => (
                  <li key={socialItem.id} className="">
                    <Link className="" href={`${socialItem.url}`}>
                      <img src={`${ENV.SERVER_HOST}${socialItem.icon.url}`} className="img-fluid icon"></img>
                    </Link>
                  </li>
                ))}
            </ul>
                </div>
                <div className="legales">
                         <ul className="">
              {items &&
                map(items, (item) => (
                  <li key={item.id} className="">
                    <Link className="" href={`${item.slug}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
                </div>
                <div>
                    <p>MVS Net. S.A de C.V Boulevard Puerto Aéreo, No. 486, Col. Moctezuma 2a sección, Venustiano Carranza, Ciudad de México, México, C.P. 15530</p>
                </div>
            </footer>
            <div className="footer_down">
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <p className="text-s">MVS Net, S. A. de C.V., © 2025. Todos los derechos reservados.</p>
                    </div>
                    <div>
                        <p className="test-center">Queda prohibida la reproducción total o parcial sin la autorización previa, expresa y por escrito de su titular.</p>
                    </div>
                </div>
            </div>
        </>
    )
}