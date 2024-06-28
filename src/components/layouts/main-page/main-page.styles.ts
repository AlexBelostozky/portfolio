import { DEVICE_TYPE } from '@/constants/devices';
import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
	flex-grow: 1;

  @media ${DEVICE_TYPE.TABLET} {
    gap: 64px;
  }
`;
