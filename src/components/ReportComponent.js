//มาลอง ใช้ useContext แบบเป็น ไฟล์แยกออกมา
import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css';
const ReportComponent=()=>{
    const {revenue,expense} = useContext(DataContext);
    
    
    //Reducer
    const[count,setCount] = useState(0);
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
    <div>
        <h4>Balance</h4>
        <h1>{formatNumber(revenue-expense)} Baht</h1>
        <div className="report_container">
            <div>
                <h4>Total Revenue</h4>
                <p className="report plus">{formatNumber(revenue)}</p>
            </div>
            <div>
                <h4>Total Expense</h4>
                <p className="report minus">{formatNumber(expense)}</p>
            </div>
        </div>
    </div>
    );
}
export default ReportComponent;