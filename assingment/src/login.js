import Input from './input';
import Button from './button';


function Login(){
    return(
        <div>
        <Input placeholder="Email"/>
        <Input placeholder="Password"/>
        <Button btnValue="Submit" />
        </div>
    )
}
export default Login;