import { useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"


//loader
export function dashboardLoader() {
  const userName = fetchData("userName")
  return {userName}
}


export default function Dashboard(){
  const { userName } = useLoaderData()
  return (
    <>
      <p>Dashboard</p>
    </>
  )
}