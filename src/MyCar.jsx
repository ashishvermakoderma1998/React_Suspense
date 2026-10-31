import React from 'react'
import Car from './MyCar';

const MyCar = () => {
const cars = ['Bolero','Scorpio','XUV',"Tesla",'Ve']

  return (
    <div>
      <h2 style={{color:'red',backgroundColor:'grey'}}>My Favorite Cars</h2> 
    <ul>
        {cars.map((car,index) => (
            <li key={index}>{car}</li>
        ) )}
    </ul>
    </div>
  )
}

export default MyCar
