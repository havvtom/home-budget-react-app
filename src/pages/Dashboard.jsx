import { useLoaderData } from "react-router-dom"
import { toast } from "react-toastify"
import Intro from "../components/Intro"
import { fetchData } from "../helpers"


//loader
export function dashboardLoader() {
  const userName = fetchData("userName")
  return {userName}
}

//action
export async function dashboardAction({request}){
  
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try{
    // throw new Error('oh oh')
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
  }catch(e){
    throw new Error("There was a problem creating your account")
  }
}

export default function Dashboard(){
  const { userName } = useLoaderData()
  return (
    <>
      {userName ? userName: <Intro />}
      
    </>
  )
}