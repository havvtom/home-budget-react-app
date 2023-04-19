import { Form, NavLink } from "react-router-dom"
import logo from "../assets/logomark.svg"
import { TrashIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}

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
              <TrashIcon width={20}/>
            </button>
          </Form>
        )
      }
    </nav>
  )
}