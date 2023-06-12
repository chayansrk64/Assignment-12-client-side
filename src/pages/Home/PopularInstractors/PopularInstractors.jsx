 
import { useState, useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaBookmark } from 'react-icons/fa';
import { Slide } from "react-awesome-reveal";

const PopularInstractors = () => {
  
    const [instractors, setInstractors] = useState([])
    

    useEffect(() => {
        fetch(' https://next-photograph-server.vercel.app/users')
        .then(res => res.json())
        .then(data => {
            const instructors = data.filter(user => user.role === 'instructor')
            setInstractors(instructors)
            console.log('all user data', instructors);
        })
    }, [])




    return (
      <div>
          
            <SectionTitle heading="Popular Instractors"></SectionTitle>
           <Slide direction='right'>
           <div className='grid md:grid-cols-3 gap-3'>
            {
                instractors.map(instractor =>  <div key={instractor._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={instractor.photo}  alt="Photo" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{instractor.name}</h2>
                  <p>{instractor.email}</p>
                  <p>{instractor.role}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary"> <FaBookmark></FaBookmark> </button>
                  </div>
                </div>
              </div>)
            }
           </div>
           </Slide>
        </div>
    );
};

export default PopularInstractors;