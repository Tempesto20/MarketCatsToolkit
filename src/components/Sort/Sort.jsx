import React from 'react';
import Form from 'react-bootstrap/Form';
import './sort.scss';


function Sort() {

// const amountHendler =(event)=>{
//     props.onChangeAmount(event.target.value);
//     //console.log(event.target.value);
//     //setOld(defaultValueOld);
// }

  return (
        <div className="sort">
            <h2 className="sorting__cat">Сортировать по:</h2>
            
            <Form.Select 
                
                tabIndex="10"
                name="price"
                className="catSelect"
                // onChange={amountHendler}  
                style={{backgroundColor: '#E5E5E5'}}         
                >
                <option defaultValue value="defaultPrice" className="nice">Рекомендованные</option>
                <option value="more" className="nice" >
                    Дороже
                </option>
                <option value="less" className="nice" >
                    Дешевле
                </option>

                <option value="under" className="nice">
                    Юные
                </option>
                <option value="older" className="nice">
                    Взрослые
                </option>

            </Form.Select>
            
            </div>
);
}

export default Sort;