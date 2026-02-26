import React from 'react'
import ModalCar from './ModalCar'
import CarItem from './CarItem'
import { useState } from 'react'

const dataCar = [
    {id:1, tenXe:'Mercedes-Benz S450', gia: 1000000000, hinhAnh:'/img/imgRedCar.jpg'},
    {id:2, tenXe:'Ducati S450', gia: 1000000000, hinhAnh:'/img/imgBlackCar.jpg'},
    {id:3, tenXe:'Ford S450', gia: 1000000000, hinhAnh:'/img/imgSilverCar.jpg'},
]
const ExerciseCarStore = () => {

    //Đặt state cho dữ liệu xe, mặc định sẽ là xe đầu tiên trong mảng dataCar
    const [stateModal, setStateModal] = useState({id:3, tenXe:'Ford S450', gia: 1000000000, hinhAnh:'/img/imgSilverCar.jpg'});
  return (
    <>
    <h2 className="text-white bg-dark text-center p-4">ExerciseCarStore</h2>
    <ModalCar stateModal={stateModal}/>
    <div className="container">
        <div className="row">
            {
                dataCar.map((car,index) => {
                    return <div className="col-md-4" key={car.id}>
                        <CarItem carItem={car} setStateModal={setStateModal}/>
                    </div>
                })
            }
            
        </div>
    </div>

    </>
  )
}

export default ExerciseCarStore