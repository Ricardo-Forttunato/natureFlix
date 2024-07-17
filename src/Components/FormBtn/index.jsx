/* eslint-disable react/prop-types */
export default function FormBtn(props) {
  return (
    <input
      type={props.inputType}
      id={`form_${props.name}`}
      name={props.name}
      value={props.value}
    />
  );
}
  