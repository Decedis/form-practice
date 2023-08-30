import { useState } from "react";
type TUserInformation = {
  message: string;
};
export const UserForm = ({
  handleMessage,
}: {
  handleMessage: (info: TUserInformation) => void;
}) => {
  const [value, setValue] = useState("initial");
  //const [message] = props.message;
  return (
    <>
      <form
        onSubmit={(item) => {
          item.preventDefault();
          handleMessage({ message: value });
        }}
      >
        <label> Message: </label>
        <input
          type="text"
          id="userInput"
          value={value}
          onChange={(item) => {
            setValue(item.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </>
  );
};
