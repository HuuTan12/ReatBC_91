import React from 'react'

const RenderCondition = () => {


    let isLogin = true;
    let userName = "Nguyễn Hữu Tân";


    

  return (
    <div className="container">
        <h1 className="text-center text-primary">RenderCondition</h1>
        
        <nav className="bg-dark text-white text-end p-3">
            {isLogin ? <span>Xin chào {userName}</span> : <button className="btn btn-success">Đăng nhập</button>}
        </nav>
        
        </div>
  )
}

export default RenderCondition