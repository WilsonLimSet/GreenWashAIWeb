'use client';
import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';

export default function Results() {
  const rawData = useSearchParams().get('data') || '';
  let results: any[] = [];
  try {
    results = JSON.parse(decodeURIComponent(rawData));
  } catch (error) {
    console.log(error);
  }
  const rows =
    results.length > 1 ? (
      results.map((result, index) => <SingleResult key={index} data={result} />)
    ) : (
      <ErrorText>🙊 Encountered an error, please try again</ErrorText>
    );

  return (
    <ResultsDiv>
      <Navbar />
      <MainBody>
        <SectionHeader>Greenwash Analysis</SectionHeader>
        {rows}
      </MainBody>
    </ResultsDiv>
  );
}

const StyledInfoItem = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  color: #6c757d;
`;

const ResultsContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
`;

const ResultsTitle = styled.h3`
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  margin: 0 0 20px 0;
`;

const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResultsListItem = styled.li`
  margin-bottom: 10px;
`;

const ResultName = styled.span`
  font-weight: 700;
  color: #27292a;
`;

const ErrorText = styled.p`
  text-align: left;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
`;

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
            <ResultName>User violation: </ResultName>
            {data.user_violation}
          </StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>
            <ResultName>Reason: </ResultName>
            {data.reason}
          </StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>
            <ResultName>Section number: </ResultName>
            {data.section_number}
          </StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>
            <ResultName>Recommendation: </ResultName>
            {data.recommendation}
          </StyledInfoItem>
        </ResultsListItem>
      </ResultsList>
    </ResultsContainer>
  );
}

const ResultsDiv = styled.main`
  width: 80%;
  margin: auto;
`;

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
