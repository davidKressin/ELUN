import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

function Image() {
    const { idImage } = useParams();
    const { data, isLoading } = useFetch(`http://localhost:5000/api/images`);

    const image = !isLoading && data.filter(({id})=> id.toString() === idImage);


    return (
        <>
            <div className='' style={{ "height": "450px" }}>
                <div className='container-fluid p-0 bg-paisaje' style={{ "height": "300px" }}>
                    <div className='container-fluid bg-trasparencia h-100 d-flex flex-column flex-content-center align-items-center'>
                        <div className='mx-auto'>
                            <img className='shadow-lg img-fluid border-rounded rounded-circle mx-auto mt-5 mb-0' src='https://random.imagecdn.app/400/400' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-12 px-3'>
                <div className='card mx-auto col-lg-6 col-md-10 col-sm-11 '>
                    <div className='card-header'>Titulo de la imagen</div>
                    <div className='card-body'>
                        <span className='fw-light'>Fotografía subida el:</span>
                        {
                            isLoading
                            ? <p>cargando...</p>
                            : <p>{image[0].created_at}</p>
                        }
                        <span className='fw-light'>Id:</span>
                        {
                            isLoading
                            ? <p>cargando...</p>
                            : <p>{image[0].id}</p>
                        }

                    </div>                    
                </div>
            </div>

        </>
    )
}

export default Image