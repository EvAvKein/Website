export type valueName = "Transparency" | "Introspection" | "Prudence" | "Discipline" | "Compassion";

export const values: [valueName, string][] = [
	[
		"Transparency",
		"Safety & trust, both personal and social, require forthcoming honesty and truthfulness with one another. Transparency keeps us accountable, expedites conflict-resolution and co-operation, lays bare xenophobia's arbitrary and unpragmatic natures, and frees us from burdens of deceit",
	],
	[
		"Introspection",
		"There's an abundance of variables, internal and external, which tend to interfere with our ability to make optimal decisions. The more we analyze and scrutinize our own assessments and behavior, the less likely it becomes for us to interact with ourselves and our environments in damaging manners",
	],
	[
		"Prudence",
		"We live in a complicated world, possess incomplete knowledge, and frequently confront decisions which affect our wellbeing. The prudence to proactively evaluate the probable consequences of pertinent decisions/precedents, especially when backed by an integrity and openness for reconsideration, has cumulative benefits",
	],
	[
		"Discipline",
		"Without discipline, no introspection or prescriptive statement is worthwhile. Firm control and influence over one's impulses and inclinations, in service of premeditated plans/ethics for wellbeing, is foundational to a civil and mature society",
	],
	[
		"Compassion",
		"Earthly sentients share similar fundamental needs for wellbeing, and there's no justifiable distinction by which to exclude any from equitable care. Ego and xenophobia are an injury to all, perpetrators included, and we can cumulatively help to mend these wounds through compassionate appreciation for our fellow beings",
	],
];

class ValueConnection {
	values: [valueName, valueName];
	text: {title: string; description: string};

	constructor(
		values: ValueConnection["values"],
		textTitle: ValueConnection["text"]["title"],
		textDesc: ValueConnection["text"]["description"]
	) {
		this.values = values;
		this.text = {title: textTitle, description: textDesc};
	}
}

export const valueConnections: ValueConnection[] = [
	new ValueConnection(
		["Transparency", "Introspection"],
		"Confidence is situational, not compulsory",
		"Uncertainty is the default, from which we rummage through life for evidence and patterns towards sufficient/actionable certainty. Dogmatic confidence is a reckless opiate, an infantile substitute for exposing one's notions/capacity to the unknown and accepting that these may prove insufficient"
	),
	new ValueConnection(
		["Transparency", "Prudence"],
		"Be forthcoming with your thought-process",
		"During conflict-resolution (whether interpersonal or technical), it's often helpful to lay bare the priorities, observations, assumptions, and deductions leading to one's current conclusion. Every statement is founded upon a mountain of context, and laying it bare often exposes much simpler resolutions"
	),
	new ValueConnection(
		["Transparency", "Discipline"],
		"Freely admit inadequacy",
		"We're all indefinitely work-in-progress from differing mixes of circumstances, and acknowledging one's internal obstacles/shortcomings is a prerequisite for overcoming them. As long as you're courteous, act to the best of your ability, and readily defer/abstain when necessary, there's no shame in one's imperfections"
	),
	new ValueConnection(
		["Transparency", "Compassion"],
		"Express sincere appreciation",
		"We spend half our waking life on labor and maintenance. As fulfilling as those obligations may sometimes be, we're predisposed to fixate on the things we lack or rather avoid, and genuine and non-indulgent gestures of gratitude help us keep our perspective/priorities in check"
	),
	new ValueConnection(
		["Introspection", "Compassion"],
		"Be your best advocate",
		"Relationships (interpersonal and institutional) inherently require participants to set aside some behaviors, but between civility and subservience is a multi-faceted gradient that plenty would distort to inequitable gains. Being attentive to one's own desires and priorities allows onself to better establish informed consent, thereby settling frictions much more amicably"
	),
	new ValueConnection(
		["Introspection", "Discipline"],
		"Self-improvement is key",
		"A person's inclination to analyze their conduct and counteract future mistakes is their most fundamental skill. Being sincerely, manifestly, and firmly committed to egoless introspection & self-improvement is a prerequisite to true integrity"
	),
	new ValueConnection(
		["Introspection", "Prudence"],
		"Curb your preconceptions",
		"We're all vulnerable to biases, especially those who believe they've transcended it. Take the time to assess your judgements for unprocessed distaste, and do your due dilligence to reach conclusions through as few interpersonal or cultural truisms/proxies as viable"
	),
	new ValueConnection(
		["Prudence", "Compassion"],
		"Spread your compassion equitably",
		"Addressing the plight of the marginalized often results in grief from those who are comfortable in the status-quo and fear that equalization rhetoric/measures would marginalize them. While both groups deserve peace of mind, reactionary distress ought to not veto equity"
	),
	new ValueConnection(
		["Prudence", "Discipline"],
		"Mind your impact",
		"When people allow themselves to litter society feels like a garbage heap, and when people allow themselves to stare indecently society feels like a meat market. One ought to be conscientious of the cumulative toll (whether personal, cultural, or environmental) that their actions would/do contribute to if others similarly indulged"
	),
	new ValueConnection(
		["Discipline", "Compassion"],
		"Be steadfast in your compassion",
		"Angst, indignation, irreverence, and zeal, are (among) impulses which, as invigorating or legitimate as they may feel, are scarcely constructive. One ought to do their part in upholding rehabilitative equanimity, if we are to stop the cycle of becoming the monsters we believe we fight"
	),
];
