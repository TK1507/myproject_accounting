import './App.css';
// import './components/Item';
// import React, { useReducer } from 'react';
import Transaction from  './components/Transaction'
import FromComponent from './components/FromComponent'
import { useState,useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router,Route ,Routes,Link} from 'react-router-dom';


// เอา design ไปใส่ แทนก็ได้
const Title = ()=><h1 style={design}> โปรแกรมรายรับ รายจ่าย</h1>
const design ={color:"red",textAlign:"center"};

// const Description = ()=><p> บันทึกข้อมูลรายรับ</p>
// const Transaction =()=>{
//   return (
//       <ul className='item'>
//           <li>ค่าเดินทาง <span>-200 </span> </li>
//           <li>ค่าอาหาร  <span>-200 </span> </li>
//           <li>เงินเดือน  <span>+24000 </span> </li>  
//       </ul> 
//     );
//   }
function App() {
  //กำหนดให้ useState เป็น Array เปล่าๆ
// const initdata =[
//   {id: 1,title:"Salary",amount:25000},
//   {id: 2,title:"Food Bill",amount:-12000},
//   {id: 3,title:"Electric Bill",amount:-6000},
//   {id: 4,title:"Accomodation Bill",amount:-6000},
//   {id: 5,title:"Insurance Fee",amount:-6000}
// ]



//เป็นข้อมูลเปล่าๆ ตั้งแต่ต้น ไม่ต้องมีค่าเริ่มต้นนั้นเอง
const [items,setItems] = useState([]);
const[reportRevenue,setReportRevenue] = useState(0);
const[reportExpense,setReportExpense] = useState(0);


const onAddNewItem =(newItem)=>{
 setItems ((prevItems)=>{
  return[newItem,...prevItems];
 })
}
// ใช้ useEffect เพื่อให้ค่าที่เติมมา ทำการคำนวณแล้ว link ไปที่ DataContextProvider เอาไปใช้ใน Component ต่างๆ 
useEffect(()=>{
  //เก็บค่า array สี่รายการ ใน initstate
  const amounts = items.map(items=>items.amount)
  const revenue = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0).toFixed(2)
  // แสดงเฉพาะเลข ไม่เอาเครื่องหมาย
  const expense =( -1*(amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))).toFixed(2)
  setReportRevenue(revenue);
  setReportExpense(expense);
},[items,reportExpense,reportRevenue])
// Reducer
  // const [showReport,setShowReport] = useState(false);
  // const reducer = (state,action)=>
  // {
  //   switch(action.type)
  //   {
  //     case "Show":
  //       return setShowReport(true)
  //     case "Hide":
  //       return setShowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport);
  
  
  return (
  //nested component 
  // Context provider จะคุมทั้งหมด
  // ทุก state สามารถ ดึงไปใช้ได้เลย
  //  ดึงได้ 2 แบบ 1. 
    <DataContext.Provider value={
      {
        revenue :reportRevenue,
        expense: reportExpense 
      }
    }>
      <div className="container">
         <Title/>
         <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to ="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
              <Link to ="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path='/' element={<ReportComponent/>}></Route>
              <Route path='/insert' element={<><FromComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}></Route>
          
            </Routes>
            
          </div>
         </Router>
         {/* reducer */}
         {/* { showReport &&<ReportComponent/>} */}
         {/* <Description/> */}
         {/* <ReportComponent/>
         <FromComponent onAddItem={onAddNewItem}/>
         {/* Prop ข้อมูลจาก initdata ไปยัง transaction */}
         
          {/* <Transaction items={items}/>  */}
         {/* Reducer */}
         {/* <h1>{result}</h1>
         <button onClick={()=>dispatch({type:"Show"})}>Show</button>
         <button onClick={()=>dispatch({type:"Hide"})}>Hide</button> */}
     </div>
    </DataContext.Provider>  
  
  
  
  
  
  




    //jsx
    //div
    // <div>
    //   <h1>Accoutnat Program</h1>
    //   <p>บันทึกข้อมูลรายรับ-รายจ่าย</p>
    //   <ul>
    //       <li>ค่าเดินทาง <span>-200 </span> </li>
    //       <li>ค่าอาหาร  <span>-200 </span> </li>
    //       <li>เงินเดือน  <span>+24000 </span> </li>  
    //   </ul>
    // </div>

    //section
    // <section>
    //   <article>
    //      <p>บันทึกข้อมูลรายรับ-รายจ่าย</p>
    //        <ul>
    //         <li>ค่าเดินทาง <span>-200 </span> </li>
    //         <li>ค่าอาหาร  <span>-200 </span> </li>
    //         <li>เงินเดือน  <span>+24000 </span> </li>
    //         </ul>
    //    </article>
    // </section>

    //fragment
    // <React.Fragment>
    //   <article>
    //      <p>บันทึกข้อมูลรายรับ-รายจ่าย</p>
    //        <ul>
    //         <li>ค่าเดินทาง <span>-200 </span> </li>
    //         <li>ค่าอาหาร  <span>-200 </span> </li>
    //         <li>เงินเดือน  <span>+24000 </span> </li>
    //         </ul>
    //    </article> 
    // </React.Fragment>
    );
}

export default App;
