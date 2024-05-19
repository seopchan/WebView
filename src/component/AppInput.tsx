import "./AppInput.css"
export const AppInput = (props: {
  value: string,
  onChange: (value: string) => void,
  onPressEnter?: () => void
}) => {
  return (
    <input
      type="text"
      className="App-input"
      onChange={(e) => { props.onChange(e.target.value) }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && props.onPressEnter) {
          props.onPressEnter();
        }
      }}
      value={props.value}
    />
  );
};
