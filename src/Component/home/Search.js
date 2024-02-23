import React,{useState} from 'react'
import { DatePicker, Space } from 'antd';

const Search = () => {
    const { RangePicker } = DatePicker;
    const [keyword,setKeyword]=useState({});
    const [value,setValue]=useState([])
    function returnDates(date,dateString){
        // it setting the range value in state
        setValue([date[0],date[1]]);
        updateKeyword("dateIn",dateString[0])
        updateKeyword("dateOut",dateString[1])
    }
    // this fuction to update the 
    const updateKeyword=(field,value)=>{
        setKeyword((prevKeyword)=>({
            ...prevKeyword,
            [field]:value,

        }));
    };
    return(
    <>
        <div className='searchbar'>
            {/* inpute field for searching destition */}
            <input className='search' id='search_destination' placeholder='Search_destination' type='text' 
            value={keyword.city}
            onChange={(e)=>updateKeyword("city",e.target.value)}
            />
            <Space direction='vertical' size={12} className='search'>
                <RangePicker
                value={value}
                format="YYYY-MM-DD"
                picker='date'
                className='date_picker'
                disabledDate={(current)=>{return current && current.isBefore(Date.now(),"day")}}
                onChange={returnDates}/>
            </Space>
            <input className='search' id='addguest'
                placeholder='Add guest'
                type='number'
                value={keyword.guests}
                onChange={(e) => updateKeyword("guests",e.target.value)} />

            <span className="material-symbols-outlined searchicon">
                search
            </span>
        </div>
    </>
    )
}

export default Search