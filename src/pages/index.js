import { useEffect,useState } from "react";
import { PageLayout } from "@/layouts/PageLayout";
import Slider from "@/components/Slider/Slider";
import { MainSlider } from "@/api/main-slider";
import PostsHome from "@/components/Posts/Posts";

const slideCtrl = new MainSlider();

export default function SobreNosotros(){

    const [slides,setSlides] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() =>{
        (async () => {
            try {   
                const response =  await slideCtrl.main_slider();
                setSlides(response.data)
                
            } catch (error) {
                console.error("Error al obtener los slides:", error);
            }
        })();
    },[]);

return(
<PageLayout>
    {slides && <Slider slides={slides} className="mt-5" />}
    <h3 className="mt-5">Noticias</h3>
    <PostsHome sort="desc" limit={4} />

</PageLayout>
)
}