import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;
const Label = styled.label`
  font-size: 14px;
`;
const Upload = ({ setOpen }) => {

  const [inputs, setInputs] = useState({});

  const navigate = useNavigate()

  

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  const handleUpload = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("/loans",{...inputs})
      setOpen(false)
    }catch(err){}
  }

  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="phonenumber"
          name="phoneNumber"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />
         <Input
          type="text"
          placeholder="amount"
          name="amount"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="interestrate"
          name="interestrate"
          onChange={handleChange}
        />
       
       
        
      
        <Button onClick={handleUpload}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;