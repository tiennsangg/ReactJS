import React, { useState } from 'react';
import Content from './Content'
//Thêm giá trị vào và hiển thị  dạng list
function App() {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show)//mỗi lần click là sẽ set giá trị ngược lại với show hiẹn tại nên sẽ thay đổi true false lên tục
  }
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {show && <Content/>} {/* Nếu show = true thì vế 2 mới chạy, hiện tại show = false vì initState đang set = false */}
    </div>
  )
}

export default App;
