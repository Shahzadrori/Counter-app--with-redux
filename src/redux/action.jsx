import { BUY_ITEMS } from "./type"

export const buyitem=(values=1)=>{
    return{
        type:     BUY_ITEMS,
        payload   : values
    }
}