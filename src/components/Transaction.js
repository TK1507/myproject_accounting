import Item from "./Item";
import './Transaction.css';

// ย้ายไปยัง App.js เช่นเดียวกัน
// import { v4 as uuidv4 } from 'uuid';

const Transaction = (props)=>{
    const {items} = props;
    // เอา useContext มาใช้ใน แทน DataCotext consumer นั้นเอง

//    ย้ายไปยัง Component (App.js)เพื่อกระจายข้อมูล
    // const data =[
    //     {title:"Medical Bill",amount:2000},
    //     {title:"Food Bill",amount:12000},
    //     {title:"Electric Bill",amount:6000},
    //     {title:"Accomodation Bill",amount:6000},
    //     {title:"Insurance Fee",amount:6000}
    // ]
     return (
        <div>
            <ul className="item-list">
                {/* เตรียม loop ข้อมูลใน Array */}
                
                {/* ใช้ map ช่วย */}
                {items.map((element)=>{
                    // return <Item title={element.title} amount = {element.amount}/>
                    {/* เอา Spread Opeator มาช่วย */}
                    return <Item {...element} key={element.id}/>
                })}


                {/* ดึงจาก array */}
                {/* <Item title ={data[0].title} amount ={data[0].amount}/>
                <Item title ={data[1].title} amount ={data[1].amount}/>
                <Item title ={data[2].title} amount ={data[2].amount}/> */}

                {/* กำหนดไป ตรงๆ  */}
                {/* <Item title="Medicine bill" amount = "2000"/>
                <Item title="Electric bill" amount = "6500"/>
                <Item title="Food bill" amount = "12000"/>
                <Item title="Accomodation bill" amount = "50000"/> */}
            </ul>
           
        </div>
        
    );
}
export default Transaction;