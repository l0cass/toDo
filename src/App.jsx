import ScreenToDo from './screens/ScreenToDo'
import ScreenLoginForm from './screens/ScreenLoginForm'

const isLoggedIn = false

export default function App() {
  return <div>{isLoggedIn ? <ScreenToDo /> : <ScreenLoginForm />}</div>
}
