import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../../providers/AuthProvider";
 
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useEnrolls from "../../../hooks/useEnrolls";
import { Slide } from "react-awesome-reveal";
 
const PopularClasses = () => {

    const {user} = useContext(AuthContext);
    const [, refetch] = useEnrolls();
    const navigate = useNavigate()
    const location = useLocation();

    const [popular, setPopular] = useState([]);
    useEffect(()=> {
        fetch(' https://next-photograph-server.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            setPopular(data)
        })
    }, [])


    const handleEnroll = (item) => {
        console.log('clicked enrolled', item);
        if(user && user.email){
            const classEnroll = {enrollId: item._id, img: item.img, price: item.price, email: user.email, category: item.category, 
                students: item.student_numbers

            }
            fetch(' https://next-photograph-server.vercel.app/enrolls', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classEnroll)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();  
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Added to Enroll',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please log in to enroll',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                
                navigate('/login', {state: {from: location}})
                }
              })
        }

        
         
    }

    return (
        <div>
            <SectionTitle heading="Popular Classess"></SectionTitle>
            <Slide>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    popular.map(item => <div key={item._id} className="card   bg-base-100 shadow-xl">
  <div>
  <figure><img   src={item.image} alt="Shoes" /></figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">{item.category}</h2>
    <p>Students: {item.students}</p>
    <p>Price: ${item.price}</p>
    {/* <p>Role: { 
         item.role === 'approve' ? 'approved' :  item.role === 'deny' ? 'denied' : 'pending'
    }
    </p> */}
    <div className="card-actions justify-end">
      <button onClick={()=> handleEnroll(item)} className="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div> )
                }
            </div>
            </Slide>


        </div>
    );
};

export default PopularClasses;