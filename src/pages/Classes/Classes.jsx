
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
 
 
const Classes = () => {
    // const {user} = useAuth()
   

    const [axiosSecure] = useAxiosSecure();

    const {data: classes = [], refetch} = useQuery(['classes'], async() => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })


    
    const handleApprove = (aclass) => {
        
        fetch(` https://next-photograph-server.vercel.app/classes/approve/${aclass._id}`, {
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
      };
      const handleDeny = (aclass) => {
        fetch(` https://next-photograph-server.vercel.app/classes/deny/${aclass._id}`, {
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
      };

    // const [classes, setClasses ] = useState([])
    // useEffect(()=> {
    //     fetch(` https://next-photograph-server.vercel.app/classes`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setClasses(data)
    //         console.log(data);
    //     })
    // }, [user])


    return (
        <div className="w-full">
           <SectionTitle heading="Classes"></SectionTitle>

        {/* table start */}

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Email</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
       
        {
            classes.map(aclass =>  <tr key={aclass._id}>
         
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={aclass.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                  {aclass.category}
                </td>
                <td>{aclass.name}</td>
                <td>{aclass.email}</td>
                <td>{aclass.students}</td>
                <td>${aclass.price}</td>
                <td>
                {
                    aclass.role === 'approve' ? 'approved' :  aclass.role === 'deny' ? 'denied' : 'pending'
                } 
                </td>
                <td>
                    <div className="btn-group btn-group-vertical">
                        <button   onClick={()=> handleApprove(aclass)}   className="btn btn-sm mb-1 btn-success">
                         approve
                        </button>
                        <button  onClick={()=>handleDeny(aclass)}  className="btn btn-sm mb-1 btn-secondary">
                        deny
                        </button>
                        <button className="btn btn-sm btn-primary">Feedback</button>
                    </div>
                </td>
              </tr> )
        }

     
      
    </tbody>
    
    
  </table>
</div>

        {/* table end */}

        </div>
    );
};

export default Classes;