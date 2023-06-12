import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";


const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);

          updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {name: data.name, email: data.email, photo: data.photoURL}
            fetch(' https://next-photograph-server.vercel.app/users', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'User Updated Successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                reset();
                navigate("/")
              }
            })

         
          })
          .catch(error => console.log(error))

        })

    };

    return (
        <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })}  placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email field is required</span>}
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { 
             required: true,
             minLength:6,
             maxLength: 20, 
             pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}/
           })} placeholder="password"  className="input input-bordered" />
            {errors.password && <span className="text-red-600">Password at least 6 and not more than 20 characters</span>}
           {errors.password && <span className="text-red-600">Password should uppercase, lowercase and special characters</span>}
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" {...register("confirm", { required: true, 
         validate: (value) =>
         value === watch('password') || 'Passwords do not match',
        })}    placeholder="confirm password" className="input input-bordered" />
           {errors.confirm && <p className="text-red-600">{errors.confirm.message}</p>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" {...register("photoURL",  { required: true })}  placeholder="Photo URL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
        </div>



        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Sign UP" />
        </div>
      </form>
    <p className='px-3'><small>Already have Account? <Link to='/login' className='text-warning'>Login</Link> </small></p>
    <div className="text-center mb-4">
        <SocialLogin></SocialLogin>
      </div>
    </div>

  </div>
</div>
    );
};

export default SignUp;

