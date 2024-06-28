'use client';

import React, { PropsWithChildren, useState } from 'react';
import * as S from './main-page.styles';
import { Button } from '@mui/material';
import { Hero } from '@/components';

export const MainPage: React.FC<PropsWithChildren> = () => {

	return (
		<S.MainPageContainer>
			<Hero />

			<Button variant="contained" color="primary">
				Button
			</Button>
		</S.MainPageContainer>
	);
};
