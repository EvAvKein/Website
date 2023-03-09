type valueName = "Transparency"|"Introspection"|"Prudence"|"Dicipline"|"Compassion";

const values:[valueName, string][] = [
  ["Transparency", "Safety & trust, both personal and social, require forthcoming honesty and truthfulness with one another. Transparency keeps us accountable, expedites conflict-resolution and co-operation, lays bare xenophobia's arbitrary and unpragmatic natures, and frees us from burdens of deceit"],
  ["Introspection", "There's an abundance of variables, internal and external, which tend to interfere with our ability to make optimal decisions. The more we analyze and scrutinize our own assessments and behavior, the less likely it becomes for us to interact with ourselves and our environments in damaging manners"],
  ["Prudence", "We live in a complicated world, possess incomplete knowledge, and frequently confront decisions which affect our wellbeing. The prudence to proactively evaluate the probable consequences of pertinent decisions/precedents, especially when backed by an integrity and openness for reconsideration, has cumulative benefits"],
  ["Dicipline", "Without dicipline, no introspection or prescriptive statement is worthwhile. Firm control and influence over one's impulses and inclinations, in service of premeditated plans/ethics for wellbeing, is foundational to a civil and mature society"],
  ["Compassion", "Earthly sentients share similar fundamental needs for wellbeing, which are much easier and more sustainable to fulfill through co-operation than competition. Ego and xenophobia are an injury to all, perpetrators included, and we can cumulatively help to mend these wounds through compassionate appreciation for our fellow beings"],
];

class ValueConnection {
  values:[valueName, valueName];
  text: {title:string, description:string};

  constructor(values:ValueConnection["values"], textTitle:ValueConnection["text"]["title"], textDesc:ValueConnection["text"]["description"]) {
    this.values = values;
    this.text = {title: textTitle, description: textDesc};
  };
};

const valueConnections:ValueConnection[] = [
  new ValueConnection(["Transparency", "Introspection"], "Voice your comprehension", "During conflict-resolution (whether interpersonal or technical), proactively voice realizations: This helps others form a more complete understanding of the problem, grants them opportunities to provide useful/complementary insights, and cultivates a culture where perspectives are not finalized or shackled by ego"),
  new ValueConnection(["Transparency", "Prudence"], "Be forthcoming with your thought-process", "During conflict-resolution (whether interpersonal or technical), it's often helpful to lay bare the priorities, observations, assumptions, and deductions leading to one's current conclusion. Every statement is founded upon a mountain of context, and laying it bare often exposes much simpler resolutions"),
  new ValueConnection(["Transparency", "Dicipline"], "Freely admit inadequacy", "We're all indefinitely work-in-progress from differing mixes of circumstances, and acknowledging one's internal obstacles/shortcomings is a prerequisite for overcoming them. As long as you're courteous, act to the best of your ability, and readily defer/abstain when necessary, there's no shame in one's imperfections"),
  new ValueConnection(["Transparency", "Compassion"], "Don't let transparency become verbosity", "Circumstances often don't permit the time/patience necessary for comprehensive, unambiguous transparency and the dialogue it's liable to prompt. Practice the requisite social awareness to regulate one's transparency based on contextual consent, prioritizing explicit consent when provided/proper"),
  new ValueConnection(["Introspection", "Compassion"], "Nurture yourself", "Treat yourself from the perspective of a paragon parent/guardian: Constructively steering you(rself) towards personal growth and long-term wellbeing, while maintaining sources of comfort for times of need/rest"),
  new ValueConnection(["Introspection", "Dicipline"], "Self-improvement is key", "A person's inclination to analyze their conduct and counteract future mistakes is their most fundamental skill. Being sincerely, manifestly, and firmly committed to egoless introspection & self-improvement is a prerequisite to true integrity"),
  new ValueConnection(["Introspection", "Prudence"], "Mind your biases", "We're all vulnerable to biases, especially those who believe they're immune. Take the time to assess your judgements and assumptions for unsubstantiated, detrimental, or otherwise unchecked generalizations/distaste"),
  new ValueConnection(["Prudence", "Compassion"], "Spread your compassion equitably", "Addressing the plight of the marginalized often results in grief from those who are comfortable in the status-quo and fear equalization rhetoric/measures are marginalizing them. While both groups deserve peace of mind, reactionary distress ought to not veto equity"),
  new ValueConnection(["Prudence", "Dicipline"], "Don't be complicit in injustice", "It's one's moral duty to, in as many cases as viable and constructive, intervene when observing unjust acts/circumstances. The world becomes a better place when we proactively make it so, and it regresses when we lose that volition"),
  new ValueConnection(["Dicipline", "Compassion"], "Be steadfast in your compassion", "As intoxicating as it may be to get swept-up in angst, irreverence, indignation, or zeal, none of these mentalities are well-suited for constructive conduct between people"),
];

export {
  values,
  valueConnections
};