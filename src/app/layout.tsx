import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {MainLayout, Header, Footer } from '@/components';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Портфолио – Frontend developer Александр Белостоцкий',
  description: 'Навыки, опыт и образование.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
				<Providers>
					<body className={inter.className}>
						<Header />

						<MainLayout>
							{children}
						</MainLayout>

						<Footer />
					</body>
				</Providers>
    </html>
  )
}
