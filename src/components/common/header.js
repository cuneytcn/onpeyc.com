"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../theme";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Equal, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white">
			<nav className="container mx-auto flex h-20 w-full items-center justify-between px-6">
				<Link href="/">
					<Logo />
				</Link>

				{/* Mobile Navigation Menu Button */}
				<Button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="xl:hidden">
					{isOpen ? <X className="size-8 stroke-1 transition-all" /> : <Equal className="size-8 stroke-1 transition-all" />}
				</Button>

				{/* Mobile Navigation Menu */}
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>

				{/* Desktop Navigation Menu */}
				<NavigationMenu />
			</nav>
		</header>
	);
}

const Modal = ({ isOpen, setIsOpen }) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			as="div"
			className="relative z-50 h-[calc(100dvh-5rem)] w-full">
			<div
				className="fixed inset-0"
				onClick={() => setIsOpen(false)}></div>
			<DialogPanel>
				<motion.div
					initial={{
						opacity: 0,
						scaleY: 0,
					}}
					animate={{
						opacity: 1,
						scaleY: 1,
					}}
					exit={{
						opacity: 1,
						scaleY: 0,
					}}
					className="fixed top-20 z-50 h-96 w-full origin-top-left bg-white p-6">
					<div className="flex h-full w-full flex-col justify-between">
						<div className="flex flex-col gap-4">
							<Link href="/kurumsal">Kurumsal</Link>
							<Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
							<Link href="/portfolyo">Portfolyo</Link>
							<Link href="/referanslarimiz">Referanslarimiz</Link>
							<Link href="/blog">Blog</Link>
							<Link href="/iletisim">Iletisim</Link>
						</div>
						<Button className="flex h-11 items-center justify-center rounded bg-black px-4">
							<span className="text-sm font-medium text-white">Hemen Teklif Alin</span>
						</Button>
					</div>
				</motion.div>
			</DialogPanel>
		</Dialog>
	);
};

const NavigationMenu = () => {
	return (
		<ul className="hidden items-center gap-8 xl:flex">
			<li>
				<Link href="/kurumsal">Kurumsal</Link>
			</li>
			<li>
				<Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
			</li>
			<li>
				<Link href="/portfolyo">Portfolyo</Link>
			</li>
			<li>
				<Link href="/referanslarimiz">Referanslarimiz</Link>
			</li>
			<li>
				<Link href="/blog">Blog</Link>
			</li>
			<li>
				<Link href="/iletisim">Iletisim</Link>
			</li>
			<li className="ml-10">
				<Link
					href="/iletisim"
					className="flex h-10 items-center justify-center rounded bg-black px-4">
					<span className="text-sm text-white">Hemen Teklif Alin</span>
				</Link>
			</li>
		</ul>
	);
};
