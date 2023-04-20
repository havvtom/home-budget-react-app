//Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets") ?.length ?? 0
  return `${existingBudgetLength * 34} 65% 50%`
}

//delete
export const deleteItem = ({key}) => {
  return localStorage.removeItem(key)
}

//create budget
export const createBudget = (
  name, amount
) => {
  console.log(name, amount)
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  }
console.log(newItem)
  const existingBudgets = fetchData("budgets") ?? []
  return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))

}