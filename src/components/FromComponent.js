import { useState,useEffect } from 'react'
import './FromComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent=(props) =>{
    const[title,setTitle] = useState('');
    const[amount,setAmount] = useState(0);
    const [formValid,setFormValid] = useState(false);
    // การใช้ useState หลังจากนี้คือ
    // หาก จะเปลี่ยนแปลงค่า title หรือ amount 
    // ต้องทำการเรียกและเปลี่ยนค่าผ่าน setTitle กับ setAmount เท่านั้น
    const inputTitle= (event)=>{

        // ไปเรียกใช้ setTitle 
        setTitle(event.target.value);
        // console.log(event.target.value)
    }
    const inputAmount= (event)=>{
        // console.log(event.target.value)
        setAmount(event.target.value);
    }
    const saveItem = (event)=>{

        //
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            title:title,
            amount: Number (amount)
        }
        props.onAddItem(itemData);
        // กด submit แล้ว เคลียร์ค่า
        setTitle('');
        setAmount(0);
    }
    //use when re render component
    useEffect(()=>{
        // title ไม่เป็น null และ amount != 0 
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData);
        // ตรวจสอบเฉพาะที่เกิดขึ้นกับ state ที่ชื่อ amount เท่านั้น 
        // เฉพาะ ที่อยู่ใน [] เท่านั้น
    },[title,amount])
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label> ชื่อรายการ</label>
                    {/* onChange สั่งว่าทำตรงนี้แล้วยังไงต่อ */}
                     {/* ผูก value ตรง title ให้เข้ากับ state  */}
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label> จำนวนเงิน</label>
                    {/* ผูก value ตรง amount ให้เข้ากับ state  */}
                    <input type="text" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div className="form-control">
                    <button type="submit" className='btn' disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent;