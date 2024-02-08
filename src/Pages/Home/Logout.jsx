import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (
        <div>
            <div className='max-w-screen-sm m-auto '>
                <div className='text-center'>
                    <h1 className='text-5xl text-zinc-800 '>Sign in to Figma</h1>
                    <button onClick={"handleGoogleLogIn"} className='px-8 py-2 w-[420px] rounded-lg border border-zinc-800 my-4'>Continue With Google</button>
                    <p>or</p>
                    <form className='flex flex-col w-[420px] m-auto'>

                        <input placeholder='Email' className='px-8 py-2 rounded-lg border border-zinc-800 my-4' type="email" name='email' />
                        <input placeholder='Password' className='px-8 py-2 rounded-lg border border-zinc-800 my-4' type="password" name='password' />
                        <div className='flex justify-center gap-2'><input type="checkbox" /><span> I agree to join Figma's mailling List</span></div>
                        <button className='px-8 py-2 w-[420px] rounded-lg border border-zinc-800 my-4 bg-zinc-800 text-slate-200 font-bold'>Create Account</button>
                    </form>
                    <div>
                        <p className='text-sm px-24'>By clicking "Create account" or "Continue with Google", you agree to the Figma TOS and Privacy Policy.
                        </p>
                        <p className='text-blue-800 font-semibold'><Link>Use single sign-on
                        </Link></p>
                        <span>Already have an account? ?</span> <Link className='text-blue-800 font-semibold'>log in</Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Logout;