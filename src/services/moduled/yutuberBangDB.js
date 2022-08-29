import image from './image'

const biodataList = {
	biodataTitle: "Biodata",
	weaponTitle: "Weapon",
	materialLTitle: "Material for Level Up",
	weapon: "Weapon",
	vision: "Vision",
	affiliation: "Affiliation",
	constelation: "Constelation",
	title: "Title",
}

const visionType = {
	pyro: "Pyro",
	hydro: "Hydro",
	cryo: "Cryo",
	electro: "Electro",
	anemo: "Anemo",
	geo: "Geo",
	dendro: "Dendro",
}

const rarityType = {
	title: "Rarity",
	fiveStar: 5,
	fourStar: 4,
	threeStar: 3, 
}

const tierType = {
	title: "Tier",
	sTier: "S",
	aTier: "A",
	bTier: "B",
	cTier: "C",
	dTier: "D", 
}

const affiliationType = {
	fatui: "Fatui",
	dawnWinery: "Dawn Winery",
	theKamisatoClan: "The Kamisato Clan",
}

const levelList = {
	phaseOne: "Level 20 - 40",
	phaseTwo: "Level 40 - 50",
	phaseThree: "Level 50 - 60",
	phaseFour: "Level 60 - 70",
	phaseFive: "Level 70 - 80",
	phaseSix: "Level 80 - 90",
}

const material = {
	stone: {
		hydroStone: {
			varunadaLazuriteSliver: {
				name: "Varunada Lazurite Sliver",
				img: image.varunadaLazuriteSliverImg,
			},
			varunadaLazuriteFragment: {
				name: "Varunada Lazurite Fragment",
				img: image.varunadaLazuriteFragmentImg,
			},
			varunadaLazuriteChunk: {
				name: "Varunada Lazurite Chunk",
				img: image.varunadaLazuriteChunkImg,
			},
			varunadaLazuriteGemstone: {
				name: "Varunada Lazurite Gemstone",
				img: image.varunadaLazuriteGemstoneImg,
			},
		},
		pyroStone: {
			agnidusAgateSliver: {
				name: "Agnidus Agate Sliver",
				img: image.agnidusAgateSliverImg,
			},
			agnidusAgateFragment: {
				name: "Agnidus Agate Fragment",
				img: image.agnidusAgateFragmentImg,
			},
			agnidusAgateChunk: {
				name: "Agnidus Agate Chunk",
				img: image.agnidusAgateChunkImg,
			},
			agnidusAgateGemstone: {
				name: "Agnidus Agate Gemstone",
				img: image.agnidusAgateGemstoneImg,
			},
		},
	},
	nature: {
		starconch: {
			name: "Starconch",
			img: image.starconchImg,
		},
		smallLampGrass: {
			name: "Small Lamp Grass",
			img: image.smallLampGrassImg,
		},
		sakuraBloom: {
			name: "Sakura Bloom",
			img: image.sakuraBloomImg,
		},
	},	
	monsterDrop: {
		arrowhead: {
			firmArrowhead: {
				name: "Firm Arrowhead",
				img: image.firmArrowheadImg,
			},
			sharpArrowhead: {
				name: "Sharp Arrowhead",
				img: image.sharpArrowheadImg,
			},
			weatheredArrowhead: {
				name: "Weathered Arrowhead",
				img: image.weatheredArrowheadImg,
			},
		},
		scroll: {
			divineScroll: {
				name: "Divining Scroll",
				img: image.divineScrollImg,
			},
			sealedScroll: {
				name: "Sealed Scroll",
				img: image.sealedScrollImg,
			},
			forbiddenCurseScroll: {
				name: "Forbidden Curse Scroll",
				img: image.forbiddenCurseScrollImg,
			},
		},
		deadLeyLine: {
			deadLeyLineBranch: {
				name: "Dead Ley Line Branch",
				img: image.deadLeyLineBranchImg,
			},
			deadLeyLineLeaves: {
				name: "Dead Ley Line Leaves",
				img: image.deadLeyLineLeavesImg,
			},
			leyLineSprouts: {
				name: "Ley Line Sprouts",
				img: image.leyLineSproutsImg,
			},
		},
		insignia: {
			recruitsInsignia: {
				name: "Recruit's Insignia",
				img: image.recruitsInsigniaImg,
			},
			sergeantsInsignia: {
				name: "Sergeant's Insignia",
				img: image.sergeantsInsigniaImg,
			},
			lieutenantsInsignia: {
				name: "Lieutenant's Insignia",
				img: image.lieutenantsInsigniaImg,
			},
		},
		chaos: {
			chaosDevice: {
				name: "Chaos Device",
				img: image.chaosDeviceImg,
			},
			chaosCircuit: {
				name: "Chaos Circuit",
				img: image.chaosCircuitImg,
			},
			chaosCore: {
				name: "Chaos Core",
				img: image.chaosCoreImg,
			},
		},
		statuette: {
			gloomyStatuette: {
				name: "gloomyStatuette",
				img: image.gloomyStatuetteImg,
			},
			darkStatuette: {
				name: "Dark Statuette",
				img: image.darkStatuetteImg,
			},
			deathlyStatuette: {
				name: "Deathly Statuette",
				img: image.deathlyStatuetteImg,
			},
		},
		handguard: {
			oldHandguard: {
				name: "Old Handguard",
				img: image.oldHandguardImg,
			},
			kageuchiHandguard: {
				name: "Kageuchi Handguard",
				img: image.kageuchiHandguardImg,
			},
			famedHandguard: {
				name: "Famed Handguard",
				img: image.famedHandguardImg,
			},
		},
	},
	midBossDrop: {
		cleansingHeart: {
			name: "Cleansing Heart",
			img: image.cleansingHeartImg,
		},
		everflameSeed: {
			name: "Everflame Seed",
			img: image.everflameSeedImg,
		},
		dewOfRepudiation: {
			name: "Dew of Repudiation",
			img: image.dewOfRepudiationImg,
		},
	},
	mora: {
		name: "Mora",
		img: image.moraImg, 
	},

	weaponMaterial: {
		borealWolfs: {
			borealWolfsMilkTooth: {
				name: "Boreal Wolf's Milk Tooth",
				img: image.borealWolfsMilkToothImg,
			},
			borealWolfsCrackedTooth: {
				name: "Boreal Wolf's Cracked Tooth",
				img: image.borealWolfsCrackedToothImg,
			},
			borealWolfsBrokenFang: {
				name: "Boreal Wolf's Broken Fang",
				img: image.borealWolfsBrokenFangImg,
			},
			borealWolfsNostalgia: {
				name: "Boreal Wolf's Nostalgia",
				img: image.borealWolfsNostalgiaImg,
			},
		},
		dandelionGladiator: {
			fettersOfTheDandelionGladiator: {
				name: "Fetters of The Dandelion Gladiator",
				img: image.fettersOfTheDandelionGladiatorImg,
			},
			chainsOfTheDandelionGladiator: {
				name: "Chains of The Dandelion Gladiator",
				img: image.chainsOfTheDandelionGladiatorImg,
			},
			shacklesOfTheDandelionGladiator: {
				name: "Shackles of The Dandelion Gladiator",
				img: image.shacklesOfTheDandelionGladiatorImg,
			},
			dreamOfTheDandelionGladiator: {
				name: "Dream of The Dandelion Gladiator",
				img: image.dreamOfTheDandelionGladiatorImg,
			},
		}, 
		narukamis: {
			narukamisWisdom: {
				name: "Narukamis Wisdom",
				img: image.narukamisWisdomImg,
			},
			narukamisJoy: {
				name: "Narukamis Joy",
				img: image.narukamisJoyImg,
			},
			narukamisAffection: {
				name: "Narukamis Affection",
				img: image.narukamisAffectionImg,
			},
			narukamisValor: {
				name: "Narukamis Valor",
				img: image.narukamisValorImg,
			},
		},
	},

	amountOf: {
		amountOfNatureItem: {
			phaseOne: "x3",
			phaseTwo: "x10",
			phaseThree: "x20",
			phaseFour: "x30",
			phaseFive: "x45",
			phaseSix: "x60",
		},
		amountOfStoneItem: {
			amountOfStoneSliverItem: {
				phaseOne: "x1",
			},
			amountOfStoneFragmentItem: {
				phaseTwo: "x3",
				phaseThree: "x6",
			},
			amountOfStoneChunkItem: {
				phaseFour: "x3",
				phaseFive: "x6",
			},
			amountOfStoneGemstoneItem: {
				phaseSix: "x6",
			},	
		},
		amountOfMonsterDropItem: {
			amountOfMonsterDropTypeOneItem: {
				phaseOne: "x3",
				phaseTwo: "x15",
			},
			amountOfMonsterDropTypeTwoItem: {
				phaseThree: "x12",
				phaseFour: "x18",
			},
			amountOfMonsterDropTypeThreeItem: {
				phaseFive: "x12",
				phaseSix: "x24",
			},
		},
		amountOfMidBossDropItem: {
			phaseOne: null,
			phaseTwo: "x2",
			phaseThree: "x4",
			phaseFour: "x8",
			phaseFive: "x12",
			phaseSix: "x20",
		}, 
		amountOfWeaponMaterialOne: {
			typeOne: {
				phaseOne: "x5",
			},
			typeTwo: {
				phaseTwo: "x5",
				phaseThree: "x9",
			},
			typeThree: {
				phaseFour: "x5",
				phaseFive: "x9",
			},
			typeFour: {
				phaseSix: "x6",
			},
		},
		amountOfWeaponMaterialTwo: {
			typeOne: {
				phaseOne: "x5",
				phaseTwo: "x18",
			},
			typeTwo: {
				phaseThree: "x9",
				phaseFour: "x18",
			},
			typeThree: {
				phaseFive: "x14",
				phaseSix: "x27",
			},
		},
		amountOfWeaponMaterialThree: {
			typeOne: {
				phaseOne: "x3",
				phaseTwo: "x12",
			},
			typeTwo: {
				phaseThree: "x9",
				phaseFour: "x14",
			},
			typeThree: {
				phaseFive: "x9",
				phaseSix: "x18",
			},
		},
	},
}

const stats = {
	title: "Stats",
	type: "Type",
	obtainBy: "Obtain by",
	baseAttack: "Base Attack",
	substats: "Substats",
	passive: "Passive",
}

const weaponType = {
	sword: "Sword",
	claymore: "Claymore",
	polearm: "Polearm",
	bow: "Bow",
	catalyst: "Catalyst",
}

const obtainBy = {
	gacha: "Gacha",
	event: "Event",
	mission: "Mission",
}

const substatsList = {
	critRate: "Crit Rate",
	critDamage: "Crit Damage",
	attack: "Attack",
}

const weaponList = {
	sword: {
		haranGeppakuFutsu: {
			name: "Haran Geppaku Futsu",
			img: image.haranGeppakuFutsuImg,
		},
	},
	bow: {
		skywardHarp: {
			name: "Skyward Harp",
			img: image.skywardHarpImg, 
		},
	},
	claymore: {
		wolfsGravestone: {
			name: "Wolf's Gravestone",
			img: image.wolfsGravestoneImg,
		},
	},
}


const artifactHead = {
	setBonus: {
		name: "Artifact Set Bonus",
		twoSets: "2 Pieces",
		fourSets: "4 Pieces",
	},
	sets: {
		name: "Artifact Sets Images",
		flowerOfLife: {
			name: "Flower of Life",
			stats: "HP",
		},
		plumeOfDeath: {
			name: "Plume of Death",
			stats: "ATK",
		},
		sandsOfEon: {
			name: "Sands of Eon",
			stats: "HP%, DEF%, ATK%, Elemental Mastery, Energy Recharge%",
		},
		gobletOfEonothem: {
			name: "Goblet of Eonothem",
			stats: "HP%, DEF%, ATK%, Elemental Mastery, Elemental DMG Bonus%, Physical DMG Bonus%",
		},
		circletOfLogos: {
			name: "Circlet of Logos",
			stats: "HP%, DEF%, ATK%, Elemental Mastery, Crit Rate%, Crit DMG%, Healing Bonus",
		},
	},
	heartOfDepth: "Heart of Depth",
	crimsonWitchOfFlame: "Crimson Witch of Flame",
	echoesOfAnOffering: "Echoes of an Offering",
	location: "Location",
}

const artifactList = {
	heartOfDepth: {
		gildedCorsage: {
			name: "Gilded Corsage",
			img: image.gildedCorsageImg,
		},
		gustOfNostalgia: {
			name: "Gust of Nostalgia",
			img: image.gustOfNostalgiaImg,
		},
		copperCompass: {
			name: "Copper Compass",
			img: image.copperCompassImg,
		},
		gobletOfThunderingDeep: {
			name: "Goblet of Thundering Deep",
			img: image.gobletOfThunderingDeepImg,
		},
		wineStainedTricorne: {
			name: "Wine Stained Tricorne",
			img: image.wineStainedTricorneImg,
		},
	},
	crimsonWitchOfFlame: {
		witchsFlowerOfBlaze: {
			name: "Witch's Flower of Blaze",
			img: image.witchsFlowerOfBlazeImg,
		},
		witchsEverBurningPlume: {
			name: "Witch's Ever Burning Plume",
			img: image.witchsEverBurningPlumeImg,
		},
		witchsEndTime: {
			name: "Witch's End Time",
			img: image.witchsEndTimeImg,
		},
		witchsHeartFlames: {
			name: "Witch's Heart Flames",
			img: image.witchsHeartFlamesImg,
		},
		witchsScorchingHat: {
			name: "Witch's Scorching Hat",
			img: image.witchsScorchingHatImg,
		},
	},
	echoesOfAnOffering: {
		soulscentBloom: {
			name: "Soulscent Bloom",
			img: image.soulscentBloomImg,
		},
		jadeLeaf: {
			name: "Jade Leaf",
			img: image.jadeLeafImg,
		},
		symbolOfFelicitation: {
			name: "Symbol of Felicitation",
			img: image.symbolOfFelicitationImg,
		},
		chaliceOfTheFont: {
			name: "Chalice of the Font",
			img: image.chaliceOfTheFontImg,
		},
		flowingRings: {
			name: "Flowing Rings",
			img: image.flowingRingsImg,
		},
	},
}

const tofHead = {
	resonance: "Resonance",
	element: "Element",
	shatter: "Shatter",
	charge: "Charge",
	weaponEffect: "Weapon Effect",
	advancement: "Advancement",
	awakeningTraits: "Awakening Traits",
	sets: {
		twoPieces: "2 Pieces Set",
		fourPieces: "4 Pieces Set", 
	},
}

const tofModus = {
	grade: {
		title: "Grade",
		sr: "SR",
		ssr: "SSR",
	},
	typeTitle: "Type",
	type: "Simulacrum",
	typeMatrix: "Matrix",
	resonance: {
		dps: "DPS",
		defense: "Defense",
		support: "Support",
	},
	element: {
		flame: "Flame",
		ice: "Ice",
		volt: "Volt",
	},
	stars: {
		one: "1*",
		two: "2*",
		three: "3*",
		four: "4*",
		five: "5*",
		six: "6*",
	},
	awakeningTraits: {
		phaseOne: 1200,
		phaseTwo: 4000,
	},
}

const tofSimulacra = {
	king: {
		name: "KING",
		weaponName: "Scythe of the Crow",
	},
	crow: {
		name: "Crow",
		weaponName: "Thunderblades",
	},
	zero: {
		name: "Zero",
		weaponName: "Negating Cube",
	},
}

const tofParser = (str) => {
	return parseFloat(str).toFixed(2)
}

const yutuberBangDB = [
	{
		id: 1,
		name: 'Genshin Impact',
		logo: image.genshinImpactLogoImg,
		sign: 'GI',
		line: 'genshin',
		constantItem: [
			{
				itemId: 1,
				itemName: 'Characters',
				itemLogo: 'none',
				itemContents: [
					{
						contentId: 1,
						contentName: 'Tartaglia',
						contentImg: image.tartaglia,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.sTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: rarityType.fiveStar,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: biodataList.biodataTitle,
										lists: [
											{
												listId: 1,
												listKey: biodataList.weapon,
												listValue: weaponType.bow,
											},
											{
												listId: 2,
												listKey: biodataList.vision,
												listValue: visionType.hydro,
											},
											{
												listId: 3,
												listKey: biodataList.affiliation,
												listValue: affiliationType.fatui,
											},
											{
												listId: 4,
												listKey: biodataList.constelation,
												listValue: 'Monoceros Caeli',
											},
											{
												listId: 5,
												listKey: biodataList.title,
												listValue: '11th of the Eleven Fatui Harbingers',
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "OneText",
								metadata: {
									text: "Childe is No. 11 of the Eleven Harbingers of Fatui. Following danger wherever he goes, Childe is always eager for a challenge. He is considered one of the more dangerous members of the harbingers",
								},
							},
							{
								fullId: 4,
								model: "Rec",
								metadata: {
									weaponRecomendation: {
										title: biodataList.weaponTitle,
										lists: [
											{
												listId: 1,
												listName: weaponList.bow.skywardHarp.name,
												listImg: weaponList.bow.skywardHarp.img, 
											},
											{
												listId: 2,
												listName: weaponList.bow.skywardHarp.name,
												listImg: weaponList.bow.skywardHarp.img, 
											},
											{
												listId: 3,
												listName: weaponList.bow.skywardHarp.name,
												listImg: weaponList.bow.skywardHarp.img,
											},
										],
									},
								},
							},
							{
								fullId: 5,
								model: "Material",
								metadata: {
									materialForLevelUp: {
										title: biodataList.materialLTitle,
										lists: [
											{
												listId: 1,
												listName: levelList.phaseOne,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.starconch.name,
														listContentImage: material.nature.starconch.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseOne,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteSliver.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteSliver.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneSliverItem.phaseOne,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.recruitsInsignia.name,
														listContentImage: material.monsterDrop.insignia.recruitsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeOneItem.phaseOne,
													},
												],
											},
											{
												listId: 2,
												listName: levelList.phaseTwo,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.starconch.name,
														listContentImage: material.nature.starconch.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseTwo,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteFragment.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteFragment.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneFragmentItem.phaseTwo,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.recruitsInsignia.name,
														listContentImage: material.monsterDrop.insignia.recruitsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeOneItem.phaseTwo,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.cleansingHeart.name,
														listContentImage: material.midBossDrop.cleansingHeart.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseTwo,
													},
												],
											},
											{
												listId: 3,
												listName: levelList.phaseThree,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.starconch.name,
														listContentImage: material.nature.starconch.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseThree,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteFragment.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteFragment.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneFragmentItem.phaseThree,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.sergeantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.sergeantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeTwoItem.phaseThree,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.cleansingHeart.name,
														listContentImage: material.midBossDrop.cleansingHeart.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseThree,
													},
												],
											},
											{
												listId: 4,
												listName: levelList.phaseFour,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.starconch.name,
														listContentImage: material.nature.starconch.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseFour,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteChunk.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteChunk.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneChunkItem.phaseFour,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.sergeantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.sergeantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeTwoItem.phaseFour,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.cleansingHeart.name,
														listContentImage: material.midBossDrop.cleansingHeart.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseFour,
													},
												],
											},
											{
												listId: 5,
												listName: levelList.phaseFive,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.starconch.name,
														listContentImage: material.nature.starconch.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseFive,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteChunk.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteChunk.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneChunkItem.phaseFive,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.lieutenantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.lieutenantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeThreeItem.phaseFive,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.cleansingHeart.name,
														listContentImage: material.midBossDrop.cleansingHeart.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseFive,
													},
												],
											},
											{
												listId: 6,
												listName: levelList.phaseSix,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.starconch.name,
														listContentImage: material.nature.starconch.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseSix,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteGemstone.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteGemstone.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneGemstoneItem.phaseSix,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.lieutenantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.lieutenantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeThreeItem.phaseSix,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.cleansingHeart.name,
														listContentImage: material.midBossDrop.cleansingHeart.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseSix,
													},
												],
											},
										],
									},
								},
							},
						],
					},
					{
						contentId: 2,
						contentName: 'Diluc',
						contentImg: image.diluc,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.aTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: rarityType.fiveStar,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: biodataList.biodataTitle,
										lists: [
											{
												listId: 1,
												listKey: biodataList.weapon,
												listValue: weaponType.claymore,
											},
											{
												listId: 2,
												listKey: biodataList.vision,
												listValue: visionType.pyro,
											},
											{
												listId: 3,
												listKey: biodataList.affiliation,
												listValue: affiliationType.dawnWinery,
											},
											{
												listId: 4,
												listKey: biodataList.constelation,
												listValue: 'Noctua',
											},
											{
												listId: 5,
												listKey: biodataList.title,
												listValue: 'The Darknight Hero',
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "OneText",
								metadata: {
									text: "The tycoon of a winery empire in Mondstadt, unmatched in every possible way",
								},
							},
							{
								fullId: 4,
								model: "Rec",
								metadata: {
									weaponRecomendation: {
										title: biodataList.weaponTitle,
										lists: [
											{
												listId: 1,
												listName: weaponList.claymore.wolfsGravestone.name,
												listImg: weaponList.claymore.wolfsGravestone.img, 
											},
											{
												listId: 2,
												listName: weaponList.claymore.wolfsGravestone.name,
												listImg: weaponList.claymore.wolfsGravestone.img, 
											},
											{
												listId: 3,
												listName: weaponList.claymore.wolfsGravestone.name,
												listImg: weaponList.claymore.wolfsGravestone.img,
											},
											{
												listId: 4,
												listName: weaponList.claymore.wolfsGravestone.name,
												listImg: weaponList.claymore.wolfsGravestone.img,
											},
										],
									},
								},
							},
							{
								fullId: 5,
								model: "Material",
								metadata: {
									materialForLevelUp: {
										title: biodataList.materialLTitle,
										lists: [
											{
												listId: 1,
												listName: levelList.phaseOne,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.smallLampGrass.name,
														listContentImage: material.nature.smallLampGrass.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseOne,
													},
													{
														listContentId: 2,
														listContentName: material.stone.pyroStone.agnidusAgateSliver.name,
														listContentImage: material.stone.pyroStone.agnidusAgateSliver.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneSliverItem.phaseOne,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.recruitsInsignia.name,
														listContentImage: material.monsterDrop.insignia.recruitsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeOneItem.phaseOne,
													},
												],
											},
											{
												listId: 2,
												listName: levelList.phaseTwo,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.smallLampGrass.name,
														listContentImage: material.nature.smallLampGrass.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseTwo,
													},
													{
														listContentId: 2,
														listContentName: material.stone.pyroStone.agnidusAgateFragment.name,
														listContentImage: material.stone.pyroStone.agnidusAgateFragment.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneFragmentItem.phaseTwo,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.recruitsInsignia.name,
														listContentImage: material.monsterDrop.insignia.recruitsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeOneItem.phaseTwo,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.everflameSeed.name,
														listContentImage: material.midBossDrop.everflameSeed.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseTwo,
													},
												],
											},
											{
												listId: 3,
												listName: levelList.phaseThree,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.smallLampGrass.name,
														listContentImage: material.nature.smallLampGrass.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseThree,
													},
													{
														listContentId: 2,
														listContentName: material.stone.pyroStone.agnidusAgateFragment.name,
														listContentImage: material.stone.pyroStone.agnidusAgateFragment.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneFragmentItem.phaseThree,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.sergeantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.sergeantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeTwoItem.phaseThree,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.everflameSeed.name,
														listContentImage: material.midBossDrop.everflameSeed.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseThree,
													},
												],
											},
											{
												listId: 4,
												listName: levelList.phaseFour,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.smallLampGrass.name,
														listContentImage: material.nature.smallLampGrass.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseFour,
													},
													{
														listContentId: 2,
														listContentName: material.stone.pyroStone.agnidusAgateChunk.name,
														listContentImage: material.stone.pyroStone.agnidusAgateChunk.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneChunkItem.phaseFour,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.sergeantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.sergeantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeTwoItem.phaseFour,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.everflameSeed.name,
														listContentImage: material.midBossDrop.everflameSeed.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseFour,
													},
												],
											},
											{
												listId: 5,
												listName: levelList.phaseFive,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.smallLampGrass.name,
														listContentImage: material.nature.smallLampGrass.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseFive,
													},
													{
														listContentId: 2,
														listContentName: material.stone.pyroStone.agnidusAgateChunk.name,
														listContentImage: material.stone.pyroStone.agnidusAgateChunk.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneChunkItem.phaseFive,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.lieutenantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.lieutenantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeThreeItem.phaseFive,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.everflameSeed.name,
														listContentImage: material.midBossDrop.everflameSeed.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseFive,
													},
												],
											},
											{
												listId: 6,
												listName: levelList.phaseSix,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.smallLampGrass.name,
														listContentImage: material.nature.smallLampGrass.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseSix,
													},
													{
														listContentId: 2,
														listContentName: material.stone.pyroStone.agnidusAgateGemstone.name,
														listContentImage: material.stone.pyroStone.agnidusAgateGemstone.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneGemstoneItem.phaseSix,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.insignia.lieutenantsInsignia.name,
														listContentImage: material.monsterDrop.insignia.lieutenantsInsignia.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeThreeItem.phaseSix,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.everflameSeed.name,
														listContentImage: material.midBossDrop.everflameSeed.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseSix,
													},
												],
											},
										],
									},
								},
							},
						],
									
					},
					{
						contentId: 3,
						contentName: 'Kamisato Ayato',
						contentImg: image.kamisatoAyato,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.aTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: rarityType.fiveStar,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: biodataList.biodataTitle,
										lists: [
											{
												listId: 1,
												listKey: biodataList.weapon,
												listValue: weaponType.sword,
											},
											{
												listId: 2,
												listKey: biodataList.vision,
												listValue: visionType.hydro,
											},
											{
												listId: 3,
												listKey: biodataList.affiliation,
												listValue: affiliationType.theKamisatoClan,
											},
											{
												listId: 4,
												listKey: biodataList.constelation,
												listValue: 'Cypressus Custos',
											},
											{
												listId: 5,
												listKey: biodataList.title,
												listValue: 'Head of the Kamisato Clan',
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "OneText",
								metadata: {
									text: "The young but highly acomplished head of the Yashiro Commision's Kamisato Clan. Cultured and polite, he is a man of many ways and means",
								},
							},
							{
								fullId: 4,
								model: "Rec",
								metadata: {
									weaponRecomendation: {
										title: biodataList.weaponTitle,
										lists: [
											{
												listId: 1,
												listName: weaponList.sword.haranGeppakuFutsu.name,
												listImg: weaponList.sword.haranGeppakuFutsu.img, 
											},
											{
												listId: 2,
												listName: weaponList.sword.haranGeppakuFutsu.name,
												listImg: weaponList.sword.haranGeppakuFutsu.img, 
											},
											{
												listId: 3,
												listName: weaponList.sword.haranGeppakuFutsu.name,
												listImg: weaponList.sword.haranGeppakuFutsu.img,
											},
											{
												listId: 4,
												listName: weaponList.sword.haranGeppakuFutsu.name,
												listImg: weaponList.sword.haranGeppakuFutsu.img,
											},
										],
									},
								},
							},
							{
								fullId: 5,
								model: "Material",
								metadata: {
									materialForLevelUp: {
										title: biodataList.materialLTitle,
										lists: [
											{
												listId: 1,
												listName: levelList.phaseOne,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.sakuraBloom.name,
														listContentImage: material.nature.sakuraBloom.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseOne,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteSliver.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteSliver.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneSliverItem.phaseOne,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.oldHandguard.name,
														listContentImage: material.monsterDrop.handguard.oldHandguard.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeOneItem.phaseOne,
													},
												],
											},
											{
												listId: 2,
												listName: levelList.phaseTwo,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.sakuraBloom.name,
														listContentImage: material.nature.sakuraBloom.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseTwo,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteFragment.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteFragment.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneFragmentItem.phaseTwo,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.oldHandguard.name,
														listContentImage: material.monsterDrop.handguard.oldHandguard.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeOneItem.phaseTwo,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.dewOfRepudiation.name,
														listContentImage: material.midBossDrop.dewOfRepudiation.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseTwo,
													},
												],
											},
											{
												listId: 3,
												listName: levelList.phaseThree,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.sakuraBloom.name,
														listContentImage: material.nature.sakuraBloom.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseThree,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteFragment.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteFragment.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneFragmentItem.phaseThree,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.kageuchiHandguard.name,
														listContentImage: material.monsterDrop.handguard.kageuchiHandguard.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeTwoItem.phaseThree,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.dewOfRepudiation.name,
														listContentImage: material.midBossDrop.dewOfRepudiation.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseThree,
													},
												],
											},
											{
												listId: 4,
												listName: levelList.phaseFour,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.sakuraBloom.name,
														listContentImage: material.nature.sakuraBloom.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseFour,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteChunk.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteChunk.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneChunkItem.phaseFour,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.kageuchiHandguard.name,
														listContentImage: material.monsterDrop.handguard.kageuchiHandguard.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeTwoItem.phaseFour,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.dewOfRepudiation.name,
														listContentImage: material.midBossDrop.dewOfRepudiation.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseFour,
													},
												],
											},
											{
												listId: 5,
												listName: levelList.phaseFive,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.sakuraBloom.name,
														listContentImage: material.nature.sakuraBloom.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseFive,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteChunk.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteChunk.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneChunkItem.phaseFive,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.famedHandguard.name,
														listContentImage: material.monsterDrop.handguard.famedHandguard.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeThreeItem.phaseFive,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.dewOfRepudiation.name,
														listContentImage: material.midBossDrop.dewOfRepudiation.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseFive,
													},
												],
											},
											{
												listId: 6,
												listName: levelList.phaseSix,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.nature.sakuraBloom.name,
														listContentImage: material.nature.sakuraBloom.img,
														listContentAmount: material.amountOf.amountOfNatureItem.phaseSix,
													},
													{
														listContentId: 2,
														listContentName: material.stone.hydroStone.varunadaLazuriteGemstone.name,
														listContentImage: material.stone.hydroStone.varunadaLazuriteGemstone.img,
														listContentAmount: material.amountOf.amountOfStoneItem.amountOfStoneGemstoneItem.phaseSix,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.famedHandguard.name,
														listContentImage: material.monsterDrop.handguard.famedHandguard.img,
														listContentAmount: material.amountOf.amountOfMonsterDropItem.amountOfMonsterDropTypeThreeItem.phaseSix,
													},
													{
														listContentId: 4,
														listContentName: material.midBossDrop.dewOfRepudiation.name,
														listContentImage: material.midBossDrop.dewOfRepudiation.img,
														listContentAmount: material.amountOf.amountOfMidBossDropItem.phaseSix,
													},
												],
											},
										],
									},
								},
							},
						],
					},
				],
			},
			{
				itemId: 2,
				itemName: 'Weapons',
				itemLogo: 'none',
				itemContents: [
					{
						contentId: 1,
						contentName: weaponList.bow.skywardHarp.name,
						contentImg: weaponList.bow.skywardHarp.img,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.sTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: rarityType.fiveStar,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: stats.title,
										lists: [
											{
												listId: 1,
												listKey: stats.type,
												listValue: weaponType.bow,
											},
											{
												listId: 2,
												listKey: stats.obtainBy,
												listValue: obtainBy.gacha,
											},
											{
												listId: 3,
												listKey: stats.baseAttack,
												listValue: 45,
											},
											{
												listId: 4,
												listKey: stats.substats,
												listValue: substatsList.critRate,
											},
											{
												listId: 5,
												listKey: stats.passive,
												listValue: "Echoing Ballad",
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "OneText",
								metadata: {
									text: "A greatbow that symbolize Dvalin's affiliation with the Anemo Archon. The sound of the bow firing is music to the Anemo Archon's ears. it contains the power of the sky and wind within",
								},
							},
							{
								fullId: 4,
								model: "Material",
								metadata: {
									materialForLevelUp: {
										title: 'Material for Level Up',
										lists: [
											{
												listId: 1,
												listName: levelList.phaseOne,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.borealWolfs.borealWolfsMilkTooth.name,
														listContentImage: material.weaponMaterial.borealWolfs.borealWolfsMilkTooth.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeOne.phaseOne,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.deadLeyLine.deadLeyLineBranch.name,
														listContentImage: material.monsterDrop.deadLeyLine.deadLeyLineBranch.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseOne,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.arrowhead.firmArrowhead.name,
														listContentImage: material.monsterDrop.arrowhead.firmArrowhead.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialThree.typeOne.phaseOne,
													},
												],
											},
											{
												listId: 2,
												listName: levelList.phaseTwo,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.borealWolfs.borealWolfsCrackedTooth.name,
														listContentImage: material.weaponMaterial.borealWolfs.borealWolfsCrackedTooth.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeTwo.phaseTwo,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.deadLeyLine.deadLeyLineBranch.name,
														listContentImage: material.monsterDrop.deadLeyLine.deadLeyLineBranch.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseTwo,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.arrowhead.firmArrowhead.name,
														listContentImage: material.monsterDrop.arrowhead.firmArrowhead.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseTwo,
													},
												],
											},
											{
												listId: 3,
												listName: levelList.phaseThree,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.borealWolfs.borealWolfsCrackedTooth.name,
														listContentImage: material.weaponMaterial.borealWolfs.borealWolfsCrackedTooth.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeTwo.phaseThree,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.deadLeyLine.deadLeyLineLeaves.name,
														listContentImage: material.monsterDrop.deadLeyLine.deadLeyLineLeaves.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseThree,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.arrowhead.sharpArrowhead.name,
														listContentImage: material.monsterDrop.arrowhead.sharpArrowhead.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseThree,
													},
												],
											},
											{
												listId: 4,
												listName: levelList.phaseFour,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.borealWolfs.borealWolfsBrokenFang.name,
														listContentImage: material.weaponMaterial.borealWolfs.borealWolfsBrokenFang.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeThree.phaseFour,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.deadLeyLine.deadLeyLineLeaves.name,
														listContentImage: material.monsterDrop.deadLeyLine.deadLeyLineLeaves.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseFour,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.arrowhead.sharpArrowhead.name,
														listContentImage: material.monsterDrop.arrowhead.sharpArrowhead.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseFour,
													},
												],
											},
											{
												listId: 5,
												listName: levelList.phaseFive,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.borealWolfs.borealWolfsBrokenFang.name,
														listContentImage: material.weaponMaterial.borealWolfs.borealWolfsBrokenFang.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeThree.phaseFive,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.deadLeyLine.leyLineSprouts.name,
														listContentImage: material.monsterDrop.deadLeyLine.leyLineSprouts.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseFive,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.arrowhead.weatheredArrowhead.name,
														listContentImage: material.monsterDrop.arrowhead.weatheredArrowhead.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseFive,
													},
												],
											},
											{
												listId: 6,
												listName: levelList.phaseSix,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.borealWolfs.borealWolfsNostalgia.name,
														listContentImage: material.weaponMaterial.borealWolfs.borealWolfsNostalgia.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeFour.phaseSix,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.deadLeyLine.leyLineSprouts.name,
														listContentImage: material.monsterDrop.deadLeyLine.leyLineSprouts.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseSix,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.arrowhead.weatheredArrowhead.name,
														listContentImage: material.monsterDrop.arrowhead.weatheredArrowhead.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseSix,
													},
												],
											},
										],
									},
								},
							},
						],				
					},
					{
						contentId: 2,
						contentName: weaponList.claymore.wolfsGravestone.name,
						contentImg: weaponList.claymore.wolfsGravestone.img,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.aTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: rarityType.fiveStar,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: stats.title,
										lists: [
											{
												listId: 1,
												listKey: stats.type,
												listValue: weaponType.claymore,
											},
											{
												listId: 2,
												listKey: stats.obtainBy,
												listValue: obtainBy.gacha,
											},
											{
												listId: 3,
												listKey: stats.baseAttack,
												listValue: 46,
											},
											{
												listId: 4,
												listKey: stats.substats,
												listValue: substatsList.attack,
											},
											{
												listId: 5,
												listKey: stats.passive,
												listValue: "Wolfish Tracker",
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "OneText",
								metadata: {
									text: "A longsword used by the Wolf Knight. Originally just a heavy sheet of Iron given to the Knight by a blacksmith from the city, it became  endowed with legendary power owing to his friendship with the wolves",
								},
							},
							{
								fullId: 4,
								model: "Material",
								metadata: {
									materialForLevelUp: {
										title: 'Material for Level Up',
										lists: [
											{
												listId: 1,
												listName: levelList.phaseOne,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.dandelionGladiator.fettersOfTheDandelionGladiator.name,
														listContentImage: material.weaponMaterial.dandelionGladiator.fettersOfTheDandelionGladiator.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeOne.phaseOne,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.chaos.chaosDevice.name,
														listContentImage: material.monsterDrop.chaos.chaosDevice.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseOne,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.scroll.divineScroll.name,
														listContentImage: material.monsterDrop.scroll.divineScroll.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialThree.typeOne.phaseOne,
													},
												],
											},
											{
												listId: 2,
												listName: levelList.phaseTwo,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.dandelionGladiator.chainsOfTheDandelionGladiator.name,
														listContentImage: material.weaponMaterial.dandelionGladiator.chainsOfTheDandelionGladiator.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeTwo.phaseTwo,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.chaos.chaosDevice.name,
														listContentImage: material.monsterDrop.chaos.chaosDevice.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseTwo,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.scroll.divineScroll.name,
														listContentImage: material.monsterDrop.scroll.divineScroll.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseTwo,
													},
												],
											},
											{
												listId: 3,
												listName: levelList.phaseThree,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.dandelionGladiator.fettersOfTheDandelionGladiator.name,
														listContentImage: material.weaponMaterial.dandelionGladiator.fettersOfTheDandelionGladiator.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeTwo.phaseThree,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.chaos.chaosCircuit.name,
														listContentImage: material.monsterDrop.chaos.chaosCircuit.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseThree,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.scroll.sealedScroll.name,
														listContentImage: material.monsterDrop.scroll.sealedScroll.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseThree,
													},
												],
											},
											{
												listId: 4,
												listName: levelList.phaseFour,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.dandelionGladiator.shacklesOfTheDandelionGladiator.name,
														listContentImage: material.weaponMaterial.dandelionGladiator.shacklesOfTheDandelionGladiator.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeThree.phaseFour,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.chaos.chaosCircuit.name,
														listContentImage: material.monsterDrop.chaos.chaosCircuit.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseFour,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.scroll.sealedScroll.name,
														listContentImage: material.monsterDrop.scroll.sealedScroll.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseFour,
													},
												],
											},
											{
												listId: 5,
												listName: levelList.phaseFive,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.dandelionGladiator.shacklesOfTheDandelionGladiator.name,
														listContentImage: material.weaponMaterial.dandelionGladiator.shacklesOfTheDandelionGladiator.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeThree.phaseFive,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.chaos.chaosCore.name,
														listContentImage: material.monsterDrop.chaos.chaosCore.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseFive,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.scroll.forbiddenCurseScroll.name,
														listContentImage: material.monsterDrop.scroll.forbiddenCurseScroll.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseFive,
													},
												],
											},
											{
												listId: 6,
												listName: levelList.phaseSix,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.dandelionGladiator.dreamOfTheDandelionGladiator.name,
														listContentImage: material.weaponMaterial.dandelionGladiator.dreamOfTheDandelionGladiator.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeFour.phaseSix,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.chaos.chaosCore.name,
														listContentImage: material.monsterDrop.chaos.chaosCore.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseSix,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.scroll.forbiddenCurseScroll.name,
														listContentImage: material.monsterDrop.scroll.forbiddenCurseScroll.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseSix,
													},
												],
											},
										],
									},
								},
							},
						],				
					},
					{
						contentId: 3,
						contentName: weaponList.sword.haranGeppakuFutsu.name,
						contentImg: weaponList.sword.haranGeppakuFutsu.img,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.sTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: rarityType.fiveStar,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: stats.title,
										lists: [
											{
												listId: 1,
												listKey: stats.type,
												listValue: weaponType.sword,
											},
											{
												listId: 2,
												listKey: stats.obtainBy,
												listValue: obtainBy.gacha,
											},
											{
												listId: 3,
												listKey: stats.baseAttack,
												listValue: 46,
											},
											{
												listId: 4,
												listKey: stats.substats,
												listValue: substatsList.critRate,
											},
											{
												listId: 5,
												listKey: stats.passive,
												listValue: "Honed Flow",
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "OneText",
								metadata: {
									text: 'A famed work by the Futsu line of smiths. The name "Haran" comes from the manner in which it resembles the violent, rolling waves',
								},
							},
							{
								fullId: 4,
								model: "Material",
								metadata: {
									materialForLevelUp: {
										title: 'Material for Level Up',
										lists: [
											{
												listId: 1,
												listName: levelList.phaseOne,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.narukamis.narukamisWisdom.name,
														listContentImage: material.weaponMaterial.narukamis.narukamisWisdom.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeOne.phaseOne,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.statuette.gloomyStatuette.name,
														listContentImage: material.monsterDrop.statuette.gloomyStatuette.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseOne,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.oldHandguard.name,
														listContentImage: material.monsterDrop.handguard.oldHandguard.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialThree.typeOne.phaseOne,
													},
												],
											},
											{
												listId: 2,
												listName: levelList.phaseTwo,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.narukamis.narukamisJoy.name,
														listContentImage: material.weaponMaterial.narukamis.narukamisJoy.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeTwo.phaseTwo,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.statuette.gloomyStatuette.name,
														listContentImage: material.monsterDrop.statuette.gloomyStatuette.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseTwo,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.oldHandguard.name,
														listContentImage: material.monsterDrop.handguard.oldHandguard.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeOne.phaseTwo,
													},
												],
											},
											{
												listId: 3,
												listName: levelList.phaseThree,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.narukamis.narukamisJoy.name,
														listContentImage: material.weaponMaterial.narukamis.narukamisJoy.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeTwo.phaseThree,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.statuette.darkStatuette.name,
														listContentImage: material.monsterDrop.statuette.darkStatuette.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseThree,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.kageuchiHandguard.name,
														listContentImage: material.monsterDrop.handguard.kageuchiHandguard.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseThree,
													},
												],
											},
											{
												listId: 4,
												listName: levelList.phaseFour,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.narukamis.narukamisAffection.name,
														listContentImage: material.weaponMaterial.narukamis.narukamisAffection.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeThree.phaseFour,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.statuette.darkStatuette.name,
														listContentImage: material.monsterDrop.statuette.darkStatuette.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseFour,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.kageuchiHandguard.name,
														listContentImage: material.monsterDrop.handguard.kageuchiHandguard.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeTwo.phaseFour,
													},
												],
											},
											{
												listId: 5,
												listName: levelList.phaseFive,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.narukamis.narukamisAffection.name,
														listContentImage: material.weaponMaterial.narukamis.narukamisAffection.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeThree.phaseFive,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.statuette.deathlyStatuette.name,
														listContentImage: material.monsterDrop.statuette.deathlyStatuette.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseFive,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.famedHandguard.name,
														listContentImage: material.monsterDrop.handguard.famedHandguard.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseFive,
													},
												],
											},
											{
												listId: 6,
												listName: levelList.phaseSix,
												listWrapper: function(){
													return this.listContent.length;
												},
												listContent: [
													{
														listContentId: 1,
														listContentName: material.weaponMaterial.narukamis.narukamisAffection.name,
														listContentImage: material.weaponMaterial.narukamis.narukamisAffection.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialOne.typeFour.phaseSix,
													},
													{
														listContentId: 2,
														listContentName: material.monsterDrop.statuette.deathlyStatuette.name,
														listContentImage: material.monsterDrop.statuette.deathlyStatuette.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseSix,
													},
													{
														listContentId: 3,
														listContentName: material.monsterDrop.handguard.famedHandguard.name,
														listContentImage: material.monsterDrop.handguard.famedHandguard.img,
														listContentAmount: material.amountOf.amountOfWeaponMaterialTwo.typeThree.phaseSix,
													},
												],
											},
										],
									},
								},
							},
						],			
					},
				],
			},
			{
				itemId: 3,
				itemName: 'Artifacts',
				itemLogo: 'none',
				itemContents: [
					{
						contentId: 1,
						contentName: artifactHead.heartOfDepth,
						contentImg: artifactList.heartOfDepth.gildedCorsage.img,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.sTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: `${rarityType.fiveStar}/${rarityType.fourStar}`,
										},
										{
											metaId: 3,
											metaName: artifactHead.location,
											metaValue: "Peak of Vindagnyr",
										},
									],
								},
							},
							{
								fullId: 2,
								model: "TwoText",
								metadata: {
									twoText: {
										title: artifactHead.setBonus.name,
										lists: [
											{
												listId: 1,
												listKey: artifactHead.setBonus.twoSets,
												listValue: "Hydro DMG Bonus +15%.",
											},
											{
												listId: 2,
												listKey: artifactHead.setBonus.fourSets,
												listValue: "After using an Elemental Skill, Increases Normal Attack and Charged Attack DMG by 30% for 15s.",
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "ArtTypes",
								metadata: {
									artTypes: {
										title: artifactHead.sets.name,
										lists: [
											{
												listId: 1,
												listSlot: artifactHead.sets.flowerOfLife.name,
												listName: artifactList.heartOfDepth.gildedCorsage.name,
												listImg: artifactList.heartOfDepth.gildedCorsage.img,
												listStats: artifactHead.sets.flowerOfLife.stats,
											},
											{
												listId: 2,
												listSlot: artifactHead.sets.plumeOfDeath.name,
												listName: artifactList.heartOfDepth.gustOfNostalgia.name,
												listImg: artifactList.heartOfDepth.gustOfNostalgia.img,
												listStats: artifactHead.sets.plumeOfDeath.stats,
											},
											{
												listId: 3,
												listSlot: artifactHead.sets.sandsOfEon.name,
												listName: artifactList.heartOfDepth.copperCompass.name,
												listImg: artifactList.heartOfDepth.copperCompass.img,
												listStats: artifactHead.sets.sandsOfEon.stats,
											},
											{
												listId: 4,
												listSlot: artifactHead.sets.gobletOfEonothem.name,
												listName: artifactList.heartOfDepth.gobletOfThunderingDeep.name,
												listImg: artifactList.heartOfDepth.gobletOfThunderingDeep.img,
												listStats: artifactHead.sets.gobletOfEonothem.stats,
											},
											{
												listId: 5,
												listSlot: artifactHead.sets.circletOfLogos.name,
												listName: artifactList.heartOfDepth.wineStainedTricorne.name,
												listImg: artifactList.heartOfDepth.wineStainedTricorne.img,
												listStats: artifactHead.sets.circletOfLogos.stats,
											},
										],
									},
								},
							},
						],
					},
					{
						contentId: 2,
						contentName: artifactHead.crimsonWitchOfFlame,
						contentImg: artifactList.crimsonWitchOfFlame.witchsFlowerOfBlaze.img,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.sTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: `${rarityType.fiveStar}/${rarityType.fourStar}`,
										},
										{
											metaId: 3,
											metaName: artifactHead.location,
											metaValue: "Hidden Palace of Zhou Formula",
										},
									],
								},
							},
							{
								fullId: 2,
								model: "TwoText",
								metadata: {
									twoText: {
										title: artifactHead.setBonus.name,
										lists: [
											{
												listId: 1,
												listKey: artifactHead.setBonus.twoSets,
												listValue: "Pyro DMG Bonus +15%.",
											},
											{
												listId: 2,
												listKey: artifactHead.setBonus.fourSets,
												listValue: "Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using and Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting Value for 10s, Max 3 stacks.",
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "ArtTypes",
								metadata: {
									artTypes: {
										title: artifactHead.sets.name,
										lists: [
											{
												listId: 1,
												listSlot: artifactHead.sets.flowerOfLife.name,
												listName: artifactList.crimsonWitchOfFlame.witchsFlowerOfBlaze.name,
												listImg: artifactList.crimsonWitchOfFlame.witchsFlowerOfBlaze.img,
												listStats: artifactHead.sets.flowerOfLife.stats,
											},
											{
												listId: 2,
												listSlot: artifactHead.sets.plumeOfDeath.name,
												listName: artifactList.crimsonWitchOfFlame.witchsEverBurningPlume.name,
												listImg: artifactList.crimsonWitchOfFlame.witchsEverBurningPlume.img,
												listStats: artifactHead.sets.plumeOfDeath.stats,
											},
											{
												listId: 3,
												listSlot: artifactHead.sets.sandsOfEon.name,
												listName: artifactList.crimsonWitchOfFlame.witchsEndTime.name,
												listImg: artifactList.crimsonWitchOfFlame.witchsEndTime.img,
												listStats: artifactHead.sets.sandsOfEon.stats,
											},
											{
												listId: 4,
												listSlot: artifactHead.sets.gobletOfEonothem.name,
												listName: artifactList.crimsonWitchOfFlame.witchsHeartFlames.name,
												listImg: artifactList.crimsonWitchOfFlame.witchsHeartFlames.img,
												listStats: artifactHead.sets.gobletOfEonothem.stats,
											},
											{
												listId: 5,
												listSlot: artifactHead.sets.circletOfLogos.name,
												listName: artifactList.crimsonWitchOfFlame.witchsScorchingHat.name,
												listImg: artifactList.crimsonWitchOfFlame.witchsScorchingHat.img,
												listStats: artifactHead.sets.circletOfLogos.stats,
											},
										],
									},
								},
							},
						],			
					},
					{
						contentId: 3,
						contentName: artifactHead.echoesOfAnOffering,
						contentImg: artifactList.echoesOfAnOffering.soulscentBloom.img,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tierType.title,
											metaValue: tierType.sTier,
										},
										{
											metaId: 2,
											metaName: rarityType.title,
											metaValue: `${rarityType.fiveStar}/${rarityType.fourStar}`,
										},
										{
											metaId: 3,
											metaName: artifactHead.location,
											metaValue: "The Lost Valley",
										},
									],
								},
							},
							{
								fullId: 2,
								model: "TwoText",
								metadata: {
									twoText: {
										title: artifactHead.setBonus.name,
										lists: [
											{
												listId: 1,
												listKey: artifactHead.setBonus.twoSets,
												listValue: "ATK +15%.",
											},
											{
												listId: 2,
												listKey: artifactHead.setBonus.fourSets,
												listValue: "When Normal Attack hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If Normal Attck fails to trigger Valley RIte, the odds of it triggering the next time will increase by 20%. this trigger can occur once every 0.02s.",
											},
										],
									},
								},
							},
							{
								fullId: 3,
								model: "ArtTypes",
								metadata: {
									artTypes: {
										title: artifactHead.sets.name,
										lists: [
											{
												listId: 1,
												listSlot: artifactHead.sets.flowerOfLife.name,
												listName: artifactList.echoesOfAnOffering.soulscentBloom.name,
												listImg: artifactList.echoesOfAnOffering.soulscentBloom.img,
												listStats: artifactHead.sets.flowerOfLife.stats,
											},
											{
												listId: 2,
												listSlot: artifactHead.sets.plumeOfDeath.name,
												listName: artifactList.echoesOfAnOffering.jadeLeaf.name,
												listImg: artifactList.echoesOfAnOffering.jadeLeaf.img,
												listStats: artifactHead.sets.plumeOfDeath.stats,
											},
											{
												listId: 3,
												listSlot: artifactHead.sets.sandsOfEon.name,
												listName: artifactList.echoesOfAnOffering.symbolOfFelicitation.name,
												listImg: artifactList.echoesOfAnOffering.symbolOfFelicitation.img,
												listStats: artifactHead.sets.sandsOfEon.stats,
											},
											{
												listId: 4,
												listSlot: artifactHead.sets.gobletOfEonothem.name,
												listName: artifactList.echoesOfAnOffering.chaliceOfTheFont.name,
												listImg: artifactList.echoesOfAnOffering.chaliceOfTheFont.img,
												listStats: artifactHead.sets.gobletOfEonothem.stats,
											},
											{
												listId: 5,
												listSlot: artifactHead.sets.circletOfLogos.name,
												listName: artifactList.echoesOfAnOffering.flowingRings.name,
												listImg: artifactList.echoesOfAnOffering.flowingRings.img,
												listStats: artifactHead.sets.circletOfLogos.stats,
											},
										],
									},
								},
							},
						],
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Tower of Fantasy',
		logo: image.tofLogoImg,
		sign: 'ToF',
		line: 'tof',
		constantItem: [
			{
				itemId: 1,
				itemName: 'Simulacra',
				itemLogo: 'none',
				itemContents: [
					{
						contentId: 1,
						contentName: tofSimulacra.king.name,
						contentImg: image.kingImg,
						contentFull: [
							{
								fullId: 1,
								model: "TofWeapon",
								metadata: {
									weaponName: tofSimulacra.king.weaponName,
									weaponImg: image.scytheOfTheCrowImg,
								},
							},
							{
								fullId: 2,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tofModus.grade.title,
											metaValue: tofModus.grade.ssr,
										},
										{
											metaId: 2,
											metaName: tofModus.typeTitle,
											metaValue: tofModus.type,
										},
									],
								},
							},
							{
								fullId: 3,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: stats.title,
										lists: [
											{
												listId: 1,
												listKey: tofHead.resonance,
												listValue: tofModus.resonance.dps,
											},
											{
												listId: 2,
												listKey: tofHead.element,
												listValue: tofModus.element.flame,
											},
											{
												listId: 3,
												listKey: tofHead.shatter,
												listValue: "12.5",
											},
											{
												listId: 4,
												listKey: tofHead.charge,
												listValue: "5",
											},
										],
									},
								},
							},
							{
								fullId: 4,
								model: "TwoText",
								metadata: {
									twoText: {
										title: tofHead.weaponEffect,
										lists: [
											{
												listId: 1,
												listKey: tofModus.element.flame,
												listValue: "Fully charged Weapons will set the target on fire for 8 seconds with the next attack, causing ongoing damage of 58.00% of ATK every second. Ignited targets receive 50% eficacy from healing.",
											},
										],
									},
								},
							},
							{
								fullId: 5,
								model: "KeyValueTitle",
								metadata: {
									keyValueTitle: {
										title: tofHead.advancement,
										lists: [
											{
												listId: 1,
												listKey: tofModus.stars.one,
												listValue: "Increase shatter by 15%. After shattering the target's shield, deal burn damage equal to 120% of ATK ti the target every second for 15 seconds.",
											},
											{
												listId: 2,
												listKey: tofModus.stars.two,
												listValue: "Increase the current weapon's base HP growth by 16%.",
											},
											{
												listId: 3,
												listKey: tofModus.stars.three,
												listValue: "Increase damage dealt by 10% for each enemy within 6 meters, up to maximum 30%.",
											},
											{
												listId: 4,
												listKey: tofModus.stars.four,
												listValue: "Increase the current weapon`s base ATK growth by 32%.",
											},
											{
												listId: 5,
												listKey: tofModus.stars.five,
												listValue: "Increase damage dealt againts HP shields or shielded enemies by 100%.",
											},
											{
												listId: 6,
												listKey: tofModus.stars.six,
												listValue: "Increase damage dealt by 10% for each enemy slain for 30 seconds. Stack up to 3 times.",
											},
										],
									},
								},
							},
							{
								fullId: 6,
								model: "KeyValueTitle",
								metadata: {
									keyValueTitle: {
										title: tofHead.awakeningTraits,
										lists: [
											{
												listId: 1,
												listKey: tofModus.awakeningTraits.phaseOne,
												listValue: "Every 7 enemies killed by KING restores HP equall to 8% of Max HP.",
											},
											{
												listId: 2,
												listKey: tofModus.awakeningTraits.phaseTwo,
												listValue: "Every 5 enemies killed by KING restores HP equall to 10% of Max HP.",
											},
										],
									},
								},
							},
						],
					},
					{
						contentId: 2,
						contentName: tofSimulacra.crow.name,
						contentImg: image.crowImg,
						contentFull: [
							{
								fullId: 1,
								model: "TofWeapon",
								metadata: {
									weaponName: tofSimulacra.crow.weaponName,
									weaponImg: image.thunderbladesImg,
								},
							},
							{
								fullId: 2,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tofModus.grade.title,
											metaValue: tofModus.grade.ssr,
										},
										{
											metaId: 2,
											metaName: tofModus.typeTitle,
											metaValue: tofModus.type,
										},
									],
								},
							},
							{
								fullId: 3,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: null,
										lists: [
											{
												listId: 1,
												listKey: tofHead.resonance,
												listValue: tofModus.resonance.dps,
											},
											{
												listId: 2,
												listKey: tofHead.element,
												listValue: tofModus.element.volt,
											},
											{
												listId: 3,
												listKey: tofHead.shatter,
												listValue: "6.00",
											},
											{
												listId: 4,
												listKey: tofHead.charge,
												listValue: "8.00",
											},
										],
									},
								},
							},
							{
								fullId: 4,
								model: "TwoText",
								metadata: {
									twoText: {
										title: tofHead.weaponEffect,
										lists: [
											{
												listId: 1,
												listKey: tofModus.element.volt,
												listValue: "When the weapon is fully charged, the next attack will paralie target for 1 second and electrify them fro 6 seconds, negating all buffs and dealing damage equal to 144.00% of ATK. Targets can't receive any buffs for the next 6 second",
											},
										],
									},
								},
							},
							{
								fullId: 5,
								model: "KeyValueTitle",
								metadata: {
									keyValueTitle: {
										title: tofHead.advancement,
										lists: [
											{
												listId: 1,
												listKey: tofModus.stars.one,
												listValue: "Attacking targets from behind increase crit rate of all dual blades attack by 40%. backstabbing an electrified target increase crit rate by 100% and crit damage by 30%.",
											},
											{
												listId: 2,
												listKey: tofModus.stars.two,
												listValue: "Increase the current weapon's base ATK growth by 16%.",
											},
											{
												listId: 3,
												listKey: tofModus.stars.three,
												listValue: "Increase damage by 30% to target with less than 60% HP.",
											},
											{
												listId: 4,
												listKey: tofModus.stars.four,
												listValue: "Increase the current weapon`s base HP growth by 32%.",
											},
											{
												listId: 5,
												listKey: tofModus.stars.five,
												listValue: "Triggering Back Attack grants a 100% crit chance for the next 4 second and increase crit damage by 50%. Cooldown 10 second.",
											},
											{
												listId: 6,
												listKey: tofModus.stars.six,
												listValue: "After using a skill, increase volt damage dealt to the target by 20% for 20 seconds.",
											},
										],
									},
								},
							},
							{
								fullId: 6,
								model: "KeyValueTitle",
								metadata: {
									keyValueTitle: {
										title: tofHead.awakeningTraits,
										lists: [
											{
												listId: 1,
												listKey: tofModus.awakeningTraits.phaseOne,
												listValue: "When Crow is not in the team, increase damage dealt by 6% adn reduce damage received by 4%.",
											},
											{
												listId: 2,
												listKey: tofModus.awakeningTraits.phaseTwo,
												listValue: "When Crow is not in the team, increase damage dealt by 10% adn reduce damage received by 6%. When Crow enters combat, increase damage dealt by 12% for 12 seconds",
											},
										],
									},
								},
							},
						],
					},
					{
						contentId: 3,
						contentName: tofSimulacra.zero.name,
						contentImg: image.zeroImg,
						contentFull: [
							{
								fullId: 1,
								model: "TofWeapon",
								metadata: {
									weaponName: tofSimulacra.zero.weaponName,
									weaponImg: image.negatingCubeImg,
								},
							},
							{
								fullId: 2,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tofModus.grade.title,
											metaValue: tofModus.grade.ssr,
										},
										{
											metaId: 2,
											metaName: tofModus.typeTitle,
											metaValue: tofModus.type,
										},
									],
								},
							},
							{
								fullId: 3,
								model: "KeyValue",
								metadata: {
									keyValue: {
										title: null,
										lists: [
											{
												listId: 1,
												listKey: tofHead.resonance,
												listValue: tofModus.resonance.support,
											},
											{
												listId: 2,
												listKey: tofHead.element,
												listValue: tofModus.element.flame,
											},
											{
												listId: 3,
												listKey: tofHead.shatter,
												listValue: "5.00",
											},
											{
												listId: 4,
												listKey: tofHead.charge,
												listValue: "13.00",
											},
										],
									},
								},
							},
							{
								fullId: 4,
								model: "TwoText",
								metadata: {
									twoText: {
										title: tofHead.weaponEffect,
										lists: [
											{
												listId: 1,
												listKey: tofModus.element.flame,
												listValue: "Fully charged weapons will set the target on fire for 8 seconds with the next attack, causing ongoing damage of 58.00% of attack every second. Ignited targets receive 50% eficacy from healing.",
											},
										],
									},
								},
							},
							{
								fullId: 5,
								model: "KeyValueTitle",
								metadata: {
									keyValueTitle: {
										title: tofHead.advancement,
										lists: [
											{
												listId: 1,
												listKey: tofModus.stars.one,
												listValue: "Deal damage and produce a healing orb, which last for 20 seconds and restore HP of any teammate who picks it up equal to 60% ATK. 2 second cooldown..",
											},
											{
												listId: 2,
												listKey: tofModus.stars.two,
												listValue: "Increase the current weapon's base ATK growth by 16%.",
											},
											{
												listId: 3,
												listKey: tofModus.stars.three,
												listValue: "Reduce skill cooldown from 60 seconds to 30 seconds. restore HP equal to 30% of ATK every second while the shield is active.",
											},
											{
												listId: 4,
												listKey: tofModus.stars.four,
												listValue: "Increase the current weapon`s base HP growth by 32%.",
											},
											{
												listId: 5,
												listKey: tofModus.stars.five,
												listValue: "Damagin a target also produces a damage orb, which last for 20 seconds and increase all damage and healing of any teammate who picks it up by 2% for 30 seconds. Stack up to 10 times. skill cooldown is 2.5 seconds.",
											},
											{
												listId: 6,
												listKey: tofModus.stars.six,
												listValue: "Using a skill grants allies haling orbs and damage orbs equal to the number of Omnium Cubes.",
											},
										],
									},
								},
							},
							{
								fullId: 6,
								model: "KeyValueTitle",
								metadata: {
									keyValueTitle: {
										title: tofHead.awakeningTraits,
										lists: [
											{
												listId: 1,
												listKey: tofModus.awakeningTraits.phaseOne,
												listValue: "When zero uses a weapon skill, reduce cooldown time for Relics in cooldown by 1.5 seconds. Can only activate for the same weapon 1 time every 5 seconds.",
											},
											{
												listId: 2,
												listKey: tofModus.awakeningTraits.phaseTwo,
												listValue: "When zero uses a weapon skill, reduce cooldown time for Relics in cooldown by 3 seconds. Can only activate for the same weapon 1 time every 5 seconds.",
											},
										],
									},
								},
							},
						],
					},
				],
			},
			{
				itemId: 2,
				itemName: 'Matrix',
				itemLogo: 'none',
				itemContents: [
					{
						contentId: 1,
						contentName: tofSimulacra.king.name,
						contentImg: image.kingMatrixImg,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tofModus.grade.title,
											metaValue: tofModus.grade.ssr,
										},
										{
											metaId: 2,
											metaName: tofModus.typeTitle,
											metaValue: tofModus.typeMatrix,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "TwoText",
								metadata: {
									twoText: {
										title: null,
										lists: [
											{
												listId: 1,
												listKey: tofHead.sets.twoPieces,
												listValue: 'When a target is shattered, grant 8%/10%/12%/14% damage boost for 15 seconds. Only the highest level is applied when the effect is obtained repeatedly.',
											},
											{
												listId: 2,
												listKey: tofHead.sets.fourPieces,
												listValue: 'When there are more than 2 enemies arround, hits restore HP equal to 14%/18%/22%/26% of damage dealt upon attacking. the maximum HP restored every 0.5 seconds must not exceed 36%/42%/48%/54% of ATK.',
											},
										],
									},
								},
							},
						],
					},
					{
						contentId: 2,
						contentName: tofSimulacra.crow.name,
						contentImg: image.crowMatrixImg,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tofModus.grade.title,
											metaValue: tofModus.grade.ssr,
										},
										{
											metaId: 2,
											metaName: tofModus.typeTitle,
											metaValue: tofModus.typeMatrix,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "TwoText",
								metadata: {
									twoText: {
										title: null,
										lists: [
											{
												listId: 1,
												listKey: tofHead.sets.twoPieces,
												listValue: 'Increase crit damage to targets with less than 60% HP by 24%/30%/36%/42%.',
											},
											{
												listId: 2,
												listKey: tofHead.sets.fourPieces,
												listValue: 'Crits deal additional damage over time equal to 18%/22%/26%/30% of ATK every second for 5 second. Does not stack.',
											},
										],
									},
								},
							},
						],
					},
					{
						contentId: 3,
						contentName: tofSimulacra.zero.name,
						contentImg: image.zeroMatrixImg,
						contentFull: [
							{
								fullId: 1,
								model: "KeyValueMeta",
								metadata: {
									meta: [
										{
											metaId: 1,
											metaName: tofModus.grade.title,
											metaValue: tofModus.grade.ssr,
										},
										{
											metaId: 2,
											metaName: tofModus.typeTitle,
											metaValue: tofModus.typeMatrix,
										},
									],
								},
							},
							{
								fullId: 2,
								model: "TwoText",
								metadata: {
									twoText: {
										title: null,
										lists: [
											{
												listId: 1,
												listKey: tofHead.sets.twoPieces,
												listValue: 'Upon using a discharge skill to switch to the current weapon, gain a shield equal to 150%/200%/250%/300% of ATK for 6 seconds.',
											},
											{
												listId: 2,
												listKey: tofHead.sets.fourPieces,
												listValue: 'While the shield is active, you and your teammates deal 16%/20%/24%/28% more damage.',
											},
										],
									},
								},
							},
						],
					},
				],
			},
		],
	},
]

export default yutuberBangDB;