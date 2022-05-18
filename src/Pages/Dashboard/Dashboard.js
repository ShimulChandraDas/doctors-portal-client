import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';



const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile pt-24">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl font-bold text-secondary text-center'> Welcome your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}


                    <li><Link to='/dashboard'>MY Appointment</Link ></li>
                    <li><Link to='/dashboard/review'>My Review</Link ></li>
                    <li><Link to='/dashboard/history'>My History</Link ></li>
                    {admin &&
                        <>
                            <li><Link to='/dashboard/users'>All Users</Link ></li>
                            <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link ></li>
                            <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link ></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;