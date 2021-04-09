import { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGIN',
      payload: {
        email,
        password
      }
    })
  };

  useEffect(() => {
    if(auth){
      history.push('/dashboard')
    }
  },[auth, history])


  console.log(email)
  return (
    <Fragment>
      <div className="container-fluid p-5 bg-secondary text-center">
        <h1>Login Page</h1>
      </div>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input 
                type="password" 
                name="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default Login;
