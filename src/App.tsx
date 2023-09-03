import "./App.css";
import "./UserCard/userCard.css";
// import { Example } from "./components/Example/Example";
import { UsersFromServer } from "../src/users/UsersFromServer";

function App() {
  return (
    <>
      {/* <Example /> */}
      <UsersFromServer />
    </>
  );
}

export default App;
