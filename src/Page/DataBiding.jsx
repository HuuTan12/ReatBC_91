import React from 'react'

const DataBiding = () => {

    //biến
    let title = "Cybersoft";

    //hàm
    const renderName = (name) => {
        return <div>
            Hello ! {name}
        </div>
    }

  return (
    <div className="container">
        <h1 className="text-center text-primary">DataBiding</h1>
        <h3>Tiêu đề : {title}</h3>
        <h3>Họ tên : {renderName("Nguyễn Hữu Tân")}</h3>

        <div className="form-group w-50">
            <label htmlFor="name">Họ tên</label>
            <input id="name" className="form-control"  value={name}/>
        </div>
    </div>
  )
}

export default DataBiding