import styled from "styled-components";

export const Title = styled.h2`
   margin-bottom: 10px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
 
  color: ${(p) => p.theme.colors.black};
`;

export const TextBook = styled.p` 
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
`;