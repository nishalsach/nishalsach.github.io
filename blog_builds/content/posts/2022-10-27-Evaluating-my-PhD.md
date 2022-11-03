---
title: "Two Years into the PhD: Thoughts and Half-thoughts"
date: 2022-10-27
draft: false
description: Reflecting on two years of trying (and sometimes succeeding) to do impactful research
tags: [research, human-computer interaction]
---

One thing I did not (really, truly, practically) take into consideration when I started doing the PhD was how **difficult** it would be. I learnt soon enough, of course. But you know that joke -- that the best time to be in a PhD program is the summer before it begins, when you impress everyone by telling them you're going to get a PhD without having to actually do anything for it? That was me, through and through. Incredibly optimistic, and very excited to finally have the **time** -- god, so much time! -- to ask cool, impactful questions about the world and work towards answering them. 

<figure>
 <img style="float: center; margin: 15px 15px 15px 15px;" src="../../img/phd_comics_year.png" width="320" />
 <figcaption> <i>And after that summer you're just having this conversation with people again and again and again ... <br> Source: <a href="https://phdcomics.com/comics/archive.php?comicid=1434">PHD Comics</a></i></figcaption>
</figure>

Of course, I'm still excited about these questions and problems that I came in thinking about, but **how I think about my time in academia has changed massively** over the last couple of years. This blog post is as much a way for me to think through some of these changes, as it is a way to externalize my thoughts for others in a way that spurs interesting conversation. 

### What I Do (most of the time, anyway)

For more context, I work within the field of human-computer interaction, and I design machine-learning powered tools/interfaces for information retrieval/organization/contextualization. Specifically, I design tools for science journalists who try and navigate the massive landscape of novel scientific research day after day, as they look for stories to report on. The landscape of scientific research is constantly evolving and expanding (exponentially, in fact[^1]), and **high-quality research that news audiences will benefit from reading takes time to discover, understand, and investigate**. 

In my work, I use machine learning to evaluate scientific articles for "newsworthiness" -- this is the variable of interest for journalists when they look for the news. "Newsworthiness" is multi-faceted for a scientific article - could there be a human interest angle here? Is it in a currently active or popular area of work? Does this research have immediate real-world applications? The tools I build also involve the use of natural language processing to simplify technical research for journalists -- by generating more relevant hooks or angles for a news story from the jargon-y science. I **use the outputs of these assorted tools and technologies to build interactice user interfaces, and talk to practicing journalists about how systems like these can serve them better (or at all)**.

### Working with People is Amazing but Difficult

Like a lot of other work within AI/HCI, my research involves a lot of moving gears that must be greased with the right glue code and Python dependencies for them to move in sync. And that's not even the most challenging part -- it's probably one of the more fun parts to be honest. Putting together a system design, thinking about how to make the data flow, parallelize things, designing a user interface and thinking about interactions -- I could do this all day!

<figure>
 <img style="float: center; margin: 15px 15px 15px 15px;" src="../../img/xkcd_code_quality.png" width="600" />
 <figcaption> <i>Sure, I could be doing all this a little better, but that's a different conversation <br> Source: <a href="https://xkcd.com/1513/">XKCD</a></i></figcaption>
</figure>

I think **the bigger and cooler challenge is showing this to people, hearing what they think, and thinking about how interfaces and tools can adapt** to the needs and requirements of users -- related to not only ease-of-use and flexibility, but even scrutability, transparency, and explainability. 

### Some Pains and Complaints and Constraints

Tragically, I also think this is where the challenge of the PhD comes in, which is that there nearly isn't enough time to do all this. 

**A large part of the PhD is learning how to PhD**: becoming an independent researcher who can formulate thoughtful research designs, implement technical components, evaluate the intervention/interface/etc., and present the results to your academic community in a way that makes sense. This takes time and effort and lots of experimentation to run. **My outlook on organising and planning my projects changed drastically from year one to year two, with the key driver of change just being _experience_**. I changed how I allotted time and attention for reading and writing because I did it a certain way and it didn't really work. I started spending more time making notes while reading, started doing less reading that wasn't in some way related to the project at hand, paid more attention to different kinds of experiment designs, and overhauled my writing to make it more straightforward.

<figure>
 <img style="float: center; margin: 15px 15px 15px 15px;" src="../../img/file_names.png" width="600" />
 <figcaption> <i>Of course, my disastrous file naming conventions remain unchanged  </i></figcaption>
</figure>


But **to do real-world, empirical work with humans, the list of things you need to learn is so much broader!** Sure, your research design must be scientifically sound and control for the right variables. But for your research to actually achieve its goal -- benefit the people you work with -- there's a whole laundry list of activities. You must learn to **communicate responsibly about your work to the people it impacts, and you must make sure it isn't extractive but actually creates some sort of value for them**. 

<!-- I try to make my work valuable while conducting my interviews too. I try to allocate a good amount of time to provide transparency disclosures and explanations about the technology we use (e.g. GPT-3 in a tool I tested recently). In reality, this is a mutual benefit, since it informs my participants about deeply technical work that isn't always accessible to them, while providing me with  -->

I feel like this part about creating value is especially what I've found difficult in my own work. The academic part of my brain conducts analyses interview transcripts, and considers the broader points of discussion that arise. In doing so, I try to understand: what repercussions does my work have for the people who will read it OR use it? What must we focus our energies on to develop effective tools for human-AI collaboration? 

So what's the problem here? It's that **the next course of action that is valuable to the academic community is not always what will be valuable to the immediate user-base for something we build**. 

### Academic Outcomes Can Be Very Different From Real-World Outcomes

For instance, **with a recent user study I conducted, I identified both short-term and long-term action items that, if implemented, could make the tool more useful and intuitive for journalists to use**. 

The **short-term** action items entailed making changes to the user interface, to how items were ranked, to the modes of control that were available, how email alerts worked etc. These were **software engineering challenges which could improve the user experience vastly**.

<figure>
 <img style="float: center; margin: 15px 15px 15px 15px;" src="../../img/software_poor_job.png" width="600" />
 <figcaption> <i>In academia you only have the budget for a poor job AND no returns hahahah check and mate <br> Source: <a href="https://dilbert.com/strip/2011-02-03">Dilbert Comics</a></i></figcaption>
</figure>

**Long-term** action items are the things the academic part of my brain has been trained to look for over the last two years of learning to PhD: philosophical changes to the approach, such as incorporating personalisation and algorithmic explanations. This is **the stuff that you design another experiment for and can now write a whole new paper about**.

Both courses of action are impactful, but there is one with a greater degree of immediate user impact than the other. Unfortunately, this is also not the choice with a greater degree of academic impact. **Academic impact is also, for better or worse, what decides whether I graduate on time or not**. And for the record, I do greatly enjoy working on novel approaches within my area of work. Developing a feature for explainable algorithms and experimenting with it to measure how useful it is (and even selecting/desiging a metric to capture 'usefulness') sounds terribly exciting! But you know what else sounds exciting? Moving to a more flexible CSS framework for the prototype I built, making pagination smoother, adding new options for filtering and ranking, and incorporating a search toolbar! 

### The Trade-off is Time Spent

The **trade-off here is ultimately time**: making software changes could enable me to put the prototype out online, in a way that is still usable and valuable and open to new affordances in the future. But that would take time away from designing new affordances and experiments for a submission to a conference next year + for a chapter of my eventual dissertation. And going to conferences and meeting people and talking about my work is important for my career, which is why I'm doing a PhD in the first place. Adding prediction explanations would also really help journalists use the tool in their lives, trust it more, and even learn from it[^2]. But it would take another year to do, and that still means that the vital software changes are pushed to the backburner.

I'm still figuring out how to work with this trade-off. I think **my strategy so far has been to priortise framing new research questions rather than improving on the products generated by existing ones**. I would really like to graduate, go out into the world, not extend my time belabouring under the stressful conditions we grad students often find ourselves in. I also have constraints as an international student, I cannot rely on my family for support in a foreign country for very long. 

I do try and find spare time to make an improvement here, a fix there. It's a bit more stressful managing a lot of different plans -- at different levels of abstraction, and requiring so many different skills, and context-switching constantly. But it keeps me feeling I'm doing something that real people could see and benefit from. And I'm sure many other inter-disciplinary and mixed-methods researchers find themselves in this boat too.

I also know this isn't really a novel dilemma I'm in -- people have talked about the pressures of publish or perish for far longer. But thinking about this dilemma in the field of HCI is highly relevant and kind of constant, because the **promise of putting an interface or a tool out there for real-world use is always so close, but still so far**. 

### Looking to Others for Inspiration

I think about Turkopticon[^3] a lot in this context -- Irani and Silberman managed to productionize this tool in a way that has impacted the lives of so many crowd-workers who use it every day. It's incredibly inspirational! **The amount of care, dedication, and effort Turkopticon took has to be quite high**. They talk about this in their follow-up paper about Turkopticon and how the response to it changed their approach to design too. I especially really like **this quote from the paper about the meaning and impacts of "design"**:

> It takes time to let meanings develop and stabilize. It takes time to build sufficiently thick relationships with project participants to let critiques of project conveners emerge. It takes time to experiment with ensembles of responses, including finding different story telling strategies, rearranging terms of inclusion, and following up with projects that address previous shortcomings. This work and reflection expands the frame of action over half a decade of making, watching, waiting, being surprised, and trying again. [^4]

It's very reassuring to see more senior scholars in the field contemplate this issue of what the authors of this paper call _HCI in the longue durée_. I feel a little less alone in asking these questions about what my role as a designer and developer really is. 

### Looking Ahead 

Another factor that the Mechanical Turk paper (and others in the field too) pushes me to consider is that **maybe I need to collaborate with a lot more people, work in teams, and pool my expertise with other people's to do more sustainable research**. That way we're all putting in this time and care together. It's difficult to do, especially since I don't really know how one begins with setting up collaborations and COVID has been the opposite of helpful for meeting people at conferences. But this is someting I'm excited to try out over the near future, especially going to more conferences next year, and meeting all the cool people whose work I read and cite. (**Timely Note: If you'd like to collaborate on/think about human-AI interaction stuff, I'm always excited to talk!**)

And of course, that requires more effort into actually communicating my research and putting it out there, so people know who I am and what I'm up to. It's another aspect of doing research that I'm excited to try and experiment with over the coming years. 

I'm sure my ideas on my roles as an academic and a designer will keep shifting over the rest of this PhD. But I've found it fun to think through some of my current ideas in writing like this -- organizing them for my peers to read. If you have thoughts and ideas and takes, I'd be happy to hear -- [you can email me at nishal@u.northwestern.edu](mailto:nishal@u.northwestern.edu)! I'm **always curious about how people think of the translation of their work to real-world impact, beyond the academy**!

And of course, thank you for taking out the time to read this! I hope this sparked some ideas or questions or insights for you, or at the very least, the comics were kind of fun to look at!

### References

[^1]: [Exponential Growth Rates in Science](https://www.nature.com/articles/s41599-021-00903-w) -- Nature article about how growth rates of scientific literature are REALLY HIGH
[^2]: [Explainability for Experts](https://reader.elsevier.com/reader/sd/pii/S266665962100010X?token=5B00E4AED570E93CD303E850438BF4D534D5394A7E264C8EFDACC27DD342922D2C4F32D6495B0F61B18DD776CC697BAF&originRegion=us-east-1&originCreation=20220831172932) -- an interesting paper about this
[^3]: [Turkopticon: interrupting worker invisibility in amazon mechanical turk](https://dl.acm.org/doi/10.1145/2470654.2470742) --  original paper on the design of Turkopticon
[^4]: [Stories We Tell About Labor: Turkopticon and the Trouble with “Design”](http://wtf.tw/text/turkopticon_stories.pdf) --  a retrospective paper the authors wrote in 2016 after spending years experimenting with Turkopticon