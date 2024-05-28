import { DEVICE_TYPE } from '@/constants/devices';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${DEVICE_TYPE.TABLET} {
    gap: 64px;
  }
`;
