// import React from 'react'
// import { PageWrapper, Title, Section, Paragraph } from '../Component/Layout'
// import Button from '../Component/Button'

// const Home = () => {
//   return (
//     <PageWrapper>
//       <Title>Home Page</Title>
//       <Section>
//         <Paragraph>This page demonstrates use of styled-components.</Paragraph>
//         <Button>Click Me</Button>
//       </Section>
//     </PageWrapper>
//   )
// }

// export default Home
import React from "react";
import {
  PageWrapper,
  Title,
  Section,
  Paragraph,
} from "../Component/Layout";
import Button from "../Component/Button";
import styled from "styled-components";

const SubHeading = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
`;

const Home = () => {
  return (
    <PageWrapper>
      <Title>Lesson Summary for Style Components</Title>
      <Paragraph>This page demonstrates layout and typography using styled-components.</Paragraph>

      <Section>
        <SubHeading>Typography & Layout</SubHeading>
        <FlexBox>
          <Box>Box 1: Learn by doing</Box>
          <Box>Box 2: Styled-components are cool</Box>
          <Box>Box 3: Reusable styles rock</Box>
        </FlexBox>
      </Section>
      <div>To Believe me inspect this site</div>
    </PageWrapper>
  );
};

export default Home;
