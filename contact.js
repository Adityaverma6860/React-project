import React from "react";

export default function Contact(props) {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const onInput = (e) => {
    setValue(e.target.value);
  };
  const onAdd = () => {
    setData([...data, value]);
    console.log(data);
  };

  return (
    <>
      <div>
        <h1>Value Store {props.user}</h1>
      </div>
      <input
        placeholder="Please enter a value"
        value={value}
        onChange={onInput}
      />
      <button onClick={onAdd}>Add Value</button>
      {data.map((data, i) => (
        <h1>
          {i + 1} {data}
        </h1>
      ))}
    </>
  );
}
