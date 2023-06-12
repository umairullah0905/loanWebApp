export const TOGGLE_BOOLEAN = 'TOGGLE_BOOLEAN'

export const toggleBoolean = (value)=>{
    return {
        type:TOGGLE_BOOLEAN,
        payload: value,
    }
}