// slice.js
// some data present inside our store 
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice(
    {
        name : 'dataSlice',
        initialState : [{ name: 'Abishek',age:25,course:"mern",batch:"sept" }, { name: 'Ravi',age:25,course:"mern",batch:"sept" }, { name: 'Vikash',age:25,course:"mern",batch:"sept" }, { name: 'Raja',age:25,course:"mern",batch:"sept" }, { name: 'Minu',age:25,course:"mern",batch:"sept" }],
        // reducer function dispatch actions to update your state
        reducers :
        {
            editData : (state,action)=>{
               console.log("Edit : ")
               console.log(action.payload);
                state[action.payload.index] = action.payload.newObj;
                return (state) 
            },
            addData : (state,action)=>{
                state.push(action.payload)
                return (state)
            }    
        }
    }
);

export const {editData,addData} = dataSlice.actions;
export default dataSlice.reducer; 