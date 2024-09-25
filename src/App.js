import React, { useEffect, useState } from 'react'
import "./App.css"
import SearchBox from './components/search/SearchBox'


export default function App() {
  const [dark,setDark] = useState(false) 
  useEffect(()=>{
    if(dark){
      document.querySelector('html')?.classList.add('dark')
      console.log("dark is on")
    }else{
      document.querySelector('html')?.classList.remove('dark')
      console.log("dark is off")
    }
  },[dark])

  const darkModeHandler= ()=>{
    setDark(!dark)
  }
  return (
    <div>
      <p className='text-2xl font-semibold font-poppins text-text dark:text-accent'>Hello my name is pratik </p>
      <p className='text-2xl font-semibold font-roboto'>Hello my name is pratik </p>
      <button className='bg-secondary text-text' onClick={darkModeHandler}>dark mode</button>
      {/* <SearchBox></SearchBox> */}
    </div>
  )
}
