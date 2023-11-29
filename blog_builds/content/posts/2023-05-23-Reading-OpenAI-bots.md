---
title: "Reading and Writing Files in Python: Modifiers"
date: 2023-05-23
draft: true
description: How modifiers change what you write
tags: [python, code]
---

---
title: “Turn off the GPT Scraper? In this [Attention] Economy?”
date: 2023-10-02
draft: true
description: Thinking (opinionatedly) about how LLMs can shape our collective attention to the news, and what it means to opt-out of being fodder for text generation. 
tags: [generative models, news]
---

After all the hullabaloo around generative models like ChatGPT, BARD, and others helping their parent companies profit off the intellectual property produced by [news](https://gizmodo.com/content-farms-ai-chatbots-plagiarize-news-nyt-1850770474) [outlets](https://www.theverge.com/2023/8/10/23827316/news-transparency-copyright-generative-ai) (and [artists](https://www.newyorker.com/culture/infinite-scroll/is-ai-art-stealing-from-artists) and [writers](https://www.theatlantic.com/technology/archive/2023/09/books3-database-generative-ai-training-copyright-infringement/675363/) but they are not really in the purview of this post), there seem to be some inklings of legislative action, at least in the U.S. For one, representatives of news outlets regional and local, big and small, [recently met with lawmakers to discuss copyright protections for their work](https://www.axios.com/2023/10/03/news-execs-lobby-lawmakers-ai-protections). This initiative has been led by the News Media Alliance (NMA), who have put out this [very nice and comprehensive document](https://www.newsmediaalliance.org/ai-principles/) with their talking points around the use of news data in generative AI applications. 

To be clear, some organisations involved with the NMA have also inked deals with OpenAI, allowing use of their news archives as training data. This includes the [Associated Press](https://www.ap.org/press-releases/2023/ap-open-ai-agree-to-share-select-news-content-and-technology-in-new-collaboration), and potentially even [Buzzfeed](https://www.theverge.com/2023/1/26/23572834/buzzfeed-using-ai-tools-personalize-generate-content-openai), although the precise nature of these collaborations is [far from clear](https://www.theverge.com/2023/7/13/23793810/openai-associated-press-ai-models). Yet others have chosen a more protective route, opting to automatically block the scrapers for OpenAI’s GPT model. This includes the [New York Times](https://www.theverge.com/2023/8/21/23840705/new-york-times-openai-web-crawler-ai-gpt), who, for one very exciting week in August 2023 even seemed like they were going to sue OpenAI, but are now maybe not? Whether the NYT would win this hypothetical lawsuit or not gets into some interesting questions around fair use, and those interested can read [NPR’s coverage on the matter](https://www.npr.org/2023/08/16/1194202562/new-york-times-considers-legal-action-against-openai-as-copyright-tensions-swirl) to learn more about it. 

What I’m more interested in exploring here is this idea of blocking bots from scraping your content, since this seems like a course of action that several news orgs and bloggers are [adopting](https://techcrunch.com/2023/09/28/medium-hints-at-a-nascent-media-coalition-to-block-ai-crawlers/) or [considering](https://venturebeat.com/ai/openai-launches-web-crawling-gptbot-sparking-blocking-effort-by-website-owners-and-creators/). I’m trying to think through the conditions and caveats imposed by this method of providing news outlets “agency” over their content. Is it actually giving them some control? What do news organisations gain by blocking access to these bots? Also important: what do they lose?  

A disclaimer as you read this: it will come across quite obviously that I believe tech companies using intellectual property created by people and organisations should be more respectful of IP, ask for permission and offer rightful compensation for it. This is not really something I’m contesting or questioning here, just following from what it means to ask for respect (as a creator), or try and offer respect (as a tech company).  

## How bots are blocked + some internet history

A simple explanation that I’m choosing to produce here for the sake of my own understanding when I re-read this in three months, which will probably feel like three years given the rate at which news and research about generative models comes out.

Using the ``` robots.txt``` file for your website, you can control which web crawlers are allowed to access it and index its data. It entails adding in a couple lines of code, which vary depending whether you’re trying to block [GPTbot from OpenAI](https://platform.openai.com/docs/gptbot) from or [Googlebot from Google](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers). If this a little sounds weird, well, it is.

For one, while the practices of using such directives for web crawlers dates back to the 90s, the acknowledgement of these directives by OpenAI and Google for their LLMs is relatively recent (summer/fall 2023). Which means that before this, they were presumably ignoring these files and scraping sites willy-nilly, a practice that also dates back to the 90s ([“almost all bad robots ignore /robots.txt”](http://www.robotstxt.org/faq/blockjustbad.html)). I say “presumably” because at the time of writing this, there is still no real clarity about the training data for GPT 3/4 and BARD/LaMDa, although it is kind of a no-brainer at this point that tons of publicly visible data from online sites and forums is in there. But realistically, what this bots business means is that companies can just get away with scraping data for humongous models and humongous-er profits, without anything necessitating that they recognize or respect site owners’ authority over their own material.  This is not me calling for the legal enforcement of ```robots.txt``` files: the fact that they serve as loose directives rather than binding rules is kind of just part of the fabric of the internet, and it even helps keep [cool stuff like the Internet Archive up-and-running](https://blog.archive.org/2017/04/17/robots-txt-meant-for-search-engines-dont-work-well-for-web-archives/).  

<figure>
 <img style=“float: center; margin: 15px 15px 15px 15px;” src=“../../img/bad_robot.jpg” width=“320” />
 <figcaption> <i> Bad Robot: An image I sketched out on a post it note and hastily scanned. Not as polished as DALLE 3 but honestly more fun to make. </i></figcaption>
</figure>

The problem here is that we need ways of providing people control over their own material that actually _can_ be enforced. And I’m not sure if it necessarily makes sense to do this via the ```robots.txt``` files, because they were not designed for negotiating control over intellectual property. They were designed for informational housekeeping on the internet! [Here’s what the original documentation says](http://www.robotstxt.org/orig.html):

> In 1993 and 1994 there have been occasions where robots have visited WWW servers where they weren’t welcome for various reasons. Sometimes these reasons were robot specific, e.g. certain robots swamped servers with rapid-fire requests, or retrieved the same files repeatedly. In other situations robots traversed parts of WWW servers that weren’t suitable, e.g. very deep virtual trees, duplicated information, temporary information, or cgi-scripts with side-effects (such as voting).
> 
> These incidents indicated the need for established mechanisms for WWW servers to indicate to robots which parts of their server should not be accessed. This standard addresses this need with an operational solution.

What this means is there are several reasons to allow web crawlers on your websites that have nothing to do with being okay with your data feeding a massive generative model -- [you want your site to be indexed by a search engine, check if all the HTML on your site is valid, mirror your websites for archival](http://www.robotstxt.org/faq/kinds.html). Letting companies take advantage of a voluntarily-obeyed system that is clearly intended for a very different purpose than managing IP rights seems like a bad idea. Asking people to play whack-a-mole with different crawlers from different companies, instead of setting up some sort of _standard, enforceable agreements_ that do not rely on the goodwill of a company for respecting people’s IP, especially when these companies have flagrantly not exhibited this goodwill before, seems like a bad idea.

Second, even with the introduction of these flags, the onus is squarely on the site owners to opt out, instead of opting in. This is not ideal in terms of coming across as actually respectful, and is a little bit like trying to get away with something as long as you can, until (sort of) forced to acknowledge it. Other people on the internet have also made this point about opt-in vs. out-out, especially around the use of data tracking and cookies for individual data, so I won’t belabour it too much, but one thing I will say is: part of the reason why LLMs need to be RLHF’d into being well-behaved chatbots is because they’ve been hoovering up data from all corners of the internet, and the tech companies behind them have been hoping that the scale makes up for issues of bad, incorrect, and downright hateful training data. There is some evidence that focusing on increasing data quality can improve [model](https://arxiv.org/abs/2308.12032) [performance](https://arxiv.org/pdf/2112.11446.pdf), and playing little tricks and games with some of your bigger sources of high-quality, training data does not seem like it’s the best bet to make in this context.  

<figure>
 <img style=“float: center; margin: 15px 15px 15px 15px;” src=“../../img/rlhf_acapella.jpg” width=“320" />
 <figcaption> <i>  I keep imagining funny full forms for RLHF because to be honest the actuall full form is a bit boring? </i></figcaption>
</figure>

## “Why would you block our bot? Do you not care about democracy etc. etc.?”

The other thing that is a little strange about this opt-out mechanism is how it’s being framed. I’ll let the the companies do the talking.  

Here’s what [Google’s VP of Trust and Safety had to tell news companies about opting-out](https://web.archive.org/web/20230929023508/https://blog.google/technology/ai/an-update-on-web-publisher-controls/):  

> Today we’re announcing Google-Extended, a new control that web publishers can use to manage whether their sites help improve Bard and Vertex AI generative APIs, including future generations of models that power those products. By using Google-Extended to control access to content on a site, a website administrator can choose whether to help these AI models become more accurate and capable over time. (Sep 28, 2023)

And this is what [GPTbot’s API page says](https://platform.openai.com/docs/gptbot):

> Web pages crawled with the GPTBot user agent may potentially be used to improve future models and are filtered to remove sources that require paywall access, are known to primarily aggregate personally identifiable information (PII), or have text that violates our policies. Allowing GPTBot to access your site can help AI models become more accurate and improve their general capabilities and safety.  (Oct 3, 2023)

The language here is worth paying attention to. _A website administrator can choose whether to help these AI models become more accurate and capable over time_? _Allowing GPTBot to access your site can help AI models become more accurate and improve their general capabilities and safety_? This is a little bit of a rhetorical sleight-of-hand, where again, the onus is on creators to provide their material to companies to make sure the models are true and accurate and right. It also relies on creators believing that the models will be trained regardless of their participation, and this kind of technological determinism is not something that we as readers of these statements should take for granted. Why would you create and deploy these models in critical, user-facing contexts such as news when you don’t think you can ensure they output accurate and high-quality material, without relying on others’ IP? Whose accountability is it to make sure that these models are factually accurate and safe? Is it maybe the people who actually have a stake and an investment when building these models, or the people whose data they kind of just took, without making it transparent that they even did?

Besides, this kind of framing asks creators to put an overwhelming amount of trust in these companies, who are putting this material into models with billions of parameters, with no idea of how it will get flattened and stretched and abstracted and re-animated in output (and also: [plagiarized](https://arxiv.org/abs/2202.07646)). [Gary Marcus calls LLM outputs “an amazing version of pastiche generation”](https://www.nytimes.com/2022/04/15/magazine/ai-language.html), [Ted Chiang says that with an LLM “all you get is an approximation”](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web), and [Simon Willison calls ChatGPT “a calculator for words”](https://simonwillison.net/2023/Apr/2/calculator-for-words/). Now your mileage may vary about whether that’s _all_ that LLMs do, but it’s certain that this is a large part of what they do, which is also reflected in their common uses for document summarization, question answering, rewriting stuff and synonym-hunting, and so on. There is no guarantee that these pastiches, approximations, and calculations that LLMs produce over high-quality news will actually still _consistently_ output factually accurate information, and there is certainly no input sought from the creators to help ensure this accuracy and truth when datasets, models, and applications are crafted using their content.  

One might ask then: well, what do news organisations know about data engineering, model training, or benchmarking that they can offer, even if they are involved in this process? Maybe not much, but I don’t know man, maybe they have ideas to offer about the model inference that all of this engineering, training and benchmarking is in pursuit of i.e. _actually delivering media and information to people_?  

## The crawlers are almost a distraction



- Even if you swithc it off, a lot os already there, you can’t retroactively get companies to delete it. And they will also fight you tooth and nail because deleting your data will entail etensive retraining -- it’s not necessarily mapped to something in the model’s current state.

This is a bit of a distraction, because a lot of the issue is the retrieval of content, and providing it for free, along with possibly-kinda-maybe improving model quality, allows them to put out more info to viewers, allows you to be visible, but also throttles your ad revenue. Where news orgs need to be involved is not just what the model does with their data, but what the application layer does with it! How is inference over it done? How is it served? Attribution? Can it repeat verbatim? That is also not just about ad revenues but about delivering accurate information? And we are having our own debates in the research community about whether these sort of IR-type uses of LLMs are advisable (Bender and Shah), 

## The Ideals of the Internet

- “Once you post it, you don’t own it anymore.”
- Fair but, nowhere on here was also this udea of “Once you post it, I will regurgitate it and feed it to your customer base without adequate provenance and cripple your business model.” Like this is just really hard to anticipate -- the scale at which these models operate is just hard for us to understand! 

- few caveats here

- NMA astutely frames it in terms of several areas of impact
    - one of those is surfacing news, which is where a lot of the big bucks might be because of clickthroughs and stuff
- this is where it gets tricky: what does it mean to pull your data from training models today? search engines are using generative ai to feed suggestions and surface things, and while this is weird and dangerous territory from an information quality and IR perspective, it’s still happening
- so will pulling it be as bad? how do news orgs make an informed decision?






- There’s been lots of problems with BARD and stuff using data from news sites and this reducing clickthroughs for them
- Revenues change with ads and so it’s not surprising that publishers hate this
- Now we have this issue around generative models kind of making it worse because they directly pull the content and generate summaries off of it
- Last week, Google put out a press release telling news publishers they can opt out: