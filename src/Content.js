import React from "react"
import { useState, useEffect } from "react"


function Content() {
    const [countDownInterval, setCountDownInterval] = useState(180)
    const [countDownTimeOut, setCountDownTimeOut] = useState(180)

    useEffect(() => {
        const countDown = setInterval(() => {
            setCountDownInterval((prev)=>{
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(countDown)
    }, []) //phải viết setInterval trong useEffect vì nếu viết ngoài thì setCountDown sẽ khiến component re-render liên tục và tạo ra nhiều setInterval chạy song song với nhau và sẽ bị lệch
    //useEffect sẽ chỉ chạy 1 lần nhưng setCountDown trong setInterval không được dùng thẳng giá trị state để truyền vào vì useEffect chỉ chạy 1 lần sẽ khiến state sẽ chỉ giữ nguyên 1 giá trị vì state dùng ở trong Effect nên ko thoát ra ngoài để tạo giá trị mới được
    
    useEffect(() => {
        const countDown = setTimeout(() => {
            setCountDownTimeOut(countDownTimeOut - 1)
        }, 1000)
        return () => clearInterval(countDown)
    }, [countDownTimeOut])
    return (
        <React.Fragment>
            <h1>{countDownInterval}</h1>
            <h1>{countDownTimeOut}</h1>
        </React.Fragment>
    )
}

export default Content