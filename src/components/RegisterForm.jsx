import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
// import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import "../styles/RegisterForm.css";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error message
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleModalClose = () => setIsModalOpen(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await doCreateUserWithEmailAndPassword(email, password);
  //     console.log("User registered successfully");
  //     navigate('/'); // Navigate to login page after successful signup
  //   } catch (error) {
  //     console.error("Registration error:", error.message);
  //     setError(error.message); // Set error message
  //     setIsModalOpen(true); // Open modal
  //   }
  // };

  return (
    <div className="body">
    <div className="wrapper">
      <form >
        <h1>Registration</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          <MdDriveFileRenameOutline className="icon" />
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <MdEmail className="icon" />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <FaUserAlt className="icon" />
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

        <button type="submit">Sign Up</button>
      </form>

      {/* Modal for displaying error message */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalContent>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>Email already exists</ModalBody>
          <ModalFooter>
            <Button onClick={handleModalClose} color="primary">OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    </div>
  );
};

export default RegisterForm;
