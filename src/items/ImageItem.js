import React from 'react'
import { Link } from 'react-router-dom'


export const ImageItem = ({id, title, created_at, onClick}) => {
  
  return (
    <>
        <tr key={id} className="cursor-pointer" onClick={()=>onClick(id)}>
          <th scope="row">{id}</th>
          <td><img className='img-fluid' src={`https://random.imagecdn.app/150/150`} /></td>
          <td>{title}</td>
          <td>{created_at}</td>
          <td><button className='btn btn-danger'>Eliminar</button></td>
        </tr>
    </>
  )
}
