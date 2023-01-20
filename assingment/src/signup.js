import Input from './input';
import Button from './button';


function SignUp() {
    return (
        <div>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button btnValue="Submit" />
        </div>
    )
}
export default SignUp;