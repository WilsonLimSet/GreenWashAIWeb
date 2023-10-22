'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import EditOnClick from '@/components/EditOnClick';
import { useSearchParams } from 'next/navigation';

export default function Results() {
  const rawData = useSearchParams().get('data');
  let parsedData;
  try {
    if (rawData) {
      parsedData = JSON.parse(decodeURIComponent(rawData));
    }
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    parsedData = null;
  }

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
        {parsedData && <ResultsPanel data={parsedData} />}
      </MainBody>
    </ResultsDiv>
  );
}


const StyledInfoItem = styled.div`
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
          <StyledInfoItem>User violation: {data.user_violation}</StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>Section number: {data.section_number}</StyledInfoItem>
        </ResultsListItem>
        <ResultsListItem>
          <StyledInfoItem>Recommendation: {data.recommendation}</StyledInfoItem>
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

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;


