// import React from 'react'
// import {PageWrapper, Title, Section, Paragraph} from '../Component/Layout'
// import Button from '../Component/Button'

// const Contact = () => {
//   return (
//     <PageWrapper>
//       <Title>Contact Page</Title>
//       <Section>
//         <Paragraph>Styled-components helps in making reusable and scoped styles.</Paragraph>
//         <Button>Send Message</Button>
//       </Section>
//     </PageWrapper>
//   )
// }

// export default Contact
import React, { useState } from "react";
import {
  PageWrapper,
  Title,
  Section,
  Paragraph,
} from "../Component/Layout";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 2px solid ${props => props.error ? 'red' : '#ccc'};
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setError(!email.includes("@"));
  };

  return (
    <PageWrapper>
      <Title>Contact Us</Title>

      <Section>
        <Paragraph>Enter your email to receive updates:</Paragraph>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error}
          />
          <button type="submit">Submit</button>
        </form>
        {error && <Paragraph style={{ color: "red" }}>Invalid Email</Paragraph>}
      </Section>
    </PageWrapper>
  );
};

export default Contact;
