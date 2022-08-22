const ContactCard = ({title, number, mail}) => {
    return(
        <>
            <h3>{title}</h3>
            <p>{number}</p>
            <p>{mail}</p>
        </>
    );
};

export default ContactCard;