const Button = (props) => {
  let btnClass = "btn";
  if (props.isAdd) btnClass += " btn--green";
  if (props.isMinus) btnClass += " btn--red";
  if (props.isWidth) btnClass += " btn--full";
  if (props.isBorderBlack) btnClass += " btn--borderBlack";
  return (
    <button className={btnClass} onClick={props.onclick}>
      {props.text}
    </button>
  );
};
export default Button;
