import React from 'react';

const Contact = ({data, climbs}) => {
   const handleChange = (e) => {
      e.target.value = 'Sorry, this feature is not set up yet'
   }

   if (!data || !climbs) {
      return(
         <section id="contact"></section>
      )
   }

   let message = data.contactmessage;
   let climbCards = climbs.items
     ? climbs.items.slice(0, 4).map((climb, i) => (
         <li key={climb.title + i}>
           <b>
             <a href={climb.link} target="blank">
               <p style={{marginBottom: 0}}>{climb.title.replace('Tick: ', '')}</p>
             </a>
           </b>
           <span>{climb.contentSnippet.substring(0, 200) + "..."}</span>
           <p>{climb.pubDate.substring(0, 16)}</p>
         </li>
       ))
     : [];

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Climbs</h4>
                  <ul id="twitter">
                     {climbCards}
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
