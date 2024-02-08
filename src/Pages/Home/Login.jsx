
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../config/config';

const Login = () => {
    
    const [user, setUser ] =  useState(null)
    const googleProider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProider)
            .then(res => {
                const entryUser = res.user;
                console.log(entryUser);
                setUser(entryUser)
            })
            .catch(error => console.log(error.message))
    }

    // signout 

   const handleSignOut = ()=>{
     signOut(auth)
     .then(res => {
        setUser(null)
        console.log(res);
     })

   }
   

    return (
        <div className='max-w-screen-sm m-auto '>
            <div className='text-center'>
                <h1 className='text-5xl text-zinc-800 '>Sign in to Figma</h1>
                <button onClick={handleGoogleLogIn} className='px-8 py-2 w-[420px] rounded-lg border border-zinc-800 my-4'>Continue With Google</button>
                <p>or</p>
                <form className='flex flex-col w-[420px] m-auto'>

                    <input placeholder='Email' className='px-8 py-2 rounded-lg border border-zinc-800 my-4' type="email" name='email' />
                    <input placeholder='Password' className='px-8 py-2 rounded-lg border border-zinc-800 my-4' type="password" name='password' />
                    <button className='px-8 py-2 w-[420px] rounded-lg border border-zinc-800 my-4 bg-zinc-800 text-slate-200 font-bold'>Log in</button>
                </form>
                <div>
                    <p className='text-blue-800 font-semibold'><Link>Use single sign-on</Link></p>
                    <p className='text-blue-800 font-semibold'><Link>Reset password</Link></p>
                    <span> No account ?</span> <Link to="/logout" className='text-blue-800 font-semibold'>Create one</Link>
                    <p onClick={handleSignOut}><Link>Logout</Link></p>
                </div>


            </div>
        </div>
    )
};

export default Login;