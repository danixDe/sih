import { useState } from 'react';
import './pages.css';
import { useNavigate } from 'react-router-dom';
const alumniList = [
    { id: 1, name: "John Snow", occupation: "Software Engineer" },
    { id: 2, name: "Dany", occupation: "Product Manager" },
    { id: 3, name: "Jaime", occupation: "Data Scientist" },
    { id: 4, name: "Arya", occupation: "UX Designer" },
    { id: 5, name: "Missandei", occupation: "Marketing Manager" }
];

const Mentorship = () => {
    const [selectedAlumni, setSelectedAlumni] = useState(null);
    const [message, setMessage] = useState("");
    const navigate=useNavigate();
    const handleAlumniClick = (alumni) => {
        setSelectedAlumni(alumni);
        navigate("/chatbox",{state:alumni});
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (selectedAlumni && message) {
            alert(`Message sent to ${selectedAlumni.name}: ${message}`);
            setMessage("");
        }
    };

    return (
        <div className='pagent'>
            <h1>Mentorship Program</h1>
            <p>Connect with fellow alumni and send them messages.</p>
            <div className='alumni-list'>
                {alumniList.map(alumni => (
                    <div
                        key={alumni.id}
                        className={`alumni-item ${selectedAlumni?.id === alumni.id ? 'selected' : ''}`}
                        onClick={() => handleAlumniClick(alumni)}
                    >
                        <h2>{alumni.name}</h2>
                        <p>{alumni.occupation}</p>
                    </div>
                ))}
            </div>
            {selectedAlumni && (
                <div className='message-section'>
                    <h2>Send a Message to {selectedAlumni.name}</h2>
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Write your message here..."
                    />
                    <button onClick={handleSendMessage}>Send Message</button>
                </div>
            )}
        </div>
    );
};

export default Mentorship;
