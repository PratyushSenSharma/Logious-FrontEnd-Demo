import React, { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Link } from "@nextui-org/react";

const ForgotPasForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    let timer;
    if (showModal && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showModal, countdown]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to send OTP or reset password here
    console.log('Sending OTP to:', email);
    setShowModal(true); // Show modal after sending OTP
  };

  //Modal submit OTP function
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Implement logic to verify OTP here
    console.log('Verifying OTP:', otp);
    // Close modal after OTP verification
    setShowModal(false);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
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
        <button type="submit">Send OTP</button>
      </form>

      {/* OTP Modal */}
      <Modal
        isOpen={showModal}
        onOpenChange={setShowModal}
        placement="top-center"
        backdrop='blur'
        size='xs'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Enter OTP</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  placeholder={`Enter OTP (${countdown}s remaining)`}
                  value={otp}
                  onChange={handleOtpChange}
                  required
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  variant="flat"
                  onClick={() => {
                    setShowModal(false);
                    setOtp('');
                    setCountdown(60); // Reset countdown on modal close
                  }}
                >
                  Close
                </Button>
                <Button color="primary" onClick={handleOtpSubmit}>
                  Submit OTP
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ForgotPasForm;
