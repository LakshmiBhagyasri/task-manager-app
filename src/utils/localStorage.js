export const getTasks = () => {
  const tasks = localStorage.getItem("tasks")

  return tasks ? JSON.parse(tasks) : null
}

export const saveTasks = tasks => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}