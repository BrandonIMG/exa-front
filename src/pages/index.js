import { PageLayout } from "@/layouts/PageLayout";
import SocialNavbar from "@/components/Social/SocialNavbar";
export default function SobreNosotros(){
return(
<PageLayout>
    <div className="container-xl video-container">
        <iframe  src="https://www.youtube.com/embed/Ywov5yUEI_8?si=1eWOohTT4mKtf5yC"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <div className="d-flex justify-content-center mx-5 mt-5">
        <img src="/images/banner-1.jpg" className="img-fluid rounded" />
    </div>

    <section className="container-xl mt-5">
        <h2>Noticias</h2>
        <div class="video-gallery">
            <div class="video video-large">
                <iframe src="https://www.youtube.com/embed/VbUNr8e-aK4?si=FFfPLDjfRHMy2Twq" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video video-small">
                <iframe src="https://www.youtube.com/embed/aSkjSYOPLJo?si=-UAyKrmrzuqnRTsd" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="video video-small">
                <iframe src="https://www.youtube.com/embed/upIuMoo33bA?si=3AvapBG0lLj_JVPw" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </section>

    <div className="d-flex justify-content-center mx-5 mt-5">
        <img src="/images/banner-2.jpg" className="img-fluid rounded" />
    </div>
</PageLayout>
)
}