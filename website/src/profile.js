import "./profile.css";
import image from "./Headshot.jpg";
import {
    AiFillGithub, 
    AiFillLinkedin,
    AiFillTwitterCircle,
    AiFillInstagram,
} from "react-icons/ai";

const Profile = () => {
    return <div className="section">
    <div className='bio'>
      
      <p className="no-margin name-text">
         <span className="highlight-text"> Anthony Thomas </span>
      </p> 
      <p className="no-margin small-text">Project Analyst Intern</p>
      <p className="no-margin small-text">
         computer science <span className='highlight-text'> and</span> data science student at the University of Wisconsin
        </p>
        <div className="icons"> 
        <a href='https://www.linkedin.com/in/anthonyjcthomas/' target="_blank">
            <AiFillLinkedin color="rgb(0, 140, 255)" size={30} />
            </a>
        <a href='https://github.com/anthonyjcthomas' target="_blank">
            <AiFillGithub color="rgb(0, 140, 255)" size={30} />
            </a> 
        </div>
     </div>
     <div className="photo"> 
        <img src= {image}  className="profile-image" alt="me" />
     </div>
  </div>
}

export default Profile;
