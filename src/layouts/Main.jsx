import { Outlet, useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"
import wave from "../assets/wave.svg"
import Navbar from "../components/Navbar"

export function mainLoader(){
  const userName = fetchData('userName')
  return { userName }
}

export default function Main(){

  const {userName} = useLoaderData()

  return (
    <div className="layout">
      <Navbar userName={userName}/>
      <main>
        <Outlet />
      </main> 
      <img src={wave}/>     
    </div>
  )
}