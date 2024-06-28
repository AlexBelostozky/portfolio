'use client';
import * as React from 'react';
import * as S from './header.styles';
import { AppBar, Container } from '@mui/material';

const ancors = ['About me', 'Skills', 'Experience', 'Education', 'Contacts'];


export const Header: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

	const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


	return (
		<AppBar position='fixed'>
			<Container maxWidth='lg'>
				<S.Header>
					{/* <Container> */}
						<span>Header</span>
					{/* </Container> */}
				</S.Header>
			</Container>
		</AppBar>
	);
};
