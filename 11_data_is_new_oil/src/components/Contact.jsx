import { useParams } from "react-router-dom";

const Contact = () => {
  const { contactId } = useParams();
  console.log(contactId);
  return <div>Contact</div>;
};

export default Contact;
