import React from "react";
import ContactItem from "./ContactItem";
import FormTop from "./FormTop";

const Contact = () => {
    const contactItems = [
        {text: "Location:", value: "Sta. Rosa City Philippines", link: ""},
        {text: "Email:", value: "jgecale_5@yahoo.com", link: "mailto: jgecale_5@yahoo.com"},
        {text: "Linkedin:", value: "JoelGecale@linkedin", link: "https://www.linkedin.com/in/joel-gecale-b8650b125/"},
        {text: "GitHub:", value: "JoelGecale@github" ,link: "https://github.com/JoelGecale"},
        {text: "Upwork:", value: "JoelGecale@upwork" , link: "https://www.upwork.com/freelancers/~01d9bc9a7ca5e081f8"}
    ];

  return (
    <div className="form glass">
      <FormTop />
      <div className="content fadein">
        <article className="p-5">
          <h2 className="py-2 embossed">Contact Details</h2>
          <hr />
          {contactItems.map((contactItem, index) => <ContactItem index={index} contact={contactItem}/>)}
          <hr />
        </article>
      </div>
      <div className="form-bottom fixed-bottom"></div>
    </div>
  );
};

export default Contact;
