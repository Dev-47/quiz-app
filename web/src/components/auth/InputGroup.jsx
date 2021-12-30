import { useState } from "react";

export default function InputGroup(props) {
  // props
  const { type, contenttitle, onChange } = props;

  // placeholder for the input
  const placeHolder = ` ${contenttitle}`;

  // state to toggle the input type
  const [show, setShow] = useState(false);

  // show/hide function for the password input
  const handleClick = () => {
    setShow(!show);
  };

  // if the input type is password, show the below
  if (type === "password") {
    return (
      <div {...props} className="relative p-0 border-none">
          <input
            type={show ? "text" : type}
            className="form-control"
            id={contenttitle}
            placeholder={placeHolder}
            autoComplete="off"
            onChange={onChange}
          />
          <button
            type="button"
            className="absolute right-0 top-4 toggle-btn"
            id="toggle"
            onClick={handleClick}
          >
            {show ? "hide" : "show"}
          </button>
      </div>
    );
  }

  // if the input type is not password, show the below
  return (
    <div {...props} className=" p-0 border-none">
      <input
        type={type}
        className="form-control"
        id={contenttitle}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}
