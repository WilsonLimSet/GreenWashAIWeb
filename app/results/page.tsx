'use client';
import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';

export default function Results() {
  const rawData = useSearchParams().get('data') || '';
  const results = JSON.parse(decodeURIComponent(rawData));
  let parsedData;
  try {
    if (rawData) {
      parsedData = JSON.parse(decodeURIComponent(rawData));
    }
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    parsedData = null;
  }

  return (
    <ResultsDiv>
      <Navbar />
      <MainBody>
        <SectionHeader>Greenwash Analysis</SectionHeader>
        {parsedData && <SingleResult data={parsedData} />}
      </MainBody>
    </ResultsDiv>
  );
}

const StyledInfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  color: #aeaeae;
`;

const ResultsContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
`;

const ResultsTitle = styled.h3`
  font-size: 20px;
  font-family: Inter;
  font-weight: 600;
`;

const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResultsListItem = styled.li`
  margin-bottom: 10px;
`;

const ErrorText = styled.p`
  color: red;
`;

interface SingleAnalysis {
  userViolation: string;
  reason: string;
  sectionNumber: string;
  recommendation: string;
}

function SingleResult({ data }: { data: any }) {
  if (!data) {
    return <ErrorText>No data</ErrorText>;
  }

  return (
    <ResultsContainer>
      <ResultsTitle>Results</ResultsTitle>
      <ResultsList>
        <ResultsListItem>
          <StyledInfoItem>
            User violation: {data[0].user_violation}
          </StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>Reason: {data[0].reason}</StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>
            Section number: {data[0].section_number}
          </StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>
            Recommendation: {data[0].recommendation}
          </StyledInfoItem>
        </ResultsListItem>
      </ResultsList>
    </ResultsContainer>
  );
}

const ResultsDiv = styled.main``;

const MainBody = styled.section`
  margin: 0 auto;
  margin-top: 5%;
`;

const SectionHeader = styled.h2`
  font-size: 28px;
  font-family: Inter;
  font-weight: 600;
  text-align: left;
  margin: 40px 0 20px 0;
`;
