import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpensesForm from '../components/AddExpensesForm';
import Intro from '../components/Intro';
import { createBudget, createExpense, fetchData, wait } from '../helpers';

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
    await wait()
    try {
      //create budget
      createBudget(values.newBudget, values.newBudgetAmount)
      return toast.success('You created your budget successfully')
    } catch (e) {
      throw new Error('There was an error creating your budget');
    }
  }

  //create a new expense
  if(_action == 'createExpense'){
    await wait()
    try{
      createExpense(values.newExpense, values.newExpenseAmount, values.newExpenseBudget)
      return toast.success(`Expense ${values.newExpense} created`)
    }catch(e){
      throw new Error('There was a problem adding your expense')
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
            {
              budgets && budgets.length > 0 ? 
              (
                <div className="grid-lg">
                  <div className="flex-lg">
                    <AddBudgetForm />
                    <AddExpensesForm budgets={budgets}/>
                  </div>
                </div>
              ): (
                <div className="gird-sm">
                  <p>Personal budgeting is the secret to financial freedom</p>
                  <p>Create a budget to get started</p>
                  <AddBudgetForm />
                </div>
              )
              
            }
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
