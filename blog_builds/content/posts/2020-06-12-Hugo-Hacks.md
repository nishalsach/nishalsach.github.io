---
title: "Hugo Hacks"
date: 2020-06-12T18:01:26+05:30
draft: false
description: Useful Tips for Hosting a Hugo Blog on Github Pages
tags: [hacks]
---

Hi.

Welcome.

You can choose to skip right to the hacks with this handy index:

- [Filepaths in Hugo](#filepaths)  
- [Footnotes in Markdown](#footnotes)  
- [HTML Tags for Images in Markdown](#html_img)  
- [Syntax Highlighting for Code in Markdown](#syntac_highlights)

Or, you can bear witness to an overly detailed and meandering tale about my journey navigating the horrific ills of modern technology, below.

So, I am proud to announce that as of today, June 12 2020, I have transitioned out of Jekyll, and am the owner of a shiny new blog built with Hugo. Admittedly, this process has had me pulling my hair out over the past few days, and it has made me want to kick myself in frustration about why I set out on this journey in the first place.

See, it started with wanting to use Hugo's themes, which were just minimalistic enough for me to show off to the internet what a cool, chill, minimalist I am. As someone who isn't a fan of writing my own CSS or HTML to achieve these glorious ends, I made this decision almost instantly. As someone who has _very_ limited experience with CSS and HTML, I also regretted this decision instantly.

(In fact, I'd say I regretted the decision _more_ instantly than I made it even, but physics is complicated and saying stupid stuff on the internet to convey the intricate emotions I felt in those _instants_ doesn't seem worth it. So I'm not saying that. To be clear.) 

I regretted it because, Hugo themes are cool and setting up a static website with Hugo is quick. The official docs have a great set of instructions about getting started with your site[^1], and I also found a cool blog post by someone else that shows you how to setup your Hugo website with GitHub pages [^2] (a method I honestly found simpler than the one on the Hugo docs).

That's it though. That's where the fun stuff ends. 

The rest of it is an absolutely terrifyingly harrowing endeavour, as you try to get your ```<img>``` tags in Markdown posts to work, your footnotes completely break into chaos, you are unable to make new static pages in your root directory for some reason, and the syntax highlighting for code in your blog posts just doesn't go with the beautiful theme you picked out for yourself. 

And in horror you realise: _I need to understand more HTML and CSS for this. I need to know how files in one directory generate another and what directory to put images in and what CSS needs to change for me to be able to add captions to my images that follow the left alignment of the image that I achieved two commits ago by enabling_ ```<img>``` _tags in Hugo's Markdown._

And maybe all this stuff only happened to me, and maybe I am absolute idiot who should've bothered to read more than 5 pages in the docs+release notes before giving up and deciding to wing it after citing my laziness as a valid excuse AND as a positive trait that ensures I get work done faster.

Maybe, maybe not. 

Either way, what I am sure of is that I am a bumbling idiot who might need to resort to these hacks again - not an unlikely event by any measure, seeing as I am indeed stupid enough to undertake such a drastic venture again. And then, wouldn't it help to have them here, aggregated, sectioned, documented and ripe for the picking? 

Yes, yes it could. Future me can figure out how to return that favour. And if someone else turns out to be more like me too, maybe this could earn me a bit of good karma. 

So but yes, I've spent the last couple of days out on several wild-goose chases across the interwebz, winding through pages on the Hugo Support site, the docs, StackOverflow and random GitHub repos ever so often. And I would like to never do it again, thank you very much, so here is everything I've discovered and implemented thus far. Genuinely a special mention here for the [Hugo Community site](https://discourse.gohugo.io/about), where people ask questions very well and very soundly, unlike me, whose googling begins and ends at 'hugo footnotes not working'. Theirs is a skill I hope to possess and be proud of one day.

So then, that brings us here, to the relevant stuff. Lo and behold:

### <a name="real_deal"></a>Hacks to Get Stuff Working on Your Hugo Webpage

#### <a name="filepaths"></a> Filepaths in Hugo

<figure>
 <img style="float: right; margin: 15px 15px 15px 15px;" src="../../img/filepath_quicksite.png" width="320" />
</figure>

A brief note about how Hugo works, before we proceed further. Any Markdown posts you write should go in the 'content' directory, within the folder for your website that you setup with Hugo. The sub-structure for 'content' might vary across themes - the theme I am using is [Ezhil](https://github.com/vividvilla/ezhil) [^3], and I use a 'posts' directory within 'content' here. 

Any posts that get built are published in the 'public' directory within your site's folder, unless you change this with the following statement in your ```config.toml``` file:

```md
publishdir = '..'
```

My Hugo site's config file indeed contains this line, because that is how I configured it to work with GitHub Pages[^2]. As a result, all my posts get built in the GitHub Pages repository, which contains this very Hugo site folder, with all my Hugo data/posts/themes within it, as  seen here on the right.

To embed any media in your posts, it needs to be contained within the 'static' directory in your Hugo site's folder. Paths to any media files in your markdown posts assume the root directory to be your Hugo site's folder.

**Another tip**: When you add a theme to your Hugo site, check-out the README on the theme's Git repo. It describes what changes you can make in ```config.toml``` file to enable social media icons, change navigation bar settings etc.

#### <a name="footnotes"></a> Footnotes in Markdown

Setting up footnotes to work in your posts in Hugo is easy, and is elaborated upon in the Markdown Guide website[^4] quite well. However, I ran into a bunch of issues getting footnotes to work. Anytime I'd click on a footnote, it would take me to the base url for my website, instead of the footnote itself. This issue also manifested when I tried to link to headings within my post, as described here on the Markdown Guide website[^5].

Turns out that someone else had also faced this very specific problem before, specifically, that the links to content within posts would get rendered relative to the web root rather than relative to the post that they belong to[^6]. Also turns out, that this is a problem with the theme! The accepted solution on the forums points to a specific bug fix[^7] for the theme that the original asker had setup for their blog. 

Ezhil had no such bug fix in place, so I decided to change the ```layouts/partials/head.html``` file myself. I removed the following line from the code:

```html
<base href="{{ .Site.BaseURL }}" />
```

So far, this measure has not created any new problems for me, except for a teensy new adjustment I've had to make: anytime I link to content or media on my website from within my markdown posts, I now have to use the path relative to the current directory I am working in, as opposed to the root directory of my Hugo site. Bearable enough, seeing as my footnotes finally work!

#### <a name="html_img"></a> HTML Tags for Images in Markdown

With Jekyll, I got really used to embedding images in HTML tags in my posts - this made it easy to align and resize them, and add margins with text. With Hugo however, I discovered that these ```<img>``` tags refused to work.

I found out that this was because Hugo, unfortunately, since v0.60.0, has switched a new default library for Markdown, called Goldmark[^8]. Goldmark does not support HTML tags by default, so you need to make a small addition in your ```config.toml``` file to allow for this. I found this advice on StackOverflow[^9], and have been immensely grateful for it ever since:

```toml
[markup.goldmark.renderer]
    unsafe = true
```

#### <a name="syntax_highlights"></a> Syntax Highlighting for Code in Markdown

So this one is actually pretty easy - I wanted to enable syntax highlighting for my code blocks, by picking a style from one of the several in Hugo's gallery[^10]. This is typically a straightforward affair, and all you need to do is add the following lines to your ```config.toml``` file:

```toml
pygmentsstyle = "monokailight"  # insert the theme of your choice here
pygmentscodefencesguesssyntax = true
```

However, my own implementation of this continued to fail, and here's the reason that I discovered: these lines need to be inserted before any arrays in your config file! [^11] 

I don't honestly know why or how this configuration exists, but it should be enough to get syntax highlights working.


### References:

[^1]: [Hugo Docs on Getting Started](https://gohugo.io/getting-started/quick-start/)
[^2]: [Cool Blog Post I Found on Using Hugo with GitHub Pages](https://pulsejet.github.io/blog/posts/setting-up-hugo-on-github-pages/)
[^3]: [Ezhil Theme](https://github.com/vividvilla/ezhil)
[^4]: [Markdown Guide's Section on Footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)
[^5]: [Markdown Guide's Section on Linking to Headings](https://www.markdownguide.org/extended-syntax/#heading-ids)
[^6]: [Issues with Anchors on Hugo](https://discourse.gohugo.io/t/org-mode-anchors-solved/13842)
[^7]: [fix base href usage which breaks footnotes](https://github.com/gyorb/hugo-dusk/commit/1bb572284a3db971ed425a527166a409ee331ebe)
[^8]: [Hugo 0.60.0 Release Notes](https://gohugo.io/news/0.60.0-relnotes/)
[^9]: [HTML Tags in Hugo Markdown](https://stackoverflow.com/questions/60329235/blogdown-and-hugo-not-parsing-html-tags-in-markdown)
[^10]: [Hugo's Syntax Highlighting Gallery](https://xyproto.github.io/splash/docs/all.html)
[^11]: [pygmentsStyle Not Working](https://discourse.gohugo.io/t/pygmentsstyle/20785)
