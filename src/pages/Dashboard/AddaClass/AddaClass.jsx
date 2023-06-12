 
 
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
 
 
 
const AddaClass = () => {


   
    const handleAddClass = event => {

        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = parseFloat(form.price.value);
        const students = parseFloat(form.students.value);
        const image = form.image.value;
        const  classData = {name, email, price, students,  category, image}  
        console.log(classData);

        
      
        fetch(' https://next-photograph-server.vercel.app/classes', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Added class Successfully',
                    text: 'Done!'
                    
                  })
            }
        })
     


        
    };
     
    return (
        <div className="w-full">
            <SectionTitle heading="Add A Class"></SectionTitle>


 {/* form start */}

<form  onSubmit={handleAddClass}   className="px-5">

<div className="flex  gap-6 my-5 ">
<div className="form-control w-full ">
<label className="label">
    <span className="label-text">Class Name*</span>
</label>
<input type="text" name="category"  placeholder="Class Name" className=" input input-bordered " />
 
</div>
<div className="form-control w-full ">
<label className="label">
    <span className="label-text">Instructor Name*</span>
</label>
<input type="text"  name="name"  placeholder="instructor Name" className=" input input-bordered " />
 
</div>
</div>

<div className="flex gap-6 my-5">
<div className="form-control w-full  ">
<label className="label">
    <span className="label-text">Email*</span>
</label>
<input type="email"  name="email"  placeholder="email" className=" input input-bordered " />
 
</div>

<div className="form-control w-full ">
<label className="label">
    <span className="label-text">Price*</span>
</label>
<input type="number"   name="price"  placeholder="Price" className="input input-bordered " />
 
</div>
</div>


<div className="flex gap-6 my-5">
<div className="form-control w-full">
<label className="label">
    <span className="label-text">Seats*</span>
</label>
<input type="number"  name="students" placeholder="seats" className="input input-bordered " />
 
</div>
<div className="form-control w-full">
<label className="label">
    <span className="label-text">Item Image*</span>
</label>
<input type="text"  name="image"  placeholder="image URL" className="file-input file-input-bordered w-full " />
 
</div>
</div>


<input className="btn btn-warning mt-4" type="submit" value="Add A Class" />
</form>


        {/* form end */}




        </div>
    );
};

export default AddaClass;