import React from 'react'


//props.children: dùng để truyền giao diện jsx qua props
const ChildProps = (props) => {
  return (
    <div>
        <h3>Nội dung html</h3>
        {props.children}
    </div>
  )
}

export default ChildProps