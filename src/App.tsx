import { useState } from "react";
import "./App.css";
import { DisplayInformation } from "./DisplayInformation";
import { UserForm } from "./UserForm";

type TUserInformation = {
  message: string;
};
function App() {
  const [message, setMessage] = useState<null | TUserInformation>(null);
  return (
    <>
      <DisplayInformation message={message?.message || "def"} />
      <UserForm
        handleMessage={(messageInput) => {
          setMessage(messageInput);
        }}
      />
    </>
  );
}

export default App;
