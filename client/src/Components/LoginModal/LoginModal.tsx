import React, { useState } from "react";
import { Box, Modal, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useMyContext } from "../../Context";
import "./LoginModal.css";
import { login, register } from "../../constants/uri";

const LoginModal = () => {
  const { open, setOpen, baseUrl, fetchUser} = useMyContext();
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleClose = () => {
    setOpen(false);
    setFormData({ email: "", password: "", username: "" }); // Clear form on close
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const endpoint = baseUrl+(isSignUp ? register : login);
    console.log("BASEURL "+ baseUrl)
    try {
      const response = await axios.post(endpoint, formData);
      localStorage.setItem("authToken", response.data.token);
      
      if(response.data.success)
      {
        fetchUser();
      alert(response.data.message);
      }
      handleClose();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className="login-modal-box">
        <Typography id="modal-title" variant="h6" component="h2">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        {isSignUp && (
          <TextField
            name="username"
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />
        )}
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, cursor: "pointer", textAlign: "center", color: "blue" }}
          onClick={() => setIsSignUp((prev) => !prev)}
        >
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoginModal;
