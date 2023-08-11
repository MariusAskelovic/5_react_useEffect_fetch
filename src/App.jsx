import PostsList from "./components/PostsList";
import './App.css'
import UsersList from "./components/users/UsersList";

export default function App() {
  return (
    <div className="container">
      <h1>Fetch</h1>
      {true && <PostsList />}
      {false && <UsersList />}
    </div>
  )
}