import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [registerError,setRegisterError]=useState('')
    const [sucess,setsucsses]=useState()
    const [showPassword,setShowPassword]=useState()

    const handleRegister =e=>{
        e.preventDefault();
        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value;

        console.log(name,email,password,photo)
        setRegisterError('')
         
        if(password.length < 6){
            setRegisterError('Password Should Be At Least 6 Characters')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least one uppercase and special character')
            return
        }

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setsucsses(
                Swal.fire(
                    'Good Job',
                    'You are successfully registration done',
                    'success'
                  )
            )
        })
        .catch(error=>{
            console.error(error)
            setRegisterError(error.message)
        })
        

    }
    return (
        <div>
            <h4 className="text-center text-2xl capitalize py-7">Register Now</h4>

            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleRegister}>
                    <input className="border p-2 w-full capitalize mb-2" type="text" name="name" placeholder="name" /> <br />
                    <input  className="border p-2 w-full capitalize mb-2" type="email" name="email" placeholder="email" /> <br />

                    
                    <div className="relative">

                    <input className="border p-2 w-full capitalize mb-2" 
                    
                    type={ showPassword ? "text" :"password"} name="password" placeholder="password" /> <br/>

                    <p className="absolute top-3 -right-1 px-2" onClick={()=>setShowPassword(!showPassword)}> {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>} </p>

                    </div>

                    


                    <input className="border p-2 w-full capitalize mb-2" type="text" name="photo" placeholder="photo URL" /> <br />
                    <input className="border p-2 w-full uppercase mb-2 hover:bg-pink-600" type="submit" name="regiter" />
                </form>

                 {
                    registerError && <p className="text-red-600 text-center capitalize ">{registerError}</p>
                 }
                <p className="text-center text-lg capitalize py-5"> already have a account please <Link to='/login'className="btn btn-group text-lg">LOGIN</Link ></p>
            </div>
            
        </div>
    );
};

export default Register;