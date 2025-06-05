'use client';

import { useState } from 'react';

// 猫の絵文字リスト
const cats = [
	{ emoji: '😺', name: 'にっこり' },
	{ emoji: '😸', name: '笑顔' },
	{ emoji: '😹', name: '笑い泣き' },
	{ emoji: '😻', name: 'ハート目' },
	{ emoji: '😽', name: 'キス顔' },
	{ emoji: '🙀', name: '驚き' },
	{ emoji: '😿', name: '悲しい' },
	{ emoji: '😾', name: '怒り' },
];

export default function CatChanger() {
	const [currentCat, setCurrentCat] = useState(0);
	const [isChanging, setIsChanging] = useState(false);

	const changeCat = () => {
		if (isChanging) return;

		setIsChanging(true);

		let newIndex;
		do {
			newIndex = Math.floor(Math.random() * cats.length);
		} while (newIndex === currentCat);

		setTimeout(() => {
			setCurrentCat(newIndex);
			setIsChanging(false);
		}, 200);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-6 h-96">
			<div className="relative">
				<div className="absolute -inset-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-full blur-md opacity-70"></div>
				<div
					className={`text-9xl transform transition-all duration-300 ease-in-out ${
						isChanging 
							? 'opacity-0 scale-75 rotate-12' 
							: 'opacity-100 scale-100 hover:scale-110 hover:rotate-6'
					}`}
					style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
				>
					{cats[currentCat].emoji}
				</div>
			</div>

			<div className="text-lg font-medium text-foreground/90 bg-gradient-to-r from-muted/50 to-muted/30 px-5 py-1.5 rounded-full shadow-sm border border-border/30 mt-4">
				{cats[currentCat].name}
			</div>

			<button
				onClick={changeCat}
				className="feature-button px-8 py-2.5 rounded-lg mt-4"
				aria-label="猫の表情を変更"
			>
				変更する
			</button>
		</div>
	);
}
