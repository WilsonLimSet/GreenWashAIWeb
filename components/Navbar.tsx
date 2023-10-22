'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Navbar() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState('Generate');
  return (
    <NavbarDiv>
      <Title>
        <Link href="/">  
            🌲 
          </Link>
      </Title>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: Inter;
  font-weight: 800;
  cursor: pointer;
`;

const Breadcrumbs = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface IUnderlineAnimation {
  text: string;
}

function UnderlineAnimation({ text }: IUnderlineAnimation) {
  return <TargetText>{text}</TargetText>;
}

const TargetText = styled.p`
  display: inline-block;
  position: relative;
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  margin: auto 20px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -2px;
    left: 0;
    background-color: #27292a;
    transform-origin: bottom right;
    transition: transform 0.4s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const LoginButton = styled.button``;

const Image = styled.img`
  width: 100px;
  height: 70px;
`;
