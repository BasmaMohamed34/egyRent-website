import "./Aside.css"
import { FaStar } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";


const Aside = () => {


  return (

      <div className="aside">
        <h1 className="aside">
    <FaPhoneAlt className="fa1"/> tele No : +021
    </h1>
    <h1 className="aside">
    <FaMailBulk className="fa1"/>E-mail : profile@gmail.com
   </h1>  
   <h1 className="aside">
   <FaInfoCircle className="fa1"/>info : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
    </h1>
    <h1 className="aside">
    <FaStar className="fa"/> Rate : 4.3
    </h1>
      </div>

    
  );
}

export default Aside;
