import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaWallet, FaHome } from 'react-icons/fa';
import useEnrolls from "../hooks/useEnrolls";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructors";
 
const Dashboard = () => {

    const [enrolls] = useEnrolls();

    // TODO: load data from server for admin instructor and students
    

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
   

    return (
        <div className="drawer lg:drawer-open">
             
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
             <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#aab9bf]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full  text-base-content">
            {/* Sidebar content here */}
             

            {
                isAdmin &&

                 <> {/*admin*/} 
                  <li> <NavLink to="/dashboard/adminhome"> <FaHome></FaHome> Admin Home</NavLink> </li>
                    <li> <NavLink to="/dashboard/classes"> <FaBook></FaBook> Manage Classes {/*show classes selected by instructor*/}  </NavLink>
                    
                    </li>
                    <li> <NavLink to="/dashboard/allusers"> <FaWallet></FaWallet> Manage Users {/*admin can select users as instructor*/} </NavLink> </li>  
                 </> 
                 
                 || isInstructor &&
                 
                 <> {/*insturctor*/} 
                     <li> <NavLink to="/dashboard/instructorhome"> <FaHome></FaHome> Instructor Home</NavLink> </li>
                    <li> <NavLink to="/dashboard/addclass"> <FaBook></FaBook> Add a Class {/*show classes selected by instructor*/}  </NavLink>
                    
                    </li>
                    <li> <NavLink to="/dashboard/myclasses"> <FaWallet></FaWallet> My Classes {/*admin can select users as instructor*/} </NavLink> </li>  
                 </> 
                 
                ||
                 
                 <> {/*student*/} 
                 <li> <NavLink to="/dashboard/studenthome"> <FaHome></FaHome> Student Home</NavLink> </li>
                 <li> <NavLink to="/dashboard/enrolls"> <FaBook></FaBook> My Enrolls  <span className="badge badge-secondary">+{enrolls?.length || 0}</span> </NavLink>
                 
                  </li>
                 <li> <NavLink to="/dashboard/classes"> <FaWallet></FaWallet> Enrolled Classes </NavLink> </li> 
                  </>
            }


           
            <div className="divider">OR</div>
            <li> <NavLink to="/"> <FaHome></FaHome> Home</NavLink> </li>
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;