'use client';
import React, { PropsWithChildren } from 'react';
import * as S from './main-layout.styles';
// import { Container, Snackbar } from '@/ui-kit';
// import { ModalPasswordRecovery, ModalAuth, ModalMailConfirmation } from '@/components';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { setIsOpenModalAuth, setIsOpenModalPasswordRecovery, setIsMailConformition } from '@/store/modalsSlice';

interface Props {
}

export const MainLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
	// const isOpenModalAuth = useAppSelector((state) => state.modalAuth.isOpenAuthModal);
	// const isOpenModalPasswordRecovery = useAppSelector((state) => state.modalAuth.isOpenModalPasswordRecovery);
	// const isOpenMailConformition = useAppSelector((state) => state.modalAuth.isOpenMailConformition);
	// const dispatch = useAppDispatch();

	return (
		<S.MainLayout id="main">
			{children}

			{/* <Snackbar /> */}

			{/* <ModalAuth
				isOpen={isOpenModalAuth}
				onClose={() => dispatch(setIsOpenModalAuth(false))}
			/> */}

			{/* <ModalPasswordRecovery
				isOpen={isOpenModalPasswordRecovery}
				onClose={() => dispatch(setIsOpenModalPasswordRecovery(false))}
			/> */}

			{/* <ModalMailConfirmation
				isOpen={isOpenMailConformition}
				onClose={() => dispatch(setIsMailConformition(false))}
			/> */}
		</S.MainLayout>
	);
};
