import { useEffect,useState } from "react";
import { PageLayout } from "@/layouts/PageLayout";
import Slider from "@/components/Slider/Slider";
import { MainSlider } from "@/api/main-slider";
import PostsGrid from "@/components/Posts/PostGrid";

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
    <div className="noticias-home">
        <PostsGrid
        className="col-lg-8"
            sort="desc"
            pageSize={10}
            page={page}
            onPageChange={setPage} />
                <div className="col-lg-4"></div>
    </div>
</PageLayout>
)
}