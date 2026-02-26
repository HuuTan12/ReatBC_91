import React from 'react'

const CarItem = (props) => {
    const {carItem,setStateModal} = props;
  return (
    <div className="card">
        <div className="card-header bg-dark text-white">{carItem.tenXe}</div>
        <img src={carItem?.hinhAnh} alt="..." height={300}/>
        <div className="card-body">
          <p className="card-text">{carItem?.tenXe}</p>
          <p className="card-desc">Giá: {carItem.gia.toLocaleString()} VND</p>
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalId"
            onClick={(e) => {
                //Đưa dữ liệu xe lên component cha (ExerciseCarStore) để hiển thị lên Modal
                setStateModal(carItem);
            }}>
                Xem chi tiết
            </button>
        </div>
        <div className="card-footer bg-dark text-white">
            <p>{carItem.tenXe}</p>
        </div>
    </div>
  )
}

export default CarItem