import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-center text-primary text-2xl font-bold mt-5'>Sign Up</h1>
                <div className="card-body w-96 mx-auto ">
                    <form>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <input type="submit" value='Sign UP' className=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
                        </div>
                    </form>
                    <div className="form-control">
                        <label className="label">
                            <p className='text-lg'>Already have an account?
                                <Link to='/login' className="btn btn-link capitalize decoration-solid font-bold">Login</Link></p>
                        </label>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <button className="btn btn-outline btn-error grid h-16  rounded-box place-items-center">Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;