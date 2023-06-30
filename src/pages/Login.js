import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

import { useState } from "react";
import Base from "../components/Base";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate= useNavigate()
  const [loginDetails, SetLoginDetails] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let data = event.target.value;
    SetLoginDetails({
      ...loginDetails,
      [field]: data,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(loginDetails.userName.trim()===''&&loginDetails.password.trim()===''){
        toast.error("userName And Password is Required!")
        return;
    }
    //Submit Data to Backend Server
    loginUser(loginDetails).then((data)=>{
        console.log(data)
        //Save the data in localStorage
        doLogin(data,()=>{
          console.log("logIn Details to save LocalStorage")
          navigate("/user/dashboard")
        })
    }).catch(error=>{
        console.log(error)
        if(error.response.status==400||error.response.status==404 ){
        toast.error(error.response.data.message)
        }else{
        toast.error("SomeThing Went Wrong!!")
    }
    })
  };
  const handleReset = (event) => {
    SetLoginDetails({
        userName:'',
        password:''
    })
  };  

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                <h3 className="text-center">LogIn Here</h3>
                <CardBody>
                  <Form onSubmit={handleFormSubmit}>
                    {/*Emai*/}
                    <FormGroup>
                      <Label for="email">Enter Email</Label>
                      <Input
                        type="text"
                        id="email"
                        value={loginDetails.userName}
                        onChange={(e) => handleChange(e, "userName")}
                      />
                    </FormGroup>

                    {/*Password*/}
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        onChange={(e) => handleChange(e, "password")}
                        value={loginDetails.password}
                        id="password"
                        placeholder="Enter Your Password"
                      />
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="success">LogIn</Button>
                      <Button onClick={handleReset} color="dark" className="ms-2">
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Login;
