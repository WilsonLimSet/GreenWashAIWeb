'use client';

import { PROD_URL, TEST_URL } from '@/lib/urls';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HashLoader } from 'react-spinners';

export default function TargetForm() {
  const router = useRouter();
  const placeholder = `Example: Scott's facial cream is certified organic, USDA organic and vegan`;
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const endpointUrl =
      TEST_URL + '/chat?query=' + encodeURIComponent(inputValue || placeholder);

    const resData = await fetch(endpointUrl, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          console.log(`Status: ${res.status} ❌`);
          throw new Error();
        }
        return res.json();
      })
      .catch((err) => console.log(`Error:`, err));

    console.log(`res`, resData);

    // Handle response data as per your needs.
    router.push(`/results?data=${encodeURIComponent(JSON.stringify(resData))}`);
  };

  return (
    <FormDiv onSubmit={onSubmit}>
      <Input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
      />

      <SubmitButton type="submit">
        <RightArrow src="images/arrow-right.svg" />
      </SubmitButton>

      {isLoading && <HashLoader cssOverride={loaderCss} />}
    </FormDiv>
  );
}

const FormDiv = styled.form`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const formFont = `
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  color: #AEAEAE;
`;

const Input = styled.input`
  width: 740px;
  height: 80px;
  background-color: #ffffff;
  border: 1px solid #aeaeae;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  ${formFont}

  &::placeholder {
    ${formFont}
  }

  &:focus {
    outline: #aeaeae;
  }
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-color: #9caf88;
  margin-left: 10px;

  &:hover {
    background-color: #758467;
    transition: background-color 0.2s ease-in-out;
  }
`;

const RightArrow = styled.img`
  width: 50px;
  height: 50px;
`;

const loaderCss = {
  marginTop: '10px',
  marginLeft: '20px',
  borderColor: 'red',
};
