import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
 
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch(' https://next-photograph-server.vercel.app/users', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
              navigate(from, {replace: true});
            })



            // Swal.fire({
            //     position: 'top-center',
            //     icon: 'success',
            //     title: 'Login Successfull',
            //     showConfirmButton: false,
            //     timer: 1500
            //   })
            // navigate(from, {replace: true});

        })

    }

    return (
        <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;