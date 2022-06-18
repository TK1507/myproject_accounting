import PropTypes from 'prop-types';
import './item.css';


// expense เป็น แดง , revenue เป็นเขียว
const Item =({title,amount})=>
{
    //ใช้ props ในการส่งข้อมูล
    //Props Destructuring
    // const {title,amount} = props;
    // หรือแทนที่ props โดย {title,amount}
    
    //มาเช็ก กันว่าเป็นค่าใช้จ่ายหรือรายได้ผ่าน เครื่องหมายของ amount
    const status = amount<0 ? "expense":"revenue"
    const symbol = amount<0 ? "-":"+";
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        // <li> {props.title} <span>{props.amount}</span></li>
        //เมื่อสร้าง เป็น Destructuring แล้ว สามารทำแบบนี้ได้ 
            <li className={status}>{title} <span> {symbol}{formatNumber( Math.abs(amount))}</span>
            {/* เอา Data context มาใส่ใน card บอกรายการ โดยส่งมาจาก provider รับโดย Consumer */}</li>
        );
}
Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item;