import { Form, NavLink } from "react-router-dom"
import logo from "../assets/logomark.svg"

export default function Navbar(props){
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logo} alt="" height={30} />
        HomeBudget
      </NavLink>
      {
        props.userName && (
          <Form
            method="post"
            action="/logout"
            onSubmit={(e) => {
                if(!confirm("Delete user and all data?")){
                  e.preventDefault()
                }
              }
            }
          >
            <button className="btn btn--warning">
              <span>Delete User</span>
            </button>
          </Form>
        )
      }
    </nav>
  )
}