import firebase from "../lib/firebase";
import Login from "./Login";
import Sign_up from "./Sign_up";
import wellcome from "./wellcome";
import Form_login from "./form_login";
import styled from 'styled-components'
const Photo = styled.div`
  body{
      margin:0px;
  }
  img{
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  }
  .box{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  }
  .ph{
      display:flex;
      justify-content:center;
      margin:0px;
      background-color: #ECF0F1;
      background-size: 300px 100px, cover;
  }

`;

const Index = () => {
    return (

        <Photo>
            <div className="ph">
                <img src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/01/DSC_8815-squoosh.jpg" />
            </div>
            <div className="box">
                <Form_login />
            </div>
        </Photo>


    )
}
export default Index;