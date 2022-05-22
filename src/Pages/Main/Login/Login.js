import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body w-96 mx-auto ">
                    <form>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <input type="submit" value='Login' class=" btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
                        </div>
                    </form>
                    <div class="form-control">
                        <label class="label">
                            <p className='text-lg'>Don't have an account?
                                <a href="#" class="btn btn-link capitalize decoration-solid font-bold">Register now</a></p>
                        </label>
                    </div>
                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="divider">OR</div>
                        <button class="btn btn-outline btn-error grid h-16  rounded-box place-items-center">Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;