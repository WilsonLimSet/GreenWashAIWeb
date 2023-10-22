'use client';

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
            <Calendar date={new Date()} />
          </NameContainer>
        </BasicInfo>

        <SectionHeader>What to Change 🤔</SectionHeader>
  

      </MainBody>
    </ResultsDiv>
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

interface ICalendar {
  date: Date;
}

function Calendar({ date }: ICalendar) {
  const getFormattedDate = (date: Date) => {
    const monthDayYear = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const monthDay = monthDayYear.split(',')[0];

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dayNum = date.getDay();
    const formattedDate = `${daysOfWeek[dayNum % 7]}, ${monthDay}`;

    return formattedDate;
  };
  return (
    <CalendarBox>
      <CalendarIcon src="images/calendar.svg" />
      <CalendarText>{getFormattedDate(date)}</CalendarText>
    </CalendarBox>
  );
}

const CalendarBox = styled.div`
  margin-top: 5px;
  padding: 4px 10px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
`;

const CalendarIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CalendarText = styled.p`
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  margin-left: 10px;
`;

const SummaryBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
