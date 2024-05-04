---
title: "Talk + Responses: Gender Biases in LLM Narratives"
date: 2024-04-02
draft: false
description: Notes on my recent talk and related conversations at Big Local News' annual Story Discovery at Scale conference.
tags: [research, news-industry, talks, generative-ai, bias]
---

Last week I delivered a short talk at [Big Local News](https://biglocalnews.org/#/login)' conference _Story Discovery at Scale 2024_. It was great to be back this year -- 2023 was my first time attending this event, and meeting the groups around Big Local News! I felt like I was going back to a community of people that I now know and understand a little better, and it was nice to have some familiar faces to say hello to and catch up with. They all do incredible work in making tools and datasets available to news organizations that need support!

I gave a talk about the ways in which gender biases can crop up in LLM-generated narratives without prompts suggesting any explicit demographic cues (work under peer review). While not tailored to newsroom applications, I believe bias in narratives is highly relevant as news organizations consider using AI models for summaries, headlines, brainstorming, etc. Ultimately, everything is a narrative.

I am just going to use this space to quickly jot down some of the ideas that other participants at the conferece talked about with me in response to my talk, or along similar themes.  

### On having bias in the training data itself

News organizations seem interested in fine-tuning generative AI models on their own archives -- just to have better fit with their style of doing things and produce more relevant outputs[^1]. But this could require them to audit their own archives more thoroughly for biased or harmful stories, so they don't have such kinds of stories contaminating the training datasets, as a fellow participant told me.  

Methodologically, this is about ensuring high training data quality. It's analogous to exlcuding hate speech fom Reddit in your training data, and clearly data quality matters.  But news also serves an archival function, making past information visible to the public.  Today, I can view [The Atlantic's archive going back to the 1800s](https://www.theatlantic.com/magazine/backissues/?order=asc) to see how public opinion on social issues has evolved. You don't want, say a summary over news coverage on a specific issue in a specific timeframe, to be agnostic to that kind of flux. So I wonder if there are nuanced ways of dealing with complex social issues and controversial events, and their historical representations in training data that doesn't erase the histories of their discourse, but also doesn't replicate biased perspectives.

This is the kind of thing I want to be hopeful about, because I think there are potentially publicly beneficial and technically feasible and super-specific uses for LLMs (e.g., summarization, contextualization of search results w.r.t. queries) for news readers. And having ways to approach the problem I described would be important to actually making these cases work.  

### On system prompts and agents to reduce bias

Another topic of discussion was if providing system prompts to LLMs or using LLM agents (lightly unclear to me what this technically entails) could help reduce bias. The idea is essentially encoding general journalistic values into a prompt such as "You are an unbiased, professional reporter for the ```<```insert esteemed news outlet```>```. Be accurate ..."

**TLDR for what I thought**: It may work? It may not work? How consistently will it work? Will we ever know why it works or it doesn't? Are we okay with not knowing? How much time and effort do we want to spend on this problem? Is it fun, or likely to yield further actionable insight? I have vague answers and optimism about non-prompt interactions.

At the outset of this: Transformer models don't have an ontology of "values" or "facts"[^2]. There's no demonstrable notion of "planning" for their outputs to adhere to these concepts. They operate on conditional probabilities of tokens based on the prompts we feed them. Certain tokens evoke certain associations with others in this way, but that's about it.

From a user perspective, system prompts used to align outputs to specific values are then a misleading "fix". Such a framing can set high expectations about the model outputs, leading to what has been termed [_inappropriate reliance_](https://www.microsoft.com/en-us/research/publication/appropriate-reliance-on-generative-ai-research-synthesis/). Expectations will influence how users perceive the output, the degree of verification/introspection they engage in around it , and what they do with it ultimately. And you want to explicitly design for users making good choices on that front.

From an engineering lens, I also think it's imprecise. With supervised models, we provide classification labels for specific tasks, nudging the model to make particular associations between features and pertinent ontological concepts[^3]. Even then, interpreting what the model actually learns and operationalises is difficult. LLMs are more massive and less intuitive than supervised models, and you can't reliably know what associations prompt terms like "unbiased" or "professional" will trigger. There's just not a very clear or interrogable mapping between input prompts and output token probabilities. This may change in the future as novel explainability techniques are developed, or not.

It's also unclear if a system prompt will consistently lead to similar associations, as these models are non-deterministic and frequently updated. That lack of temporal consistency can be good -- human notions of bias change over time, so training data distributions will shift too. But it is hard to model or intuit about these [shifts in the data](https://en.wikipedia.org/wiki/Concept_drift), and probably harder to communicate that to users. Also probably harder to then design practices and policies to that manipulate those associations. And how much time and resources do we want to spend doing this?  Will this detract from resources and funds to hire and train reporters?

What kind of results this paradigm of interacting with information yields over the longer term are still unclear, I guess it will solidify based on the specific tasks. But I do feel that prompts cannot be our only or major effort at manipulating model outputs to be desirable or aligned to our values[^4]. We need different tools and probes!

[^1]: What is a news organizations _style_ of doing things than an LLM is capturing exactly? What is the variation in how it ways olders versus more recent approaches, philosophies, and themes? What is this latent space capturing and how can we render that more explicit? I don't know -- cool things to consider though! From our [news angle generation study](https://generative-ai-newsroom.com/getting-the-science-and-the-scoop-with-news-angles-from-gpt-3-b1b4fcd7f6b1), I do think LLMs are able to replicate certain ways of framing and emphasizing of subjects in headlines. But we uncovered that because we fine-tuned and prompted for a very specific thing. What else is in there???
[^2]: [Stochastic Parrots](https://dl.acm.org/doi/10.1145/3442188.3445922), yes, and also [this nice paper](https://www.pnas.org/doi/10.1073/pnas.2215907120) summarizing the debate around to make some meta-level arguments on this debate.
[^3]: Actual degree of success there of course also really varying.
[^4]: Amelia Wattengerger actually has an incredible blog post about this concept as a whole, [here](https://wattenberger.com/thoughts/boo-chatbots)!


