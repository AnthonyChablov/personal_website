import { Link } from "react-router-dom";

const CustomLink = ({linkTo, content, addClassName}) => {
    return (
        <li><Link to={linkTo} className={addClassName}>{content}</Link></li>
    )
}

export default CustomLink