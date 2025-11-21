import { useEffect, useState } from 'react';
import '../../App.css'
import { onValue, push, ref, serverTimestamp, set } from 'firebase/database';
import { auth, db } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

function FirebaseChat() {

    const [chatMessage, setChatMessage] = useState("");
    const [messages , setMessages] = useState([]);


    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                navigate("/login");
            } else {
                setUser(currentUser);
            }
        });


    }, []);


    useEffect(()=>{

        const node = ref(db , 'Messages');

        onValue(node , (snapshot)=>{

            const data = snapshot.val();

            const messageList = Object.keys(data).map((key)=>({
                key:key,
                ...data[key]
            }));

            setMessages(messageList);
        });


    } , []);


    const sendMessage = () => {

        const node = ref(db, 'Messages');


        if(chatMessage==""){
            return;
        }

        push(node, {
            id: user.uid,
            email:user.email,
            chat: chatMessage,
            time:serverTimestamp(),
        }).then(()=>{
            setChatMessage("");
        });

    };

    return (
        <div className="chat-app-container">

            {/* Top Navbar */}
            <div className="top-navbar d-flex justify-content-between align-items-center px-4 py-3">
                <div className="d-flex align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/906/906349.png" className="logo-img me-3" />
                    <h5 className="fw-bold mb-0">Inbox</h5>
                </div>

                <div className="d-flex align-items-center">
                    <button className="btn btn-success btn-sm me-3">Import Contacts</button>
                    <div className="user-profile d-flex align-items-center">
                        <img src="https://i.pravatar.cc/150?img=32" className="avatar-sm me-2" />
                        <span className="fw-semibold">Jane Doe</span>
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
                            <img src="https://i.pravatar.cc/150?img=3" className="avatar-sm" />
                            <div className="ms-2">
                                <h6 className="mb-0 fw-semibold">Alex Johnson</h6>
                                <small>Product Manager</small>
                            </div>
                            <span className="chat-time">09:34</span>
                        </div>

                        <div className="chat-item">
                            <img src="https://i.pravatar.cc/150?img=12" className="avatar-sm" />
                            <div className="ms-2">
                                <h6 className="mb-0">John Mayer</h6>
                                <small>How are you?</small>
                            </div>
                            <span className="chat-time">10:36</span>
                        </div>

                        <div className="chat-item">
                            <img src="https://i.pravatar.cc/150?img=21" className="avatar-sm" />
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
                        <img src="https://i.pravatar.cc/150?img=3" className="avatar-sm" />
                        <div className="ms-2">
                            <h6 className="fw-bold mb-0">Alex Johnson</h6>
                            <small className="text-success">Online</small>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="messages flex-grow-1 p-4">

                        <div className="message incoming">
                            <p>I will get back to you shortly.</p>
                            <small>Sent at 16:41</small>
                        </div>

                        <div className="message outgoing">
                            <p>Great, thank you! Looking forward to your update.</p>
                            <small>Seen at 16:59</small>
                        </div>

                        <div className="message incoming">
                            <p>The contract signing is confirmed for Friday at 4 PM.</p>
                            <small>Sent at 9:12</small>
                        </div>

                        <div className="message outgoing">
                            <p>Perfect! Have a great day.</p>
                            <small>Seen at 9:26</small>
                        </div>

                    </div>

                    {/* Bottom Input */}
                    <div className="message-input px-3 py-3">
                        <div className="input-wrapper">
                            <input
                                className="form-control message-box-input"
                                placeholder="Type a message..."
                                onChange={(e) => (setChatMessage(e.target.value))}
                                value={chatMessage}
                            />

                            <div className="actions d-flex align-items-center">
                                <button className="action-btn"><i className="bi bi-paperclip"></i></button>
                                <button className="action-btn"><i className="bi bi-emoji-smile"></i></button>
                                <button className="btn btn-primary send-btn px-4"
                                    onClick={sendMessage}
                                >
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