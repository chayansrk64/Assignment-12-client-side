import { FaFacebook, FaTwitter,FaInstagram,FaGoogle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
     <h2> <Link to="/" className='text-2xl'>Next Photograph</Link> <br/>Providing reliable tech since 1992</h2>
     <div className='flex gap-3 text-2xl mt-5'>
        <a href="http://www.facebook.com"> <FaFacebook/></a>
        <a href="http://www.twitter.com">  <FaTwitter/></a>
        <a href="http://www.instagram.com">  <FaInstagram/></a>
        <a href="http://www.google.com"><FaGoogle/></a>
                   
     </div>
    <address className='mt-5'>
     <a href="mailto:next@gmail.com" className='text-yellow-600'> Mail To: next photograph</a>
     <p>Kishoregonj 32, Bangladesh</p>
    </address>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Classes</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Session</a> 
 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
   
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
<div className="pb-5 bg-base-200 text-base-content text-center"> <small>Copyright&copy; 2023 All Right Reserved</small> </div>
        </div>
    );
};

export default Footer;