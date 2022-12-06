import { Link } from "react-router-dom";
import Navbar from "./comp/navbar";
function TempLink() {
    return (
        <>
             <Navbar />
            <Link to='/Vehicle'>Vehicle assignment</Link><br />
            <Link to='/Troller'>Troller assignment</Link>
        </>
    )
}

export default TempLink