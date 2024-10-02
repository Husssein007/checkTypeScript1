import React from 'react'


interface GreetingP {
    name:string,
    age?:number
} 
const Greeting : React.FC<GreetingP> = ({name,age}) => {
   
  return (
    <div>Hello {name} age {age}</div>
  )
}

export default Greeting