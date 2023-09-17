import styled from "styled-components";

export const Thumb = styled.div`
  height: 248px;
  margin-bottom: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: right;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;

export const TitleModel = styled.span`
  color: ${({ theme }) => theme.color.secondary};
`;

export const FeatureWrapp = styled.div`
  margin-bottom: 14px;
`;

export const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.color.features};
`;

export const FeaturesItem = styled.li`
  &:nth-child(even)::before {
    content: "| ";
    color: ${({ theme }) => theme.color.stroke};
  }
  white-space: nowrap;
`;

export const Accessories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  color: ${({ theme }) => theme.color.features};
`;

export const AccessoriesItem = styled.li`
  &:not(:last-child):not(:first-child)::before {
    content: "| ";
    color: ${({ theme }) => theme.color.stroke};
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.42;
  color: ${({ theme }) => theme.color.primary};
`;

export const TitleMidle = styled.h3`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  line-height: 1.42;
  color: ${({ theme }) => theme.color.primary};
`;

export const RulesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RulesListItem = styled.li`
  padding: 14px;
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.color.conditions};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  background-color: ${({ theme }) => theme.color.conditionsBg};
`;

export const RulesNumber = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.secondary};
`;

export const ButtonPhone = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 168px;
  padding: 12px 50px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  line-height: 1.42;
  color: ${({ theme }) => theme.color.btnText};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.buttonBg};
`;
