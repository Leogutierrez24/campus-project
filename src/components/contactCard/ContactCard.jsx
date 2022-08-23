const ContactCard = ({title, number, mail}) => {
    return(
        <>
            <h3 className="contact-title">{title}</h3>
            <p className="contact-tel">{number}</p>
            <p className="contact-mail">{mail}</p>
        </>
    );
};

export default ContactCard;