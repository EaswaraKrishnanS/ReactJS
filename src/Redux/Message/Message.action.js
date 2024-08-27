import { type } from "@testing-library/user-event/dist/type"

let GM='Good Morning'
let GA='Good AfterNoon'
let GE='Good Evening'
let GN='Good Night'

let gmAction = () => {
    return  {type:GM}
}

let gaAction = () => {
    return  {type:GA}
}


let geAction = () => {
    return  {type:GE}
}


let gnAction = () => {
    return  {type:GN}
}


export {gmAction,gaAction,geAction,gnAction,GM,GA,GE,GN}