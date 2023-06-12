import Swal from "sweetalert2";
import useEnrolls from "../../../hooks/useEnrolls";
import { FaTrash } from 'react-icons/fa';
 
const Enrolls = () => {
    const [enrolls, refetch] = useEnrolls()
    console.log(enrolls);
    const total = enrolls.reduce((sum, item) => item.price + sum, 0)

  const handlePayment = item => {
    console.log(item);
  }

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://next-photograph-server.vercel.app/enrolls/${item._id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
           
            }
          })
    }

    return (
        <div className="w-full h-full">
            <div className="uppercase flex font-semibold mb-3 justify-evenly mt-5 ">
                <h2 className="text-2xl">Total Enrolls: {enrolls.length} </h2>
                <h2 className="text-2xl">Total Price: {total} </h2>
                {/* <button className="btn btn-warning btn-sm">PAY</button> */}
            </div>

        {/* table start */}
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Class</th>
        <th>Price</th>
        <th>Pay</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>     
      {
        enrolls.map((item, index) =>  <tr key={item._id}>
            <td>
              <label>
                {index + 1}
              </label>
            </td>
            <td>
            
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                
                {/* <div>
                  <div className="font-bold">Hart Hagerty</div>
                 
                </div> */}
              </div>
            </td>
            <td className="font-semibold">
              {item.category}
              <br/>
              
            </td>
            <td>${item.price}</td>
            <td> <button onClick={()=> handlePayment(item)} className="btn btn-warning btn-sm">PAY</button> </td>
            <td>
            <button onClick={()=> handleDelete(item)}  className="btn btn-ghost text-white hover:text-red-500 bg-red-500"> <FaTrash></FaTrash>   </button>
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

export default Enrolls;