import { PageLayout } from "@/layouts/PageLayout";
import { ContactLayout } from "@/layouts/ContactLayout";
import { usePathname } from "next/navigation";

export default function SobreNosotros({ children }) {
    const pathname = usePathname();

    // Seleccionar el layout según la ruta
    const getLayout = () => {
        if (pathname.startsWith("/contacto")) {
            return <ContactLayout>{children}</ContactLayout>;
        }
        return <PageLayout>{children}</PageLayout>;
    };

    return getLayout();
}
