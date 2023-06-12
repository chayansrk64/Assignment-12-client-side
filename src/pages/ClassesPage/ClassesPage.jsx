import { useEffect, useState } from "react";
 
 
const ClassesPage = () => {
   
    const [approvedClasses, setApprovedClasses] = useState([]);

    useEffect(() => {
        fetch(' https://next-photograph-server.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            const approvedClasses = data.filter(approved => approved.role  === 'approve')
            setApprovedClasses(approvedClasses)
            console.log('approved Classes', approvedClasses);
        })
    }, [])

   
    return (
        <div>
            <p>.</p>
            <div className="grid md:grid-cols-3 gap-3 bg-slate-300 py-10 my-20">
                {
                    approvedClasses.map(item => <div key={item._id} className="card w-96 glass">
                    <figure><img src={item.image} alt="car!"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.category}</h2>
                      <p>{item.name}</p>
                      <p>Available Seats: {item.students}</p>
                      <p>Price: ${item.price}</p>
                      <div className="card-actions justify-end">
                        
                        <button  className="btn btn-primary">Enroll now!</button>
                      </div>
                    </div>
                  </div> )
                }
            </div>
        </div>
    );
};

export default ClassesPage;