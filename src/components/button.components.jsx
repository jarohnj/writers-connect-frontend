import { Link } from "react-router-dom";

const LinkedButton = (props) => (
    <button className={props.color} type="submit"><Link to={props.path}>{props.title}</Link></button>
);

   
export default LinkedButton;