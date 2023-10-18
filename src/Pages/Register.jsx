import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [registerError,setRegisterError]=useState('')
    const [hiddenPass,setHiddenPass]=useState()

    const handleRegister =e=>{
        e.preventDefault();
        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value;

        console.log(name,email,password,photo)

       
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
        

       

    }
    return (
        <div>
            <h4 className="text-center text-2xl capitalize py-7">Register Now</h4>

            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleRegister}>
                    <input className="border p-2 w-full capitalize mb-2" type="text" name="name" placeholder="name" /> <br />
                    <input  className="border p-2 w-full capitalize mb-2" type="email" name="email" placeholder="email" /> <br />
                    <input className="border p-2 w-full capitalize mb-2" 
                    
                    type={  "password"} name="password" placeholder="password" /> <br />


                    <input className="border p-2 w-full capitalize mb-2" type="text" name="photo" placeholder="photo URL" /> <br />
                    <input className="border p-2 w-full uppercase mb-2 hover:bg-pink-600" type="submit" name="regiter" />
                </form>


                <p className="text-center text-lg capitalize py-5"> already have a account please <Link to='/login'className="btn btn-group text-lg">LOGIN</Link ></p>
            </div>
            
        </div>
    );
};

export default Register;