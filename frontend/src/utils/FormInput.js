import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label style={{ display: "flex" }}>{label}</label>
      {inputProps.type == "select" ? (
        <select onChange={onChange} onBlur={handleFocus} style={{ padding: "10px", margin: "0 0 5px 0", borderRadius: "5px", border: "1px solid gray" }}>
          <option value="1"></option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      ) : (
        // <input onChange={onChange} onBlur={handleFocus} />
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} focused={focused.toString()} />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
