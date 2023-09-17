import styled from "styled-components";

export const ListItem = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Thumb = styled.div`
  position: relative;
  height: 268px;
  margin-bottom: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  /* object-position: right; */
`;

export const ButtonWrap = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;

export const TitleModel = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;

export const Price = styled.span`
  margin-left: 30px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;

export const FeatureWrapp = styled.div`
  margin-bottom: 28px;
`;

export const Features = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.color.features};
`;

export const FeaturesItem = styled.li`
  &:not(:first-child)::before {
    content: "| ";
    color: ${({ theme }) => theme.color.stroke};
  }
`;
