import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-3xl font-bold  text-green-600'>Welcome to your Dashboard</h1>

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='myorders'>My Orders</Link></li>
                        {/* <li><a>Sidebar Item 2</a></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;