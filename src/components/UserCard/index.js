import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  const handleClick = () => {
    setName(currentInput);
    dispatch(changeName(name));
  };

  return (
    <div>
      <h1>{`User name: ${name}`}</h1>
      <input
        type="text"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
      />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;
