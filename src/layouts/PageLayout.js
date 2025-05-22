import Navbar from "@/components/Navegacion/Navbar";
import Social from "@/components/Social/SocialNavbar";
import Footer from "@/components/Footer/Footer";




export function PageLayout(props){
    const {children} = props;
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main className="container-fluid">
                    {children}
            </main>

            <Footer></Footer>
        </>
    )
}