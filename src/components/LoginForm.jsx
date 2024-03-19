import React, { useState } from "react";
import '../styles/LoginForm.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRememberMeChange = () => setRememberMe(!rememberMe);
    const handleModalClose = () => setIsModalOpen(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await doSignInWithEmailAndPassword(email, password);
    //         navigate("/dashboard");
    //     } catch (error) {
    //         setError("Invalid email or password. Please try again.");
    //         setIsModalOpen(true);
    //     }
    // };

    return (
        <div className="body">
        <div className="wrapper">
            <form >
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        Remember me
                    </label>
                    <Link to="/forgot">Forgot Password?</Link>
                </div>

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </form>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <ModalContent>
                    <ModalHeader>Error</ModalHeader>
                    <ModalBody>{error}</ModalBody>
                    <ModalFooter>
                        <Button onClick={handleModalClose} color="primary">OK</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
        </div>
    );
};

export default LoginForm;
