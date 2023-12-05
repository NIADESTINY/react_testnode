// components/Form.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    ref_no: '',
    cust_name: '',
    financing_amount: '',
    tenure: '',
    mobile_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/applicants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        alert('Form submitted successfully!');
      } else {
        console.error('Error submitting form.');
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <FormContainer>
      <FormGroup>
        <Label>Reference Number:</Label>
        <Input type="text" name="ref_no" value={formData.ref_no} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Customer Name:</Label>
        <Input type="text" name="cust_name" value={formData.cust_name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Financing Amount:</Label>
        <Input type="text" name="financing_amount" value={formData.financing_amount} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Tenure:</Label>
        <Input type="text" name="tenure" value={formData.tenure} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Mobile Number:</Label>
        <Input type="text" name="mobile_no" value={formData.mobile_no} onChange={handleChange} />
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </FormContainer>
  );
};

export default Form;
