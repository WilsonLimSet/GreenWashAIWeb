'use client';

import { styled } from 'styled-components';

export default function Footer() {
  return (
    <FooterDiv>
      <Builders>Built by @limsetia and @scottsus
</Builders>
    </FooterDiv>
  );
}

const FooterDiv = styled.section`
  margin-top: 5%;
`;

const Builders = styled.h2`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
`;
