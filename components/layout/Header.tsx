'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useEffect, useState } from 'react'

export const Header = () => {
	const { state } = useCart()
	const [count, setCount] = useState(0)

	useEffect(() => {
		const totalItems = Object.values(state.items).reduce((acc, item) => {
			return acc + item
		}, 0)
		setCount(totalItems)
	}, [state.items])

	return (
		<header className='flex h-28 items-center px-4 lg:px-6'>
			<Link href='/' className='flex items-center'>
				<Image
					src='/images/logo.png'
					alt='logo'
					width={200}
					height={50}
					className='h-14 w-auto'
				/>
				<span className='sr-only'>Органический Бустер</span>
			</Link>
			<nav className='ml-auto flex items-center gap-4 sm:gap-6'>
				<NavLink href='/products'>Продукты</NavLink>
				<NavLink href='/payment'>Доставка и оплата</NavLink>
				<NavLink href='/contacts'>Контакты</NavLink>
				<NavLink href='/cart'>
					<Button className='inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#388e3c] disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:text-gray-950 dark:hover:bg-[#43a047]/90 dark:focus-visible:ring-[#388e3c]'>
						Корзина
						<Badge className='ml-4' variant='default'>
							{count}
						</Badge>
					</Button>
				</NavLink>
			</nav>
			{/* <CartModal /> */}
		</header>
	)
}

const NavLink = ({ href, children }: any) => (
	<Link
		href={href}
		className='text-sm font-medium underline-offset-4 hover:underline'
	>
		{children}
	</Link>
)
