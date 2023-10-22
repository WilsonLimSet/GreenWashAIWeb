'use client';

import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import TargetForm from '@/components/TargetForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <HomePage>
      <Navbar />
      <BodyWrapper>
        <Body>
          <Prompt>Enter marketing material</Prompt>
          <TargetForm />
        </Body>
      </BodyWrapper>
      <Footer />
    </HomePage>
  );
}

const HomePage = styled.main`
  height: 100%;
`;

const BodyWrapper = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  margin: auto;
`;

const Prompt = styled.p`
  font-size: 19px;
  font-family: Inter;
  font-weight: 500;
  text-align: left;
  margin: 0 0 15px 6px;
`;
