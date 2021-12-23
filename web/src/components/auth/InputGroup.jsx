import { useState } from "react";


export default function InputGroup(props) {
  // props
  const { type, contenttitle } = props;

  // placeholder for the input
  const placeHolder = `Enter your ${contenttitle}`;

  // state to toggle the input type
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  if (type === "password") {
    return (
      <div {...props} className="input-group">
        <label htmlFor={contenttitle} className="input-label">
          {contenttitle}
        </label>
        <div className="relative">
          <input
            type={show ? "text" : type}
            className="form-control"
            id={contenttitle}
            placeholder={placeHolder}
            autoComplete="off"
          />
          <button
            type="button"
            className="absolute right-0 toggle-btn"
            id="toggle"
            onClick={handleClick}
          >
            {show ? "hide" : "show"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div {...props} className="input-group">
      <label htmlFor={contenttitle} className="input-label">
        {contenttitle}
      </label>
      <input
        type={type}
        className="form-control"
        id={contenttitle}
        placeholder={placeHolder}
      />
    </div>
  );
}