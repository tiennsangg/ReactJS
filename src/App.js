import React, { useState } from 'react';

function App() {
  const courses = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'JS'
    },
    {
      id: 3,
      name: 'JV'
    }
  ]

const [checked, setChecked] = useState('');  

const handleChecked = () => {
  //CALL API
  console.log(checked);
}

  return (
    <div>
      {
        courses.map((e) => {
          return(
            <div key={e.id}>
            <input 
              type="radio"
              checked = {checked === e.id} //so sánh khi checked(State) phải giống với id của bài học thì mới cho check
              onChange={() => setChecked(e.id)} //khi onChange sẽ lấy theo id rồi đẩy vào State
            /> {e.name}
            </div>
          )
        })
      }
      <button onClick = {handleChecked}>Gửi lên API</button>
    </div>
  )
}

export default App;
