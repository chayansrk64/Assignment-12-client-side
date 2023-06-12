import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

 
const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

   

    const handleMakeAdmin = (user) => {
        fetch(` https://next-photograph-server.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch()
               
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Updated as Admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    const handleMakeInstructor = (user) => {
        fetch(` https://next-photograph-server.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch()
               
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Updated as Instructor',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

       




    }

    return (
    <div className="w-full">
            <SectionTitle heading="All USERS"></SectionTitle>

 <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>  
    <tbody>
      {
        users.map((user, index) =>   <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td> 
                {
                    user.role === 'admin' ? 'admin' :  user.role === 'instructor' ? 'instructor' : 'student'
                } 
            </td>
            <td> <button onClick={() => handleMakeAdmin(user)}  className="btn-sm btn-success">Admin</button> 
             <button onClick={() => handleMakeInstructor (user)}  className="btn-sm btn-primary"> Instructor</button> </td>
          </tr> )
      }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;