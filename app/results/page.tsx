'use client';
import React, { useState, useEffect } from 'react';

import { styled } from 'styled-components';
import Navbar from '@/components/Navbar';
import EditOnClick from '@/components/EditOnClick';

export default function Results() {
  return (
    <ResultsDiv>
      <Navbar />
      <MainBody>
        <BasicInfo>
          <NameContainer>
            <EditOnClick />
          </NameContainer>
        </BasicInfo>

        <SectionHeader>What to Change 🤔</SectionHeader>
  

      </MainBody>
    </ResultsDiv>
  );
}

const UserViolation = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  color: #AEAEAE;
`;

const SectionNumber = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  color: #AEAEAE;
`;

const Recommendation = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  color: #AEAEAE;
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

function ResultsPanel({ data }: { data: any }) {
  if (!data) {
    return <ErrorText>No data</ErrorText>;
  }

  return (
    <ResultsContainer>
      <ResultsTitle>Results</ResultsTitle>
      <ResultsList>
        <ResultsListItem>
          <UserViolation>User violation: {data.user_violation}</UserViolation>
        </ResultsListItem>
        <ResultsListItem>
          <SectionNumber>Section number: {data.section_number}</SectionNumber>
        </ResultsListItem>
        <ResultsListItem>
          <Recommendation>Recommendation: {data.recommendation}</Recommendation>
        </ResultsListItem>
      </ResultsList>
    </ResultsContainer>
  );
}

const StyledResultsSection = styled.section`
  margin-top: 40px;
`;

const ResultsSectionHeader = styled.h2`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  text-align: left;
  margin: 40px 0 20px 0;
`;

function ResultsSection() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/chat?query=Spirit%20airlines:%20we%20are%20the%20lowest%20carbon%20emissions%20of%20any%20major%20airline');
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <StyledResultsSection>
      <ResultsSectionHeader>What to Change 🤔</ResultsSectionHeader>
      <ResultsPanel data={data} />
    </StyledResultsSection>
  );
}

const ResultsDiv = styled.main``;

const MainBody = styled.section`
  margin: 0 auto;
  margin-top: 5%;
`;

const SectionHeader = styled.h2`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  text-align: left;
  margin: 40px 0 20px 0;
`;

const BasicInfo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const CirclePicture = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const Name = styled.h2`
  font-size: 26px;
  font-family: Inter;
  font-weight: 600;
`;

const SummaryBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
