---
title: '3 Challenges I Faced When Learning to Code'
date: 2023-07-26T00:00:00-00:00
#draft = false
#categories = ['Blog']
cover_url: https://cdn.hashnode.com/res/hashnode/image/upload/v1690299234126/ad4df73c-9926-4bb7-8778-e812e4cf3e70.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
---

This article originates from a discussion that happened on the [Learn Build Teach](https://www.learnbuildteach.com/) community on Discord. I wanted to share it here in a more detailed (and slightly more formatted) way. These challenges came up in my own journey and may or may not be the same for others. Also, I did not list them in any particular order.

So, 3 challenges I faced when learning to code are...

## Knowing What Fits Where

Languages, frameworks, stacks, shells, bundlers, transpilers, servers, requests, responses...

Open-source software, and especially the modern web, has a ridiculous number of moving parts and stacked layers of abstraction that you deal with either directly or indirectly. A very basic example, which is more common than you think, happens to absolute beginners when they can't distinguish the language from the editor/IDE. In my field of statistics, I can't tell you how often beginners confuse R (the language) with RStudio (the IDE). I don't blame them - they interact with the RStudio "app" just like any app they used before. Now they have to realize somehow that there is an R interpreter that runs the code, and RStudio is merely a graphical UI that facilitates writing code and running it in that thing.

So, it's helpful to go beyond "how to write code in X to do Y" and learn as much as possible about how things work: which things are language features, which come from external packages, which are command-line utilities, which are just tooling provided by the editor... You get the idea. That will greatly help you have a smoother ride in terms of environment setup, writing code, debugging issues, or deployment.

## Realizing that Learning is Not Sequential

When learning how to code, there are tons of resources: YouTube, blogs, books, online courses, bootcamps, etc. Which ones to take? And in what order? Should I start with the backend or frontend? Should I learn vanilla JS first or a framework? Or should I wait until I've learned some C first?

My answer to these questions would be: yes.

Well, to be serious, do as many as you can in whatever order you feel like.

First, applications themselves don't quite work like that. They don't have a sequence, just a bunch of separate pieces with connections in between. So, your learning is about getting to know (1) each piece individually and (2) how they connect. For example, frontend code is typically markup (HTML), style (CSS), and interactivity (JS). If you have some markup, styling it and making it dynamic are two separate processes, so should you learn CSS first or JS?

More importantly, development topics are endless in number, and each individual topic is endless in depth. This alone is enough for me to say that sequential learning flat-out doesn't make any sense! Even if you go on some carefully curated roadmap of well-structured courses and projects (assuming those even truly exist) or if you made up a plan on your own, I strongly believe you *have to* revisit old concepts to dive into more details or bounce from one thing to another as you accumulate scattered knowledge and make connections in your brain.

## Being Okay with Writing and Shipping "Bad" Code

To put it less bluntly, it's trying to avoid perfectionism.

I'll be honest and say that, unlike the previous two, this is still a problem for me even after so many years of learning and working. I remember Hadley Wickham (one of the top R package authors) saying that to be able to write good code, you need to write a lot of bad code. I do accept that, but from time to time, it still drives me mad! I even wrote [an article overthinking that dilemma](/posts/pragmatism-vs-idealism).

Building a project with perfect design patterns and coding best practices may or may not be impossible. What should matter (for me I guess) is having fun, empowering other people with software, and advancing my career. What you should do is set your own goals and priorities and just focus on achieving them even if you write "bad" code in the process. Easier said than done for some people, myself included of course, but we'll do our best.

## Conclusion

So, these were the 3 struggles I had/have in my personal coding journey. I hope that was helpful, and thank you for reading!
