const Card = (props) => (
  <div style={props.style} className="card">
    {props.children}
  </div>
);
export default Card;
