import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEnrolls = () => {

    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const {  refetch,  data: enrolls = [] } = useQuery({
        queryKey: ['enrolls', user?.email],
        enabled: !loading,
        // queryFn:  async () => {
        //     const response = await fetch(` https://next-photograph-server.vercel.app/enrolls?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },

        queryFn:  async () => {
            const response = await axiosSecure(`/enrolls?email=${user?.email}`)
            console.log("response from axios",response);
            return response.data;
        },

        
      })
      return [enrolls, refetch]
    
}

export default useEnrolls;