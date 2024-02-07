import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='max-w-screen-sm m-auto '>
            <div className='text-center'>
                <h1 className='text-5xl text-zinc-800 '>Sign in to Figma</h1>
                <button className='px-16 py-4 w-[420px] rounded-lg border border-zinc-800 my-4'>Continue With Google</button>
                <p>or</p>

                <form className='flex flex-col w-[420px] m-auto'>
           
                    <input placeholder='Email' className='px-16 py-4 rounded-lg border border-zinc-800 my-4'  type="email" name='email' /> 
                    <input  placeholder='Password' className='px-16 py-4 rounded-lg border border-zinc-800 my-4'  type="password" name='password' />
                    <button className='px-16 py-4 w-[420px] rounded-lg border border-zinc-800 my-4 bg-zinc-800 text-slate-200 font-bold'>Log in</button>
                </form>
                <div>
                    <Link>Use single sign-on</Link>
                    <Link>Reset password</Link>
                    <p> No account ?</p> <Link>Create one</Link>
                </div>


            </div>
        </div>
    )
};

export default Login;