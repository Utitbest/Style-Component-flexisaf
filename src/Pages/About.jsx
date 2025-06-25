// import React from 'react'
// import { PageWrapper, Title, Section, Paragraph } from '../Component/Layout'
// import Button from '../Component/Button'

// const About = () => {
//   return (
//     <PageWrapper>
//       <Title>About Page</Title>
//       <Section>
//         <Paragraph>This page also uses styled-components for layout and styling.</Paragraph>
//         <Button>Learn More</Button>
//       </Section>
//     </PageWrapper>
//   )
// }

// export default About

import React from "react";
import {
  PageWrapper,
  Title,
  Section,
  Paragraph,
} from "../Component/Layout";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <PageWrapper>
      <Title>About Our Styling Journey</Title>

      <Section>
        <Card>
          <h3>What is styled-components?</h3>
          <Paragraph>
            A CSS-in-JS tool that helps you write component-scoped CSS with JavaScript.
          </Paragraph>
        </Card>

        <Card>
          <h3>Why use it?</h3>
          <Paragraph>
            It allows scoped styles, dynamic theming, and cleaner React components.
          </Paragraph>
        </Card>
      </Section>
    </PageWrapper>
  );
};

export default About;
