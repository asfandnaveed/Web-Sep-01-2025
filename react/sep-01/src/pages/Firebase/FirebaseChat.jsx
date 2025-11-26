import { useEffect, useState, useRef } from 'react';
import '../../App.css'
import { onValue, push, ref, serverTimestamp } from 'firebase/database';
import { auth, db } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function FirebaseChat() {

    const [chatMessage, setChatMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);

    const messagesEndRef = useRef(null);


    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    // Convert timestamp to readable time
    const formatTime = (ts) => {
        if (!ts) return "";
        return new Date(ts).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    // Extract username from email
    const getNameFromEmail = (email) => {
        if (!email) return "";
        return email.split("@")[0];
    };

    // Authentication check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                navigate("/login");
            } else {
                setUser(currentUser);
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    // Load messages
    useEffect(() => {
        const node = ref(db, 'Messages');

        onValue(node, (snapshot) => {
            const data = snapshot.val() || {};

            const messageList = Object.keys(data).map((key) => ({
                key: key,
                ...data[key]
            }));

            setMessages(messageList);
        });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Send message
    const sendMessage = () => {
        if (chatMessage.trim() === "") return;

        const node = ref(db, 'Messages');

        push(node, {
            id: user.uid,
            email: user.email,
            chat: chatMessage,
            time: Date.now() // store readable timestamp
        }).then(() => {
            setChatMessage("");
        });
    };

    // Logout function
    const logoutUser = () => {
        signOut(auth)
            .then(() => navigate("/login"))
            .catch((err) => console.log(err));
    };

    return (
        <div className="chat-app-container">

            {/* Top Navbar */}
            <div className="top-navbar d-flex justify-content-between align-items-center px-4 py-3">
                <div className="d-flex align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/906/906349.png" className="logo-img me-3" alt="" />
                    <h5 className="fw-bold mb-0">Inbox</h5>
                </div>

                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-danger btn-sm me-3" onClick={logoutUser}>
                        Logout
                    </button>

                    <div className="user-profile d-flex align-items-center">
                        <img src="https://i.pravatar.cc/150?img=32" className="avatar-sm me-2" alt="" />
                        <span className="fw-semibold">{user ? getNameFromEmail(user.email) : "User"}</span>
                    </div>
                </div>
            </div>

            <div className="chat-layout">

                {/* LEFT SIDEBAR */}
                <div className="sidebar p-3">
                    <input
                        type="text"
                        placeholder="Search contact"
                        className="form-control search-box mb-3"
                    />

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-light btn-sm">All</button>
                        <button className="btn btn-light btn-sm">Unread</button>
                        <button className="btn btn-primary btn-sm">New Message</button>
                    </div>

                    <div className="chat-list">

                        <div className="chat-item active">
                            <img src="https://i.pravatar.cc/150?img=3" className="avatar-sm" alt="" />
                            <div className="ms-2">
                                <h6 className="mb-0 fw-semibold">Alex Johnson</h6>
                                <small>Product Manager</small>
                            </div>
                            <span className="chat-time">09:34</span>
                        </div>

                        <div className="chat-item">
                            <img src="https://i.pravatar.cc/150?img=12" className="avatar-sm" alt="" />
                            <div className="ms-2">
                                <h6 className="mb-0">John Mayer</h6>
                                <small>How are you?</small>
                            </div>
                            <span className="chat-time">10:36</span>
                        </div>

                        <div className="chat-item">
                            <img src="https://i.pravatar.cc/150?img=21" className="avatar-sm" alt="" />
                            <div className="ms-2">
                                <h6 className="mb-0">Carole Landu</h6>
                                <small>I agree, let's proceed...</small>
                            </div>
                            <span className="chat-time">10:12</span>
                        </div>

                    </div>
                </div>

                {/* MAIN CHAT */}
                <div className="chat-area d-flex flex-column">

                    <div className="chat-header px-4 py-3 d-flex align-items-center border-bottom">
                        <img src="https://i.pravatar.cc/150?img=3" className="avatar-sm" alt="" />
                        <div className="ms-2">
                            <h6 className="fw-bold mb-0">Alex Johnson</h6>
                            <small className="text-success">Online</small>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="messages flex-grow-1 p-4">

                        {messages.map((message) => (
                            <div
                                key={message.key}
                                className={`message ${message.id === user?.uid ? "outgoing" : "incoming"}`}
                            >
                                <strong className='text-dark'>{getNameFromEmail(message.email)}</strong>
                                <p>{message.chat}</p>

                                <small>{formatTime(message.time)}</small>
                            </div>
                        ))}

                        <div ref={messagesEndRef}></div>

                    </div>

                    {/* Bottom Input */}
                    <div className="message-input px-3 py-3">
                        <div className="input-wrapper">
                            <input
                                className="form-control message-box-input"
                                placeholder="Type a message..."
                                onChange={(e) => setChatMessage(e.target.value)}
                                value={chatMessage}
                            />

                            <div className="actions d-flex align-items-center">
                                <button className="action-btn"><i className="bi bi-paperclip"></i></button>
                                <button className="action-btn"><i className="bi bi-emoji-smile"></i></button>
                                <button className="btn btn-primary send-btn px-4" onClick={sendMessage}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default FirebaseChat;
