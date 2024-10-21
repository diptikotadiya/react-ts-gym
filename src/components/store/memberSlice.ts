import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Membertype ={
  name :string,
  email:string,
  mobile : string,
  choose : string
};

const saveState = (state : Membertype[]) => {
  try {
    const stringifiedState = JSON.stringify(state)
    
    localStorage.setItem('memberStatus',stringifiedState)
  } catch (error) {
    console.log(error)
  }
}

const loadState = () =>{
  try {
    const stringifiedState = localStorage.getItem('memberStatus')
    if(stringifiedState === null ){
      return undefined
    }
    else{
      JSON.parse(stringifiedState)
    }
  } catch (error) {
    console.log(error)
  }
}

const initialState : Membertype[] = loadState() ||[]

const memberSlice = createSlice({
  name : 'memberDetail',
  initialState,
  reducers: {
    addMembers : (state, action:PayloadAction<Membertype> )=>{
      state.push({...action.payload})
      saveState(state)
      console.log({...state})
    }
  }

})

export const {addMembers} =memberSlice.actions
export default memberSlice.reducer