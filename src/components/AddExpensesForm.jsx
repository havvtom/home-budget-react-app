import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react"
import { useFetcher } from "react-router-dom"

export default function AddExpensesForm({budgets}){

  const fetcher = useFetcher()
  const formRef = useRef()
  const focusRef = useRef()

  const isSubmitting = fetcher.state == 'isSubmitting'

  useEffect(()=>{
    if(!isSubmitting){
      //clear form
      formRef.current.reset()

      //reset focus
      focusRef.current.focus
    }
  }, [isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add new{" "}
        <span className="accent">
          {budgets.length == 1 && `${budgets.map( (budget) => budget.name )}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form 
        method="post" 
        className="grid-sm"
        ref={formRef}
      >
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">
              Expense Name
            </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              ref={focusRef}
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">
              Amount
            </label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g., 3.50"
              required
            />
          </div>
        </div>
        <div className="gri-xs" hidden={budgets.length == 1}>
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select 
            name="newExpenseBudget"
            id="newExpenseBudget"
            required
          >
            {
              budgets.sort((a, b) => a.createdAt - b.createdAt ).map((budget) => {
                return (
                  <option value={budget.id} key={budget.id}>
                    {budget.name}
                  </option>
                )
              })
            }
          </select>
        </div>
        <input hidden name="_action" value="createExpense"/>
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          <span>{isSubmitting ? 'Submitting...' : 'Add expense'}</span>
          <PlusCircleIcon width={20}/>
        </button>
      </fetcher.Form>
    </div>
  )
}