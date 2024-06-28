'use client';
import * as S from './hero.styles';
import { Box, Container, Typography } from '@mui/material';

export const Hero: React.FC = () => {
	return (
		<S.HeroContainer>
			<S.HeroBackground autoPlay loop muted>
				<source src="hero.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</S.HeroBackground>

			<S.HeroDescription>
				<Container maxWidth='lg'>
					<Box
						textAlign={'left'}
					>
						<Typography variant="h1" component="h1">
							Alexander Belostozky
						</Typography>
						<Typography variant="h6" component="p">
							Frontend developer
						</Typography>
					</Box>
				</Container>
			</S.HeroDescription>
		</S.HeroContainer>
	);
};
