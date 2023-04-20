import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

export default function AddBudgetForm(){
  const fetcher = useFetcher()
  const formRef = useRef()
  const focusRef = useRef()

  const isSubmitting = fetcher.state === "submitting"

  useEffect(() => {
    if(!isSubmitting){
      formRef.current.reset()
      focusRef.current.focus
    }
  }, [isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Create budget
      </h2>
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">
            Budget Name
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBUdgetAmount">Amount</label>
          <input 
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
          <input type="hidden" name="_action" value="createBudget" />
        </div>
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          <span>{isSubmitting ? 'Submitting...' : 'Create budget'}</span>
          <CurrencyDollarIcon width={20}/>
        </button>
      </fetcher.Form>
    </div>
  )
}