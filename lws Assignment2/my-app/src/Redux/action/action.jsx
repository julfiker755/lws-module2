import { ADD, DELETE } from "../actiontypes/actiontypes"

export const add=(data)=>{
    return {
        type:ADD,
        payload:data,
    }
}

export const deletee=(id)=>{
  return {
    type:DELETE,
    payload:id,
  }
}