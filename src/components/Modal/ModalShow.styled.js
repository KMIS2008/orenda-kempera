import styled from "styled-components";

export const Title = styled.h2`
   margin-bottom: 10px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
 
  color: ${(p) => p.theme.colors.black};
`;

export const TitleFlex = styled.div`
display: flex;
justify-content: space-between;
`;


export const Info = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 16px;
`;

export const Reviews = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.black};
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const Price = styled.p`
  margin-bottom: 24px;
  
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const GamperList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
`;

export const GamperItem = styled.li`
  width: 290px;
  height: 310px;
`;

export const GamperImg = styled.img`
  border-radius: 10px;
  height: 100%;
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
`;



