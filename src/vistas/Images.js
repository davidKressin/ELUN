import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { ImagesList } from '../listados/ImagesList';
import Image from './Image';




const TitleImage = () => {
  const { data, isLoading } = useFetch('http://localhost:5000/api/images');
  const navigate = useNavigate();

  const onClick = (id)=>{
    navigate(`/images/${id}`)
  }

  return (
    <div className='container-fluid p-5 col-xl-6'>

      <h2>Fotografías</h2>



      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha de subida</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>

          {
            isLoading
              ? <tr><th>conecte su servidor...</th></tr>
              : <ImagesList onClick={onClick} data={data} />
          }
        </tbody>
      </table>
    </div>
  )

}

export default TitleImage