import Navbar from "@/components/Navegacion/Navbar"
import Footer from "@/components/Footer/Footer"
export function ContactLayout(props){
return (
<>
    <header>
        <Navbar></Navbar>
    </header>

    <main className="container-xl">
        <div>
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="form-control"
                            placeholder="Nombre"></input>
                    </div>
                    <div className="form-group">
                        <label for="correo">Correo electrónico</label>
                        <input type="mail" name="correo" id="correo" className="form-control"
                            placeholder="Correo electrónico"></input>
                    </div>
                    <div className="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" name="telefono" id="telefono" className="form-control"
                            placeholder="Teléfono"></input>
                    </div>
                    <div className="form-group">
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" placeholder="Mensaje" className="form-control"></textarea>
                    </div>
                </form>
            </div>
        <div>
            <p>p</p>
        </div>
        </div>
    </main>

    <Footer></Footer>
</>
)
}