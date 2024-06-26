import type { Metadata } from 'next'
import './globals.css'
import { Prata } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/context/CartContext'
import { YandexMetrica } from './scripts/YandexMetrica'

const prata = Prata({
	weight: ['400'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'NSP Health Shop',
	description: 'Интернет-магазин биодобавок от Natures Sunshine',
	keywords: ['NSP', 'Natures Sunshine', 'Health', 'Shop', 'Bio', 'Food'],
	openGraph: {
		title: 'NSP Health Shop',
		description: 'Интернет-магазин биодобавок от Natures Sunshine'
	},
	metadataBase: new URL(String(process.env.SITE_URL))
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={prata.className}>
				<YandexMetrica />
				<CartProvider>
					<Header />
					<main className='flex min-h-[100dvh] flex-col border-y'>
						{children}
					</main>
					<Footer />
				</CartProvider>
			</body>
		</html>
	)
}
