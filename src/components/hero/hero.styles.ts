import { styled } from "styled-components";
import { Box } from "@mui/material";
// import styled from "@emotion/styled/macro";

export const HeroBackground = styled.video`
	/* position: absolute; */
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	object-fit: cover;
	z-index: -1;
`;

export const HeroContainer = styled(Box)`
	position: relative;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	text-align: center;
	z-index: 1;
	background: rgba(0, 0, 0, 0.5); // Полупрозрачный фон для улучшения читабельности текста
	/* padding: 0 20px; */
`;

export const HeroDescription = styled(Box)`
	position: absolute;
	width: 100%;
`;
