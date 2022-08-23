import React from "react";
import ContactCard from "../contactCard/ContactCard";
import contactData from "../data/contactData";
import "./contact.scss";

const Contact = () => {
    return(
        <div className="contact">
            <h2 className="contacts-title">Contactos de la facultad de medicina</h2>
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