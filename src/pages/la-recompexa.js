import { PageLayout } from "@/layouts/PageLayout";
import { ENV } from "@/utils/constants";
import { Eventos } from "@/api/events";
import { useState,useEffect } from "react";
import { map } from "lodash";
import Link from "next/link";
const eventsCtrl = new Eventos();

export default function LaRecompexa(){

const [eventos,setEventos] = useState(null);

useEffect(()=>{
    (
        async () => {
            try {
            const response = await eventsCtrl.getEventos();
            console.log(response.data);
            setEventos(response.data)
                
            } catch (error) {
                console.error("Error al obtener los eventos:", error);
            }
        }
    )();
},[])

return(
<PageLayout>
    <div className="mt-5 container-xl">
        <h1 className="display-3 fw-bold text-center">La Recompexa</h1>
        <div className="eventos-container mt-5">
        {eventos &&
                map(eventos, (evento) => (
                  <div id={evento.id} className="recomp-card neon-border">
                    <div className="card-bg" style={{ backgroundImage: `url(${ENV.SERVER_HOST}${evento.portrait.url})` }}>
                        <div className="card-gradient">
                            <div class="card-title-neon">{evento.Title}</div>
                            <div className="card-date">{evento.date}</div>
                            <Link href={evento.url} target="_blank" className="card-btn">Participar</Link>
                        </div>
                    </div>
                  </div>
                ))}
        </div>
    </div>
</PageLayout>
)
}