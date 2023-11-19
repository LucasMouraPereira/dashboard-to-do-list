'use client'

// Neste arquivo iria fazer as chamadas a api
import { createContext, useContext } from 'react'
// import { TodoistApi } from '@doist/todoist-api-typescript'

// import type { projectListProps } from 'src/utils/types/project'
import type { ChildrenProps } from 'src/utils/types/global.types'

const DashboardContext = createContext({})
export const useProjects = () => useContext(DashboardContext)

export const DashboardProvider = ({ children }: ChildrenProps) => {
  const time = 'Neste arquivo iria fazer as chamadas a api'
  console.log(time)
  // const [projectsList, setProjectList] = useState<projectListProps>([])

  // const api = new TodoistApi('5610b7a79071edea040ce9700b8a20aedc736c76')
  // // list project
  // api
  //   .getProjects()
  //   .then((projects) => setProjectList(projects))
  //   .catch((error) => console.error(error))

  // // get one project
  // api
  //   .getProject('2203306141')
  //   .then((project) => console.log(project))
  //   .catch((error) => console.log(error))

  // // update project
  // api
  //   .updateProject('2203306141', { name: 'Things To Buy' })
  //   .then((isSuccess) => console.log(isSuccess))
  //   .catch((error) => console.log(error))

  // // add project
  // api
  //   .addProject({ name: 'Shopping List' })
  //   .then((project) => console.log(project))
  //   .catch((error) => console.log(error))

  // // delete project
  // api
  //   .deleteProject('2203306141')
  //   .then((isSuccess) => console.log(isSuccess))
  //   .catch((error) => console.log(error))

  // // list task
  // api.getTasks()
  //   .then((tasks) => console.log(tasks))
  //   .catch((error) => console.log(error))

  // // add task
  // api
  //   .addTask({ content: 'Buy Milk', projectId: '2203306141' })
  //   .then((task) => console.log(task))
  //   .catch((error) => console.log(error))

  // // update task
  // api
  //   .updateTask('2995104339', { dueString: 'tomorrow' })
  //   .then((isSuccess) => console.log(isSuccess))
  //   .catch((error) => console.log(error))

  // // close task
  // api
  //   .closeTask('2995104339')
  //   .then((isSuccess) => console.log(isSuccess))
  //   .catch((error) => console.log(error))

  return (
    <DashboardContext.Provider
      value={{
        time,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
