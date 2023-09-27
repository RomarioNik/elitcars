import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  line-height: 1.28;
  color: ${({ theme }) => theme.color.filters};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.filtersInputBorder};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  max-width: 320px;
`;

export const TextFrom = styled.span`
  padding: 12px 0 12px 14px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.color.primary};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.filtersBg};
`;

export const InputFrom = styled.input`
  width: 104px;
  padding: 12px 0 12px 8px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.color.primary};
  outline: none;
  border: none;
  border-right: 1px solid ${({ theme }) => theme.color.filtersMileageBorder};
  background-color: ${({ theme }) => theme.color.filtersBg};
`;

export const TextTo = styled.span`
  padding: 12px 0 12px 14px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.filtersBg};
`;

export const InputTo = styled.input`
  width: 104px;
  padding: 12px 0 12px 8px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  line-height: 1.11;
  color: ${({ theme }) => theme.color.primary};
  outline: none;
  border: none;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.color.filtersBg};
`;
