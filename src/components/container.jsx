import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyitem } from '../redux/action';


const Container =(props)=>{
    // const [item,setitem] = useState();
    return(
        <>
            <div className='wraper'>
                <h1>WELCOME</h1>
                <h4>Let us know what  you want to buy</h4>
                <input type='text' value='' placeholder='ENTER THE ITEM' />
                <button onClick={props.buyitem}>Bought {props.items} items</button>
            </div>
        </>
    )
}

const mapstatetoprops=(state)=>{
    return{
        items:state.items
    }

}
const mapstatetodispatch=(dispatch)=>{
    return{
        buyitem :()=>{
            dispatch(buyitem())
        }
    }
}
export default connect(mapstatetoprops,mapstatetodispatch)(Container) ;