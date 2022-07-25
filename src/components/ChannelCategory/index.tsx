import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

type Props = {
  categoryName: string;
  children: React.ReactNode;
};

const ChannelCategory = ({ categoryName, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <S.CateogryContainer className={isOpen ? 'active' : ''}>
      <S.CategoryTitle onClick={handleClick}>
        <S.CategoryArrow className="arrow">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <S.Path d="M4.75 8.5L7.25 6L4.75 3.5" strokeLinejoin="round" />
          </svg>
        </S.CategoryArrow>
        <span>{categoryName}</span>
      </S.CategoryTitle>
      {isOpen && <S.CategoryContent>{children}</S.CategoryContent>}
    </S.CateogryContainer>
  );
};

export default ChannelCategory;
