import { State } from "./state";
import { BUY_ITEMS } from "./type";

export const Reducer =(state=State.action)=>{
    switch(action.type){
        case BUY_ITEMS:
            return{
                ...state,
                items : state.items - 2
            }
            default :return state;
    }
}