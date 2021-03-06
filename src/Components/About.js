import React from 'react';

const About = ({data}) => {
   if (!data) {
      return(
         <section id="about"></section>
      )
   }

   var profilepic= "images/"+data.image;
   var bio = data.bio;
   var city = data.address.city;
   var state = data.address.state;
   var email = data.email;
   var resumeDownload = data.resumedownload;

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>
						      {city} {state}
                     </span>
                     <br/>
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}

export default About;
