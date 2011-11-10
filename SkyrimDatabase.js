// Function to create object to store perks (constructor)
function Perk(argPerkNumber, argPerkName, argPerkDescription, argRequiredPerkOne, argRequiredPerkTwo, argMinLevel) {
    this.PerkNumber = argPerkNumber;
    this.PerkName = argPerkName;
    this.PerkDescription = argPerkDescription;
    this.RequiredPerkOne = argRequiredPerkOne;
    this.RequiredPerkTwo = argRequiredPerkTwo;
    this.MinLevel = argMinLevel;
}

// Array of all Perk Names
var currentNumberPerks = 0;
var PerkNames = new Array();

PerkNames[1] = "One-Handed";
PerkNames[2] = "Two-Handed";
PerkNames[3] = "Block";
PerkNames[4] = "Smithing";
PerkNames[5] = "Heavy Armor";
PerkNames[6] = "Archery";

PerkNames[7] = "Restoration";
PerkNames[8] = "Destruction";
PerkNames[9] = "Alteration";
PerkNames[10] = "Illusion";
PerkNames[11] = "Conjuration";
PerkNames[12] = "Enchanting";

PerkNames[13] = "Light Armor";
PerkNames[14] = "Sneak";
PerkNames[15] = "Lockpicking";
PerkNames[16] = "Pickpocket";
PerkNames[17] = "Speech";
PerkNames[18] = "Alchemy";



// Array off all perks - perk skill number is 100* Perk number + n 
var AllPerks = new Array();

// 1-Armed
// 1-Armed

// 1-Armed

AllPerks[100] = new Perk(100, "Armsman - Level 1 (Novice)", "One-handed weapons do 20% more damage.", -1, 0, 20);
AllPerks[101] = new Perk(101, "Armsman - Level 2 (Apprentice)", "One-handed weapons do 40% more damage.", 100, 0, 40);
AllPerks[102] = new Perk(102, "Armsman - Level 3 (Adept)", "One-handed weapons do 60% more damage.", 101, 0, 60);
AllPerks[103] = new Perk(103, "Armsman - Level 4 (Expert)", "One-handed weapons do 80% more damage.", 102, 0, 80);
AllPerks[104] = new Perk(104, "Armsman - Level 5 (Master)", "One-handed weapons do 100% more damage.", 103, 0, 100);
AllPerks[105] = new Perk(105, "Hack and Slash Level 1", "War axes cause extra bleeding damage", 100, 0, 30);
AllPerks[106] = new Perk(106, "Hack and Slash Level 2", "War axes cause extra bleeding damage", 105, 0, 60);
AllPerks[107] = new Perk(107, "Hack and Slash Level 3", "War axes cause extra bleeding damage", 106, 0, 90);
AllPerks[108] = new Perk(108, "Fighting Stance", "Power attacks cost 25% less stamina.", 100, 0, 20);
AllPerks[109] = new Perk(109, "Savage Strike", "Standing power attacks do 25% bonus/chance for decapitation.", 108, 0, 50);
AllPerks[110] = new Perk(110, "Critical Charge", "Sprinting power attacks do double critical damage.", 108, 0, 50);
AllPerks[111] = new Perk(111, "Parazlying Strike", "Backward power attack has 25% chance to paralyze.", 109, 110, 100);
AllPerks[112] = new Perk(112, "Bone Breaker Level 1", "Maces ignore 25% of armor.", 100, 0, 30);
AllPerks[113] = new Perk(113, "Bone Breaker Level 2", "Maces ignore 50% (???) of armor.", 112, 0, 60);
AllPerks[114] = new Perk(114, "Bone Breaker Level 3", "Maces ignore 75% (???) of armor.", 113, 0, 90);
AllPerks[115] = new Perk(115, "Bladesman Level 1", "Swords have 10% chance of doing critical damage.", 100, 0, 30);
AllPerks[116] = new Perk(116, "Bladesman Level 2", "Swords have 15% chance of doing critical damage.", 115, 0, 60);
AllPerks[117] = new Perk(117, "Bladesman Level 3", "Swords have 20% (???) chance of doing critical damage.", 116, 0, 90);
AllPerks[118] = new Perk(118, "Dual Fury 1", "Dual wielding attacks are 20% faster", 100, 0, 30);
AllPerks[119] = new Perk(119, "Dual Fury 2", "Dual wielding attacks are 40% (???) faster", 118, 0, 60);
AllPerks[120] = new Perk(120, "Dual Fury 3", "Dual wielding attacks are 60% (???) faster", 119, 0, 90);
AllPerks[121] = new Perk(121, "Dual Savagery", "Dual wielding attacks do 50% bonus damage", 118, 0, 70);

// Two Handed

AllPerks[200] = new Perk(200, "Barbarian - Level 1 (Novice)", "Two-handed weapons do 20% more damage.", -1, 0, 20);
AllPerks[201] = new Perk(201, "Barbarian - Level 2 (Apprentice)", "Two-handed weapons do 40% more damage.", 200, 0, 40);
AllPerks[202] = new Perk(202, "Barbarian - Level 3 (Adept)", "Two-handed weapons do 60% more damage.", 201, 0, 60);
AllPerks[203] = new Perk(203, "Barbarian - Level 4 (Expert)", "Two-handed weapons do 80% more damage.", 202, 0, 80);
AllPerks[204] = new Perk(204, "Barbarian - Level 5 (Master)", "Two-handed weapons do 100% more damage.", 203, 0, 100);
AllPerks[205] = new Perk(205, "Limbsplitter 1", "Battle axes do extra bleeding damage", 200, 0, 30);
AllPerks[206] = new Perk(206, "Limbsplitter 2", "Battle axes do extra bleeding damage", 205, 0, 60);
AllPerks[207] = new Perk(207, "Limbsplitter 3", "Battle axes do extra bleeding damage", 206, 0, 90);
AllPerks[208] = new Perk(208, "Deep Wounds 1", "Greatswords have 10% chance of doing critical damage.", 200, 0, 30);
AllPerks[209] = new Perk(209, "Deep Wounds 1", "Greatswords have 15% chance of doing critical damage.", 208, 0, 60);
AllPerks[210] = new Perk(210, "Deep Wounds 1", "Greatswords have 20% (???) chance of doing critical damage.", 209, 0, 90);
AllPerks[211] = new Perk(211, "Skullcrusher 1", "Warhammers ignore 25% of armor", 200, 0, 30);
AllPerks[212] = new Perk(212, "Skullcrusher 2", "Warhammers ignore 50% of armor", 211, 0, 60);
AllPerks[213] = new Perk(213, "Skullcrusher 3", "Warhammers ignore 75% of armor", 212, 0, 90);
AllPerks[214] = new Perk(214, "Champion's Stance", "Power attacks cost 25% less stamina", 200, 0, 20);
AllPerks[215] = new Perk(215, "Devestating Blow", "Standing power attacks do 25% bonus/chance for decapitation.", 214, 0, 50);
AllPerks[216] = new Perk(216, "Great Critical Damage", "Sprinting power attacks do double critical damage.", 214, 0, 50);
AllPerks[217] = new Perk(217, "Sweep", "Sideways power attacks hit all targets in front of you.", 215, 216, 70);
AllPerks[218] = new Perk(218, "Warmaster", "Backward power attack has 25% chance to paralyze.", 217, 0, 100);

// Block

AllPerks[300] = new Perk(300, "Shield Wall 1 (Novice)", "Blocking is 20% more effective.", -1, 0, 20);
AllPerks[301] = new Perk(301, "Shield Wall 1 (Apprentice)", "Blocking is 40% more effective.", 300, 0, 40);
AllPerks[302] = new Perk(302, "Shield Wall 1 (Adept)", "Blocking is 60% more effective.", 301, 0, 60);
AllPerks[303] = new Perk(303, "Shield Wall 1 (Expert)", "Blocking is 80% more effective.", 302, 0, 80);
AllPerks[304] = new Perk(304, "Shield Wall 1 (Master)", "Blocking is 100% more effective.", 303, 0, 100);
AllPerks[305] = new Perk(305, "Quick Reflexes", "Time slows down if blocking power attack.", 300, 0, 30);
AllPerks[306] = new Perk(306, "Deflect Arrows", "Arrows blocked by shield do no damage.", 300, 0, 30);
AllPerks[307] = new Perk(307, "Elemental Protection", "Blocking with shield reduces fire/frost/shock by 50%", 306, 0, 50);
AllPerks[308] = new Perk(308, "Block Runner", "Move faster with shield raised.", 307, 0, 70);
AllPerks[309] = new Perk(309, "Power Bash", "Able to do power bash.", 300, 0, 30);
AllPerks[310] = new Perk(310, "Deadly Bash", "Bash does 5 times more damage.", 309, 0, 50);
AllPerks[311] = new Perk(311, "Bash Disarm", "Chance to disarm when bashing.", 310, 0, 70);
AllPerks[312] = new Perk(312, "Shield Charge", "Sprinting with shield raised knocks down most targets.", 310, 308, 100);

// Smithing

AllPerks[400] = new Perk(400, "Steel Smithing", "Create Steel armor + weapons", -1, 0, 20);
AllPerks[401] = new Perk(401, "Elven Smithing", "Create Elven armor + weapons", 400, 0, 30);
AllPerks[402] = new Perk(402, "Advanced Armors", "Create Scaled + Plate armor", 401, 0, 50);
AllPerks[403] = new Perk(403, "Glass Smithing", "Create Glass armor + weapons", 402, 0, 70);
AllPerks[404] = new Perk(404, "Dwarven Smithing", "Create Dwarven armor + weapons", 400, 0, 30);
AllPerks[405] = new Perk(405, "Orcish Smithing", "Create Orcish armor + weapons", 404, 0, 50);
AllPerks[406] = new Perk(406, "Ebony Smithing", "Create Ebony armor + weapons", 405, 0, 80);
AllPerks[407] = new Perk(407, "Daedric Smithing", "Create Daedric armor + weapons", 406, 0, 90);
AllPerks[408] = new Perk(408, "Dragon Smithing", "Create Dragon armor + weapons", 407, 403, 100);
AllPerks[409] = new Perk(409, "Arcane Blacksmith", "Improve magic armor + weapons", 400, 0, 60);

// Heavy Armor

AllPerks[500] = new Perk(500, "Juggernaut (Novice)", "Armor Rating is 20% higher.", -1, 0, 20);
AllPerks[501] = new Perk(501, "Juggernaut (Apprentice)", "Armor Rating is 40% higher.", 500, 0, 40);
AllPerks[502] = new Perk(502, "Juggernaut (Adept)", "Armor Rating is 60% higher.", 501, 0, 60);
AllPerks[503] = new Perk(503, "Juggernaut (Expert)", "Armor Rating is 80% higher.", 502, 0, 80);
AllPerks[504] = new Perk(504, "Juggernaut (Master)", "Armor Rating is 100% higher.", 503, 0, 100);
AllPerks[505] = new Perk(505, "Fists of Steel", "Unarmed attacks do extra damage based on gauntlet armor rating.", 500, 0, 30);
AllPerks[506] = new Perk(506, "Cushioned", "Half damage from falling if wearing all Heavy armor.", 505, 0, 50);
AllPerks[507] = new Perk(507, "Conditioning", "Heavy Armor weighs nothing + doesn't slow you down.", 506, 0, 70);
AllPerks[508] = new Perk(508, "Well Fitted", "25% if wearing all Heavy armor", 500, 0, 30);
AllPerks[509] = new Perk(509, "Tower of Strength", "50% less stagger when wearing only Heavy Armor", 508, 0, 50);
AllPerks[510] = new Perk(510, "Matching Set", "Additional 25% bonus if wearing matched set.", 509, 0, 70);
AllPerks[511] = new Perk(511, "Reflect Blows", "10% chance to reflect melee damage if wearing all Heavy armor.", 510, 0, 100);

// Archery

AllPerks[600] = new Perk(600, "Overdraw (Novice)", "Bows do 20% more damage.", -1, 0, 20);
AllPerks[601] = new Perk(601, "Overdraw  (Apprentice)", "Bows do 40% more damage.", 600, 0, 40);
AllPerks[602] = new Perk(602, "Overdraw  (Adept)", "Bows do 60% more damage.", 601, 0, 60);
AllPerks[603] = new Perk(603, "Overdraw  (Expert)", "Bows do 80% more damage.", 602, 0, 80);
AllPerks[604] = new Perk(604, "Overdraw  (Master)", "Bows do 100% more damage.", 603, 0, 100);
AllPerks[605] = new Perk(605, "Eagle Eye", "Pressing block while aiming will zoom in your view.", 600, 0, 30);
AllPerks[606] = new Perk(606, "Steady Hand 1", "Zooming Slows time by 25%", 605, 0, 40);
AllPerks[607] = new Perk(607, "Steady Hand 2", "Zooming slows time by 50% (???)", 606, 0, 70);
AllPerks[608] = new Perk(608, "Power Shot", "Stagger all but most powerful 50% of time.", 605, 0, 50);
AllPerks[609] = new Perk(609, "Quick Shot", "Draw bow 50% faster.", 608, 0, 70);
AllPerks[610] = new Perk(610, "Critical Shot 1", "10% chance of critical hit.", 600, 0, 30);
AllPerks[611] = new Perk(611, "Critical Shot 2", "20% (???) chance of critical hit.", 610, 0, 60);
AllPerks[612] = new Perk(612, "Critical Shot 3", "30% (???) chance of critical hit.", 611, 0, 90);
AllPerks[613] = new Perk(613, "Hunter's Discipline.", "Recover twice as many arrows.", 610, 0, 50);
AllPerks[614] = new Perk(614, "Ranger", "Move faster with drawn bow.", 613, 0, 60);
AllPerks[615] = new Perk(615, "Bullseye", "15% of paralyzing for few seconds.", 614, 609, 100);

// Restoration

AllPerks[700] = new Perk(700, "Novice Restoration Proficiency", "Cast Restoration Novice spells for 50% less magicka.", -1, 0, 0);
AllPerks[701] = new Perk(701, "Apprentice Restoration Proficiency", "Cast Restoration Apprentice spells for 50% less magicka.", 700, 0, 25);
AllPerks[702] = new Perk(702, "Adept Restoration Proficiency", "Cast Restoration Adept spells for 50% less magicka.", 701, 0, 50);
AllPerks[703] = new Perk(703, "Expert Restoration Proficiency", "Cast Restoration Expert spells for 50% less magicka.", 702, 0, 75);
AllPerks[704] = new Perk(704, "Master Restoration Proficiency", "Cast Restoration Master spells for 50% less magicka.", 703, 0, 100);
AllPerks[705] = new Perk(705, "Restoration Dual Casting", "Dual casting overcharges Restoration spell effects.", 700, 0, 20);
AllPerks[706] = new Perk(706, "Ward Absorb", "Wards recharge magicka when hit with spells.", 700, 0, 60);
AllPerks[707] = new Perk(707, "Respite", "Healing spells restore Stamina as well.", 700, 0, 40);
AllPerks[708] = new Perk(708, "Regeneration", "Healing spells cure 50% more.", 700, 0, 20);
AllPerks[709] = new Perk(709, "Necromage", "All spells are more effective against undead.", 708, 0, 70);
AllPerks[710] = new Perk(710, "Recovery 1", "Magicka regenerates 25% faster", 700, 0, 30);
AllPerks[711] = new Perk(711, "Recovery 2", "Magicka regenerates 50% (???) faster", 710, 0, 60);
AllPerks[712] = new Perk(712, "Avoid Death", "Autoheal 250 points when health goes below 10% once/day.", 710, 0, 90);

// Destruction

AllPerks[800] = new Perk(800, "Novice Destruction Proficiency", "Cast Destruction Novice spells for 50% less magicka.", -1, 0, 0);
AllPerks[801] = new Perk(801, "Apprentice Destruction Proficiency", "Cast Destruction Apprentice spells for 50% less magicka.", 800, 0, 25);
AllPerks[802] = new Perk(802, "Adept Destruction Proficiency", "Cast Destruction Adept spells for 50% less magicka.", 801, 0, 50);
AllPerks[803] = new Perk(803, "Expert Destruction Proficiency", "Cast Destruction Expert spells for 50% less magicka.", 802, 0, 75);
AllPerks[804] = new Perk(804, "Master Destruction Proficiency", "Cast Destruction Master spells for 50% less magicka.", 803, 0, 100);
AllPerks[805] = new Perk(805, "Destruction Dual Casting", "Dual Destruction casting overcharges the effects.", 800, 0, 20);
AllPerks[806] = new Perk(806, "Impact", "Most spells will stagger opponent when dual cast.", 805, 0, 40);
AllPerks[807] = new Perk(807, "Augmented Flame 1", "Fire spells do 25% more damage", 800, 0, 30);
AllPerks[808] = new Perk(808, "Augmented Flame 2", "Fire spells do 50% more damage", 807, 0, 60);
AllPerks[809] = new Perk(809, "Intense Flames", "Fire damage causes target to flee if health low.", 807, 0, 50);
AllPerks[810] = new Perk(810, "Augmented Frost 1", "Frost spells do 25% more damage", 800, 0, 30);
AllPerks[811] = new Perk(811, "Augmented Frost 2", "Frost spells do 50% more damage", 810, 0, 60);
AllPerks[812] = new Perk(812, "Deep Freeze", "Frost damage paralyzes target if health low.", 810, 0, 60);
AllPerks[813] = new Perk(813, "Augmented Shock 1", "Shock spells do 25% more damage", 800, 0, 30);
AllPerks[814] = new Perk(814, "Augmented Shock 2", "Shock spells do 50% more damage", 813, 0, 60);
AllPerks[815] = new Perk(815, "Disintegrate", "Shock damage disintegrates target if health low.", 813, 0, 70);
AllPerks[816] = new Perk(816, "Rune Master", "Can place runes 5 times farther away.", 801, 0, 40);

// Alteration

AllPerks[900] = new Perk(900, "Novice Alteration Proficiency", "Cast Alteration Novice spells for 50% less magicka.", -1, 0, 0);
AllPerks[901] = new Perk(901, "Apprentice Alteration Proficiency", "Cast Alteration Apprentice spells for 50% less magicka.", 900, 0, 25);
AllPerks[902] = new Perk(902, "Adept Alteration Proficiency", "Cast Alteration Adept spells for 50% less magicka.", 901, 0, 50);
AllPerks[903] = new Perk(903, "Expert Alteration Proficiency", "Cast Alteration Expert spells for 50% less magicka.", 902, 0, 75);
AllPerks[904] = new Perk(904, "Master Alteration Proficiency", "Cast Alteration Master spells for 50% less magicka.", 903, 0, 100);
AllPerks[905] = new Perk(905, "Alteration Dual Casting", "Dual Alteration casting overcharges the effects.", 900, 0, 20);
AllPerks[906] = new Perk(906, "Magic Resistance 1", "Blocks 10% of spells effect", 901, 0, 30);
AllPerks[907] = new Perk(907, "Magic Resistance 2", "Blocks 20% of spells effect", 906, 0, 60);
AllPerks[908] = new Perk(908, "Magic Resistance 3", "Blocks 30% of spells effect", 907, 0, 90);
AllPerks[909] = new Perk(909, "Mage Armor 1", "Protection spells stronger if not wearing armor.", 901, 0, 30);
AllPerks[910] = new Perk(910, "Mage Armor 2", "Protection spells stronger if not wearing armor.", 909, 0, 60);
AllPerks[911] = new Perk(911, "Mage Armor 3", "Protection spells stronger if not wearing armor.", 910, 0, 90);
AllPerks[912] = new Perk(912, "Stability", "Alteration spells have longer duration", 902, 0, 70);
AllPerks[913] = new Perk(913, "Atronach", "Absorb 30% of spells that hit you.", 903, 0, 100);

// Illusion

AllPerks[1000] = new Perk(1000, "Novice Illusion Proficiency", "Cast Illusion Novice spells for 50% less magicka.", -1, 0, 0);
AllPerks[1001] = new Perk(1001, "Apprentice Illusion Proficiency", "Cast Illusion Apprentice spells for 50% less magicka.", 1000, 0, 25);
AllPerks[1002] = new Perk(1002, "Adept Illusion Proficiency", "Cast Illusion Adept spells for 50% less magicka.", 1001, 0, 50);
AllPerks[1003] = new Perk(1003, "Expert Illusion Proficiency", "Cast Illusion Expert spells for 50% less magicka.", 1002, 0, 75);
AllPerks[1004] = new Perk(1004, "Master Illusion Proficiency", "Cast Illusion Master spells for 50% less magicka.", 1003, 0, 100);
AllPerks[1005] = new Perk(1005, "Illusion Dual Casting", "Dual Illusion casting overcharges Illusion effects.", 1000, 0, 20);
AllPerks[1006] = new Perk(1006, "Hypnotic Gaze", "Calm spells work on higher level opponents.", 1000, 0, 30);
AllPerks[1007] = new Perk(1007, "Aspect of Terror", "Fear spells work on higher level opponents.", 1006, 0, 50);
AllPerks[1008] = new Perk(1008, "Rage", "Frenzy work on higher level opponents", 1007, 0, 70);
AllPerks[1009] = new Perk(1009, "Animage", "Illusion works on higher level animals", 1000, 0, 20);
AllPerks[1010] = new Perk(1010, "Kindred Mage", "Illusion works on higher level people", 1009, 0, 40);
AllPerks[1011] = new Perk(1011, "Quiet Casting", "Spells from any school of magic are silent to others.", 1010, 0, 50);
AllPerks[1012] = new Perk(1012, "Master of the Mind", "Spells work on undead, daedra, and automatons", 1011, 1008, 90);

// Conjuration

AllPerks[1100] = new Perk(1100, "Novice Conjuration Proficiency", "Cast Novice Conjuration spells for 50% less magicka.", -1, 0, 0);
AllPerks[1101] = new Perk(1101, "Apprentice Conjuration Proficiency", "Cast Apprentice Conjuration spells for 50% less magicka.", 1100, 0, 25);
AllPerks[1102] = new Perk(1102, "Adept Conjuration Proficiency", "Cast Adept Conjuration spells for 50% less magicka.", 1101, 0, 50);
AllPerks[1103] = new Perk(1103, "Expert Conjuration Proficiency", "Cast Expert Conjuration spells for 50% less magicka.", 1102, 0, 75);
AllPerks[1104] = new Perk(1104, "Master Conjuration Proficiency", "Cast Master Conjuration spells for 50% less magicka.", 1103, 0, 100);
AllPerks[1105] = new Perk(1105, "Dual Conjuration Casting", "Dual casting overcharges Conjuration effects.", 1100, 0, 20);
AllPerks[1106] = new Perk(1106, "Summoner 1", "Summon atronachs/raise undead from farther away.", 1100, 0, 30);
AllPerks[1107] = new Perk(1107, "Summoner 2", "Summon atronachs/raise undead from farther away.", 1106, 0, 60);
AllPerks[1108] = new Perk(1108, "Atromacy", "Double duration for conjured atronachs", 1106, 0, 40);
AllPerks[1109] = new Perk(1109, "Elemental Potency", "Atronachs are 50% more powerful.", 1108, 0, 80);
AllPerks[1110] = new Perk(1110, "Necromancy", "Greater duration for reanimated undead.", 1100, 0, 40);
AllPerks[1111] = new Perk(1111, "Dark Souls", "Reanimated undead have 100 points more health.", 1110, 0, 70);
AllPerks[1112] = new Perk(1112, "Twin Souls", "Summon 2 atronachs/Have 2 reanimated zombies", 1111, 1109, 100);
AllPerks[1113] = new Perk(1113, "Mystic Binding", "Bound weapons do more damage", 1100, 0, 20);
AllPerks[1114] = new Perk(1114, "Soul Stealer", "Bound weapons cast soul trap on targets", 1113, 0, 30);
AllPerks[1115] = new Perk(1115, "Oblivion Binding", "Bansih summoned creatures/Turn raised ones.", 1114, 0, 50);

// Enchanting

AllPerks[1200] = new Perk(1200, "Enchanter 1", "New Enchantments 20% stronger.", -1, 0, 20);
AllPerks[1201] = new Perk(1201, "Enchanter 2", "New Enchantments 40% stronger.", 1200, 0, 40);
AllPerks[1202] = new Perk(1202, "Enchanter 3", "New Enchantments 60% stronger.", 1201, 0, 60);
AllPerks[1203] = new Perk(1203, "Enchanter 4", "New Enchantments 80% stronger.", 1202, 0, 80);
AllPerks[1204] = new Perk(1204, "Enchanter 5", "New Enchantments 100% stronger.", 1203, 0, 100);
AllPerks[1205] = new Perk(1205, "Fire Enchanter", "Fire enchantments on weapons/armor 25% stronger", 1200, 0, 30);
AllPerks[1206] = new Perk(1206, "Frost Enchanter", "Frost enchantments on weapons/armor 25% stronger", 1205, 0, 40);
AllPerks[1207] = new Perk(1207, "Storm Enchanter", "Storm enchantments on weapons/armor 25% stronger", 1206, 0, 50);
AllPerks[1208] = new Perk(1208, "Insightful Enchanter", "Skill enchantments are 25% stronger.", 1200, 0, 50);
AllPerks[1209] = new Perk(1209, "Corpus Enchanter", "Health/Magicka/Stamina enchantes are 25% stronger.", 1208, 0, 70);
AllPerks[1210] = new Perk(1210, "Extra Effect", "Put 2 enchantments on same item.", 1209, 1207, 100);
AllPerks[1211] = new Perk(1211, "Soul Squeezer", "Soul gems provide extra magicka for recharging.", 1200, 0, 20);
AllPerks[1212] = new Perk(1212, "Soul Siphon", "Death blows (only creatures) trap 5% of victims soul.", 1201, 0, 40);

// Light Armor

AllPerks[1300] = new Perk(1300, "Agile Defender 1", "Armor Rating is 20% higher.", -1, 0, 20);
AllPerks[1301] = new Perk(1301, "Agile Defender 2", "Armor Rating is 40% higher.", 1300, 0, 40);
AllPerks[1302] = new Perk(1302, "Agile Defender 3", "Armor Rating is 60% higher.", 1301, 0, 60);
AllPerks[1303] = new Perk(1303, "Agile Defender 4", "Armor Rating is 80% higher.", 1302, 0, 80);
AllPerks[1304] = new Perk(1304, "Agile Defender 5", "Armor Rating is 100% higher.", 1303, 0, 100);
AllPerks[1305] = new Perk(1305, "Custom Fit", "25% bonus if wearing all Light Armor (head/chest/hands/feet)", 1300, 0, 30);
AllPerks[1306] = new Perk(1306, "Unhindered", "Light Armor weighs nothing/doesn't slow you down.", 1305, 0, 50);
AllPerks[1307] = new Perk(1307, "Wind Walker", "Stamina regenerates 50% faster in all Light Armor", 1306, 0, 60);
AllPerks[1308] = new Perk(1308, "Matching Set", "25% bonus if wearing matching set", 1305, 0, 70);
AllPerks[1309] = new Perk(1309, "Deft movement", "10% of avoiding all damage.", 1308, 1307, 100);

// Sneak

AllPerks[1400] = new Perk(1400, "Stealth 1", "20% harder to detect.", -1, 0, 20);
AllPerks[1401] = new Perk(1401, "Stealth 2", "40% harder to detect.", 1400, 0, 40);
AllPerks[1402] = new Perk(1402, "Stealth 3", "60% harder to detect.", 1401, 0, 60);
AllPerks[1403] = new Perk(1403, "Stealth 4", "80% harder to detect.", 1402, 0, 80);
AllPerks[1404] = new Perk(1404, "Stealth 5", "100% harder to detect.", 1403, 0, 100);
AllPerks[1405] = new Perk(1405, "Muffled Movement", "Noise from armor reduced 50%", 1400, 0, 30);
AllPerks[1406] = new Perk(1406, "Light Foot", "Sprinting when sneaking executes forward roll", 1405, 0, 50);
AllPerks[1407] = new Perk(1407, "Slience", "Walking and running does not affect detection", 1406, 0, 70);
AllPerks[1408] = new Perk(1408, "Shadow Warrior", "Crouching stops combat and forces distant opponents to search for target.", 1407, 0, 100);
AllPerks[1409] = new Perk(1409, "Backstab", "Sneak attacks with one-handed weapons do 6x damage.", 1400, 0, 30);
AllPerks[1410] = new Perk(1410, "Deadly Aim", "Sneak attacks with bows do 3x damage.", 1409, 0, 40);
AllPerks[1411] = new Perk(1411, "Assasin's Blade", "Sneak attacks with daggers do 15x damage.", 1410, 0, 50);

// Lockpicking

AllPerks[1500] = new Perk(1500, "Novice Locks", "Novice locks easier to pick.", -1, 0, 0);
AllPerks[1501] = new Perk(1501, "Apprentice Locks", "Apprentice locks easier to pick.", 1500, 0, 25);
AllPerks[1502] = new Perk(1502, "Adept Locks", "Adept locks easier to pick.", 1501, 0, 50);
AllPerks[1503] = new Perk(1503, "Expert Locks", "Expert locks easier to pick.", 1502, 0, 75);
AllPerks[1504] = new Perk(1504, "Master Locks", "Master locks easier to pick.", 1503, 0, 100);
AllPerks[1505] = new Perk(1505, "Quick Hands", "Pick locks without being noticed.", 1500, 0, 40);
AllPerks[1506] = new Perk(1506, "Wax Key", "Automatically get a copy of picked lock if exists.", 1505, 0, 50);
AllPerks[1507] = new Perk(1507, "Golden Touch", "Find more gold in chests", 1502, 0, 60);
AllPerks[1508] = new Perk(1508, "Treasure Hunter", "50% greater chance of finding special treasure.", 1507, 0, 70);
AllPerks[1509] = new Perk(1509, "Locksmith", "Pick starts close to the lock opening position.", 1503, 0, 80);
AllPerks[1510] = new Perk(1510, "Unbreakable", "Lockpicks never break", 1509, 0, 100);

// Pickpocketing

AllPerks[1600] = new Perk(1600, "Light Fingers 1", "20% bonus to pickpocket attempt.", -1, 0, 20);
AllPerks[1601] = new Perk(1601, "Light Fingers 2", "40% bonus to pickpocket attempt.", 1600, 0, 40);
AllPerks[1602] = new Perk(1602, "Light Fingers 3", "60% bonus to pickpocket attempt.", 1601, 0, 60);
AllPerks[1603] = new Perk(1603, "Light Fingers 4", "80% bonus to pickpocket attempt.", 1602, 0, 80);
AllPerks[1604] = new Perk(1604, "Light Fingers 5", "100% bonus to pickpocket attempt.", 1603, 0, 100);
AllPerks[1605] = new Perk(1605, "Night Thief", "+25% chance if victim is asleep.", 1600, 0, 30);
AllPerks[1606] = new Perk(1606, "Poisoned", "Silently harm enemies by placing poison in pockets.", 1605, 0, 40);
AllPerks[1607] = new Perk(1607, "Extra Pockets", "Carrying Capacity increased by 100.", 1605, 0, 50);
AllPerks[1608] = new Perk(1608, "Cutpurse", "Pickpocketing gold is 50% easier.", 1605, 0, 40);
AllPerks[1609] = new Perk(1609, "Keymaster", "Pickpocketing keys almost always works.", 1608, 0, 60);
AllPerks[1610] = new Perk(1610, "Misdirection", "Can pickpocket equiped weapons.", 1609, 0, 70);
AllPerks[1611] = new Perk(1611, "Perfect Touch", "Can pickpocket equiped items.", 1610, 0, 100);

// Speech

AllPerks[1700] = new Perk(1700, "Haggling 1", "Buying/Selling prices are 10% better", -1, 0, 20);
AllPerks[1701] = new Perk(1701, "Haggling 2", "Buying/Selling prices are 20% better", 1700, 0, 40);
AllPerks[1702] = new Perk(1702, "Haggling 3", "Buying/Selling prices are 30% better", 1701, 0, 60);
AllPerks[1703] = new Perk(1703, "Haggling 4", "Buying/Selling prices are 40% better", 1702, 0, 80);
AllPerks[1704] = new Perk(1704, "Haggling 5", "Buying/Selling prices are 50% better", 1703, 0, 100);
AllPerks[1705] = new Perk(1705, "Allure", "10% better prices to opposite sex.", 1700, 0, 30);
AllPerks[1706] = new Perk(1706, "Merchant", "Sell anything to any merchant.", 1705, 0, 50);
AllPerks[1707] = new Perk(1707, "Investor", "Can invest 500 gold with shopkeepers.", 1706, 0, 70);
AllPerks[1708] = new Perk(1708, "Fence", "Barter stolen goods with any merchant you have invested in.", 1707, 0, 90);
AllPerks[1709] = new Perk(1709, "Master Trader", "Every merchant gains 1000 gold for bartering.", 1708, 0, 100);
AllPerks[1710] = new Perk(1710, "Bribery", "Can bribe guards to ignore crimes.", 1700, 0, 30);
AllPerks[1711] = new Perk(1711, "Persuasion", "Persuasion attempts are 30% easier.", 1710, 0, 50);
AllPerks[1712] = new Perk(1712, "Intimidation", "Intimidation is twice as successful.", 1711, 0, 70);

// Alchemy

AllPerks[1800] = new Perk(1800, "Alchemist 1", "Potions/Poisons 20% stronger", -1, 0, 20);
AllPerks[1801] = new Perk(1801, "Alchemist 2", "Potions/Poisons 40% stronger", 1800, 0, 40);
AllPerks[1802] = new Perk(1802, "Alchemist 3", "Potions/Poisons 60% stronger", 1801, 0, 60);
AllPerks[1803] = new Perk(1803, "Alchemist 4", "Potions/Poisons 80% stronger", 1802, 0, 80);
AllPerks[1804] = new Perk(1804, "Alchemist 5", "Potions/Poisons 100% stronger", 1803, 0, 100);
AllPerks[1805] = new Perk(1805, "Physician", "Potions that restore Health/Magicka/Stamina 25% more powerful.", 1800, 0, 20);
AllPerks[1806] = new Perk(1806, "Poisoner", "Poisons are 25% more effective.", 1805, 0, 30);
AllPerks[1807] = new Perk(1807, "Concentrated Poison", "Poisons last for twice as many hits.", 1806, 0, 60);
AllPerks[1808] = new Perk(1808, "Green Thumb", "2 ingredients gathered from plants.", 1807, 0, 70);
AllPerks[1809] = new Perk(1809, "Benfactor", "Beneficial effects have 25% greater magnitude.", 1805, 0, 30);
AllPerks[1810] = new Perk(1810, "Experimenter 1", "Reveal first 2 effects when eating ingredient.", 1809, 0, 50);
AllPerks[1811] = new Perk(1811, "Experimenter 2", "Reveal first 3 effects when eating ingredient.", 1810, 0, 75);
AllPerks[1812] = new Perk(1812, "Experimenter 3", "Reveal all effects when eating ingredient.", 1811, 0, 100);
AllPerks[1813] = new Perk(1813, "Snakeblood", "50% resistance to all poisons.", 1810, 1807, 80);
AllPerks[1814] = new Perk(1814, "Purity", "All negative effects removed from potions;All positive effects removed from poisons.", 1813, 0, 100);


// ======================== Racial Bonus Arrays  =================================
// Arrays are strings of increases based on skill order - array order is by race
var RacialBonuses = new Array();

RacialBonuses[1] = "0,0,0,0,0,0,0,5,5,10,5,5,0,0,0,0,0,0";
RacialBonuses[2] = "0,0,0,0,0,0,5,0,5,0,0,0,5,5,10,5,0,0";
RacialBonuses[3] = "0,0,0,0,0,10,0,0,0,0,0,0,5,5,5,5,0,5";
RacialBonuses[4] = "0,0,0,0,0,0,5,0,5,5,10,0,0,0,0,0,5,5";
RacialBonuses[5] = "0,0,0,0,0,0,0,10,5,5,0,0,5,5,0,0,0,5";
RacialBonuses[6] = "5,0,5,0,5,0,10,5,0,0,0,5,0,0,0,0,0,0";
RacialBonuses[7] = "5,0,0,0,0,5,0,0,0,0,0,0,0,10,5,5,0,5";
RacialBonuses[8] = "5,10,5,5,0,0,0,0,0,0,0,0,5,0,0,0,5,0";
RacialBonuses[9] = "5,5,5,5,10,0,0,0,0,0,0,5,0,0,0,0,0,0";
RacialBonuses[10] = "10,0,5,5,0,5,0,5,5,0,0,0,0,0,0,0,0,0";

// Type Level Focus Array - each array is focus level of skills for selected player type
var PlayerType = new Array();

PlayerType[1] = "10,1,10,8,10,1,8,1,1,1,0,1,1,0,2,0,1,8";
PlayerType[2] = "1,10,1,10,1,8,1,1,8,0,1,8,10,0,1,0,1,1";
PlayerType[3] = "8,0,0,0,0,0,10,10,10,2,2,8,8,1,2,1,1,1";
PlayerType[4] = "1,0,0,0,0,0,10,8,8,10,10,2,8,1,1,0,1,1";
PlayerType[5] = "8,0,1,0,0,8,1,1,1,1,1,1,10,10,1,10,1,8";
PlayerType[6] = "10,0,0,0,1,10,1,1,1,1,1,1,8,10,1,8,1,8";
PlayerType[7] = "2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1";



