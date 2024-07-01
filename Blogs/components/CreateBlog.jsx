// import { useContext } from "react";
import { Context } from "../Context/GlobalData";
import CommonForm from "./CommonForm";
const CreateBlog = ({ navigation }) => {
//   const { AddBlog } = useContext(Context);
 return(
   <CommonForm navigation={navigation}/>
 )

  
};



export default CreateBlog;
