// import "../components/";
import image from "../assets/pumaPortada.png"
import { Link } from "react-router-dom"

function Home() {
    
    return (
        <div className="container-fluid bg-paisaje p-0 m-0 d-flex flex-column justify-content-end" >
            <div className='container-fluid p-0 m-0 d-flex row flex-wrap-reverse' style={{"height":"90vh"}}>
                <div className="p-0 m-0 col-sm-6 col-xs-6" style={{ "position": "relative", "height":"35rem"}}>
                    <img className="p-0 m-0 img-fluid" style={{ "position": "absolute", "bottom": "0", "left": "0" }} src={image} />
                </div>
                <div className="col-sm-6 col-xs-6 d-flex flex-column justify-content-center bg-trasparencia" style={{}}>
                    <span className="fw-bold fs-3 fs-roboto text-white text-shadow">Fotografías de Pumas</span>
                    <br></br>
                    <span className="fw-light font-monospace text-white">Tomadas por cámara trampa</span>
                    <br></br>
                    <br></br>
                    <Link to="/images" className="btn btn-dark">Ver Fotografías</Link>
                </div>

            </div>
            <div className='container-fluid p-4 bg-dark text-white' style={{"height":"10vh"}}>
                correo@gmail.cl    |    +56897982735    |    ubicación
            </div>
        </div>
    )
}

export default Home