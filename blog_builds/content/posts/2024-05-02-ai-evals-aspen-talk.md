---
title: "Talk + Responses: Blueprints for Evaluating AI in Journalism"
date: 2024-05-03
draft: false
description: Notes on a recent talk and related conversations at Aspen Digital's AI & News event.
tags: [research, news-industry, human-computer-interaction, talks]
---

Yesterday I delivered a short talk at Aspen Digital's event called _AI & News: Charting the Course_. It was hosted at the Ford Foundation Center for Social Justice in NYC, which is a really pretty venue. They have so many trees inside! And also apprently: birds[^1]! Here's the [slide deck](/pdfs/2024-aspen-talk.pdf) for this talk, made under a certain degree of sleep deprivation-based duress and fever brain.

<figure>
 <img style="float: center; margin: 15px 15px 15px 15px;" src="/img/ford_foundation_trees.jpg" width="50%" />
 <figcaption> <i> Pretty trees! </i></figcaption>
</figure>

This was a really fun time for me for a bunch of reasons. First, this was my first time describing our recent [CHI workshop paper](https://arxiv.org/abs/2403.17911) on the topic of LLM evaluation in journalism, and to an audience of people actually present in these newsrooms. Exciting in its own right! Second, this then led to a bunch of interesting conversations about what people thought was important to evaluate, and some of the challenges they were encountering when thinking about evaluation. Third, I learnt a lot (a LOT!) about how some decision-makers in the newsroom are approaching this really uncertain tech, its relationship to their intellectual property, and its potential impacts on their role in the information ecosystem.  

### On Evaluation Itself

The event was under Chatham House rules, so I can only paraphrase here what I heard. My feeling from listening to the talks and panels is that the evaluation of LLMs (and allied systems) still bears uncertainty because newsrooms are still figuring out the specific use-cases where generative AI systems are consistent, reliable, and trustworthy. It makes sense that evaluation is hard to think about when you don't have some concrete use-cases nailed down.

More practically, news outlets are also worried about losing readers' trust and subscriptions with experiments that go awry, which makes sense given [where the American news industry stands today](https://www.pewresearch.org/short-reads/2023/11/15/more-americans-are-getting-news-on-tiktok-bucking-the-trend-seen-on-most-other-social-media-sites/). However, I'm not entirely sure whether trying to avoid audience loss with bad AI interventions is the same as trying to create tangible audience benefits with good AI interventions. And I'm also uncertain about how efforts toward either end exactly work in newsrooms are differentiated. Additionally, outlets are also weighing the value propositions of partnerships with different AI companies as they think about software vendors, and about licensing their own data for model training even[^2].  

I also heard accounts of approaching AI use-cases based on the values in their newsrooms, which is good for a [number](https://mitpress.mit.edu/9780262039536/value-sensitive-design/) [of](https://dl.acm.org/doi/10.1145/3419249.3420105) [well-documented](https://dl.acm.org/doi/10.1145/3625252) [reasons](https://dl.acm.org/doi/10.1145/3632297), so yay! It would be nice if such specific values drive not just evaluation of the final AI system/interface, but even of what is seen as a good use-case + prototyping towards it.  

### On Incentives for Different Evaluation Strategies

The other part of this is also: what we're talking about in the workshop paper isn't really new, but rather the same set of concerns -- about evaluating _any sociotechnical intervention_ -- just applied to a new set of technologies[^3]. This then raises the question of how willing newsrooms will actually be to invest in our proposed context/value-sensitive evaluation approaches for AI systems, when they can potentially fall back on more familiar metrics they've primarily used to evaluate previous tech interventions (e.g., CTR for recommendation engines or efficiency metrics for CMS changes).

And to be clear -- I don't think relying solely on those old metrics is a good idea anymore (if it ever really was before). But what factors would motivate news orgs to adopt these more comprehensive, context/value-sensitive evaluation approaches, when they didn't always prioritize such rigor for older ML interventions? What's the incentive to undertake this more resource-intensive and conceptually harder work that we're proposing?

I think it depends on what concerns they choose to center. This ties back to the audience loss (i.e. revenue) versus audience benefit argument from before. Like, are newsrooms primarily looking at AI evaluation as a way to inform business decisions – deciding which vendors to partner with, whether to use open-source models, etc.? Or is the goal really to assess whether this tech tangibly benefits the communities they serve? Maybe it just depends on who you ask within the org? Maybe they can strike a healthy balance between both perspectives? I'd like to be optimistic about that.

Incentive can also be influenced by what's out there for people to use and draw from, and this is where I think academics like us can contribute by actually putting out open-source evaluation suites for specific news tasks, contexts, and values. Obviously, this won't solve everything, because qualitative evaluations are equally important in determining appropriate applications. But providing these open evaluation resources could help nudge newsrooms in the right direction.

### On the Types of Use-cases Under Consideration

What did emerge: newsrooms and tech companies are talking about scoped, low-risk and non-chatbot type applications (yay!). Not everyone and not all of the time, but also, a non-zero number. These applications can involve using AI models for glue work or grunt work. What exactly qualifies under these "grunt work" categories and who helpds define that is less clear to me, although a couple of interesting examples such as communicating with readers or classifying certain kinds of harmful/hateful text were mentioned.

There also seems to be a bit of a divide in who is actually more enthusiastic about AI use-cases in general, and also in whether they are jazzed about current glue-work uses or _eventual_ fancy creativity support tools. Local newsrooms seem to face more friction in adopting or approaching these tools, not least because they often serve a very specific community-building function wherever they operate, so determining the role/utility of AI is harder. Their reporting tends to be very people-driven, e.g., [the Documenters network](https://www.documenters.org).

Of those local news orgs that are dabbling with AI, it does sound like they are focused much more on using it to do whatever glue work it takes to scale their existing work to reach more people in their community. As opposed to, say, developing entirely new media formats or creativity support tools, which seems more of interest to bigger outlets. Lots of credit here to groups like [The Associated Press](https://www.ap.org/solutions/artificial-intelligence/local-news-ai/) and [The American Journalism Project](https://www.theajp.org/news-insights/announcements/american-journalism-project-announces-new-partnership-with-openai-to-support-local-news/) who are out there, trying to help local newsrooms build their own AI tools for their scoped and specific use-cases.

### Closing Notes  

I have many more thoughts and ideas from this event that I'm still working through. Being in these rooms with people who make decisions in newsrooms was incredibly insightful as I think about what different stakeholders consider when evaluating emerging tools and technologies for their organizations. Lots to reflect on.  

[^1]: I was alerted to this fact by one of my fellow conference attendees, but alas, could not find time to go look for them.
[^2]: This is perhaps the highest ratio of business jargon to normal words in any sentence I have ever written.  
[^3]: Because the new tech works differently, poses new challenges in its non-deterministic outputs and potential for environmental, labor, and economic havoc, etc. etc.
