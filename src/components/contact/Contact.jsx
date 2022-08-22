import React from "react";
import ContactCard from "../contactCard/ContactCard";
import contactData from "../data/contactData";

const Contact = () => {
    return(
        <div className="contact">
            <h3>Contactos de la facultad de medicina</h3>
            <section className="contact-info">
                {
                    contactData.map(contact => {
                        return <div key={contact.id} className="contact-card">
                                    <ContactCard {... contact}/>
                                </div>
                    })
                }
            </section>
        </div>
    );
};

export default Contact;