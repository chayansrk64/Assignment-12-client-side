import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

 
 
 
const MyClasses = () => {
    const {user} = useAuth()
    const [myClasses, setMyClasses] = useState([]);
    useEffect(() => {
        fetch(` https://next-photograph-server.vercel.app/classes?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            const userEmailData = data.filter(item => item.email === `${user.email}`)
            setMyClasses(userEmailData)
            console.log( 'my Classes ', userEmailData);
        })
    }, [user])
    return (
        <div className="w-full">
            <SectionTitle heading="My Classes"></SectionTitle>


        {/* table start */}

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Class Name</th>
        <th>Status</th>
        <th>Students Number</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {
        myClasses.map((myClass, index) =>  <tr key={myClass._id}>
            <th>{index + 1} </th>
            <td>{myClass.category}</td>
            <td>{myClass.role} </td>
            <td>{myClass.students} </td>
            <td> <button className="btn-sm btn-success">Update</button> </td>
          </tr> )
      }
      
      
    </tbody>
  </table>
</div>


        {/* table end */}


        </div>
    );
};

export default MyClasses;