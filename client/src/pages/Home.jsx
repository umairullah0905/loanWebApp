import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {

  const [loans, setLoans] = useState([])

  useEffect(()=>{
    const fetchLoans = async()=>{
      const res = await axios.get(`/loans/${type}`)
      setLoans(res.data)
    }
    fetchLoans()
  },[type])

  return (
    <Container>
      {loans.map((loan)=>(

      <Card key ={loan._id} loan={loan}/>
      ))}
      
      
    </Container>
  );
};

export default Home;
