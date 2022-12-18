import logo from "./logo.png"
import { AiFillAppstore } from "react-icons/ai"; //დააკვირდით რომ აიკონის სახელი დააიმპორტოთ სწორად
import { BsFillBrightnessHighFill } from "react-icons/bs";

// ერთი ვარიანტია კომპონენტს წააკიტხოთ სტილი ზოგადი  app.scss ფაილიდან (შეამოწმეთ app.scss)
export function Header(){
    return <nav className='nav-div'>
    <div className='logo-div'>
        <img src={logo}/>
    </div>
    <div >
        <li >MENU</li>
        <li >REWARDS</li>
        <li >GIFT CARDS</li>
    </div>
    <div id="icon-div">
        <AiFillAppstore style={{fontSize: '40px',padding: "15px", color: "rgb(31,54,118)"}}></AiFillAppstore >
        <BsFillBrightnessHighFill style={{fontSize: '40px', padding: "15px", color : "rgb(31,54,118)"}}></BsFillBrightnessHighFill>
    </div>
</nav>

}