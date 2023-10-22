'use client';

import { PROD_URL, TEST_URL } from '@/lib/urls';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { HashLoader } from 'react-spinners';
import {chat} from 'chat';

export default function TargetForm() {  
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const endpointUrl = (PROD_URL || TEST_URL) + '/chat?query=' + encodeURIComponent(url);

    const resData = await fetch(endpointUrl, {
      method: 'GET'
    })
      .then((res) => {
        if (!res.ok) {
          console.log(`Status: ${res.status} ❌`);
          throw new Error();
        }
        return res.json();
      })
      .catch((err) => console.log(`Error:`, err));

    // Handle response data as per your needs.
    router.push(`/results?data=${encodeURIComponent(JSON.stringify(resData))}`);

    
  };

  return (
    <FormDiv onSubmit={onSubmit}>
      <Input
        type="text"
        value={url}
        placeholder="Example: Scott's facial cream is certified organic, USDA organic and vegan"
        onChange={onChange}
      />

      <SubmitButton type="submit">
        <RightArrow src="images/arrow-right.svg" />
      </SubmitButton>

      {isLoading && <HashLoader cssOverride={loaderCss} />}
    </FormDiv>
  );
}

const convertFormData = (url: string) => {
  const nativeFormData = new FormData();
  nativeFormData.append('url', url);
  return nativeFormData;
};

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
  background-color: #ccb494;
  margin-left: 10px;
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
