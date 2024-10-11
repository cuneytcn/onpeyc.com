import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutData, ReferancesData } from "@/contants";

export default function Page() {
	return (
		<main>
			<section className="mb-16 py-16">
				<div className="mx-auto w-full max-w-7xl px-6">
					<div className="flex flex-col">
						<h4 className="uppercase">15+ Yıllık Sektör Tecrübemiz ile</h4>
						<h1 className="mb-8 mt-4 text-4xl font-semibold !leading-tight xl:text-6xl">
							Yaşayan Web Uygulamaları İnşaa Ediyoruz!
						</h1>

						<p className="font-medium">
							Her zaman en iyisini yapma amacı ile birçok marka ile güzel işler başardığımız bu alanda sizlerle işbirliği
							yapmayı sabırsızlıkla bekliyoruz.
						</p>

						<Link
							href="/referanslarimiz"
							className="group/referances-btn mt-16 flex h-10 w-fit items-center justify-center rounded border border-black bg-black px-4 transition-colors hover:bg-white">
							<ArrowRight className="mr-2 stroke-1 text-white transition-all group-hover/referances-btn:text-black" />
							<span className="text-sm text-white transition-all group-hover/referances-btn:text-black">Neler Yaptik</span>
						</Link>
					</div>
				</div>
			</section>

			<section className="mb-16 bg-black py-16">
				<div className="mx-auto w-full max-w-7xl px-6">
					<div className="flex flex-col">
						<h2 className="mb-8 text-2xl font-medium !leading-tight text-white underline decoration-1 underline-offset-8 xl:text-3xl">
							Hakkimizda
						</h2>

						<p className="font-light text-white xl:text-lg">
							Herkesin dilinde, kaleminde, çizgisinde bir reklamcı ifadesi var. Onpeyc, sadece reklamcı değil. Biz kısa,
							orta ve uzun vadede bir markanın yolculuğundaki tüm dijital pazarlama süreçlerinde yol arkadaşlığı yapıyoruz.
							Markamızı koltuklardan izlemiyor, sahnede birlikte oyunun parçası oluyoruz.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-16 py-16">
				<div className="mx-auto w-full max-w-7xl px-6">
					<div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
						{AboutData.map((value, key) => {
							return (
								<figure
									key={key}
									className="flex h-full w-full flex-col items-center justify-between">
									<div className="px-20 lg:px-10 xl:px-0">
										<img
											src={value.image}
											alt={value.title}
										/>
									</div>

									<figcaption className="mt-4">
										<h3 className="text-lg font-medium">{value.title}</h3>
									</figcaption>
								</figure>
							);
						})}
					</div>
				</div>
			</section>

			<section className="mb-16 py-16">
				<div className="mx-auto w-full max-w-7xl px-6">
					<div className="mb-8 flex items-center justify-between">
						<h2 className="text-2xl font-medium !leading-tight underline decoration-1 underline-offset-8 xl:text-3xl">
							Hakkimizda
						</h2>

						<Link
							href="/portfolyo"
							className="flex h-10 w-fit items-center justify-center rounded border border-black bg-white px-4 transition-colors">
							<ArrowRight className="mr-2 stroke-1 text-black" />
							<span className="text-sm text-black">Tum Isler</span>
						</Link>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{ReferancesData.map((value, key) => {
							return (
								<figure
									key={key}
									className="relative flex h-full w-full flex-col rounded bg-gray-50 px-14 pt-14">
									<img
										src={value.logo}
										alt={value.projectName}
										className="order-2 h-auto max-w-full object-cover"
									/>

									<figcaption className="order-1 mb-10">
										<h4 className="mb-4 text-sm font-medium text-gray-300">{value.title}</h4>
										<h3 className="mb-8 text-2xl font-medium capitalize">
											{value.projectName} <br /> {value.title}
										</h3>
										<Link
											href="/"
											className="flex h-10 w-fit items-center justify-center rounded border border-black bg-white px-4 transition-colors">
											<ArrowRight className="mr-2 stroke-1 text-black" />
											<span className="text-sm text-black">Projeyi incele</span>
										</Link>
									</figcaption>
								</figure>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}
