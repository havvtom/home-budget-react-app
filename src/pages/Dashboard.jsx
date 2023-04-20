import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddBudgetForm from '../components/AddBudgetForm';
import Intro from '../components/Intro';
import { createBudget, fetchData } from '../helpers';

//loader
export function dashboardLoader() {
  const userName = fetchData('userName');
  const budgets = fetchData('budgets');
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  //create a new user
  if (_action === 'newUser') {
    try {
      // throw new Error('oh oh')
      localStorage.setItem('userName', JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error('There was a problem creating your account');
    }
  }

  //create a new budget
  if (_action === 'createBudget') {
    try {
      //create budget
      createBudget(values.newBudget, values.newBudgetAmount);
    } catch (e) {
      throw new Error('There was an error creating your budget');
    }
  }
}

export default function Dashboard() {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
