'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import _ from 'lodash';

export default function EditOnClick() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    `Stranger #${Math.ceil(Math.random() * 1000)}`
  );

  const editStart = () => setIsEditing(true);
  const editEnd = () => setIsEditing(false);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      editEnd();
    }
  };

  const inputValue = (e: any): string => e.target.value;

  return isEditing ? (
    <Editable
      value={text}
      onKeyDown={onKeyDown}
      onChange={_.flow(inputValue, setText)}
      onBlur={editEnd}
      autoFocus
    />
  ) : (
    <NormalText onDoubleClick={editStart}>{text}</NormalText>
  );
}

const targetFont = `
    font-size: 26px;
    font-family: Inter;
    font-weight: 600;
    text-align: left;
`;

const Editable = styled.input`
  ${targetFont}
`;

const NormalText = styled.h2`
  ${targetFont}
`;
