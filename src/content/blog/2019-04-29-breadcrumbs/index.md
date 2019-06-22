---
posttype: "blog"
path: "/blog/blog-2"
date: "2019-04-29"
title: "Breadcrumbs: Problem Solving and Regex"
description: "Lorem Ipsum"
---

For the last week or so, I’ve been trying to learn Regular Expressions, or Regex for short. While we were revising HTTP requests one afternoon, some bootcampers who opted out were instead given the task of learning some regex and teaching the fundamentals to the rest of us, including me, a few days later. It was a great introduction that motivated me to learn more (thanks, pals!).

There’s a handy article that explains a lot of the basics of regex [here](https://medium.com/@harry.turner/regex-the-good-the-bad-and-the-basics-e9c247bc6d94), and I’ve listed some more useful resources at the bottom of the page. Personally, I’ve found that the best way to familiarise myself with any new concept and with using new syntax is just by doing the thing, so I found some Ruby [Codewars](https://www.codewars.com) challenges that I could use to test my knowledge and help me learn. I came across a particularly juicy one that didn’t disappoint, and I thought I’d walk through my approach, my thought process and solution to the problem. Because, well, sharing is caring, and because I want to practise some technical writing. Spoilers are below, in case you wanted to solve [the challenge](https://www.codewars.com/kata/563fbac924106b8bf7000046) for yourself before reading on!

### Breadcrumb Generator

Our task is to write a method generate_bc that takes in two arguments (a URL string and a separator) and returns a string of breadcrumbs in their HTML form. Breadcrumbs are a type of navigation that shows the location of a user within a website/app. For example:

```
url = 'https://github.com/alxdwa/codewars/blob/master/ruby/4_kyu/cw_breadcrumbs.rb'

generate_bc(url, '>') # the method we need to write => 
'<a href="/">HOME</a> >
 <a href="/alxdwa/">ALXDWA</a> >
 <a href="/alxdwa/codewars/">CODEWARS</a> >
 . . .
 <a href="/alxdwa/codewars/blob/master/ruby/4_kyu/">4_KYU</a> >
 <span class="active">CW_BREADCRUMBS</span>'

Line breaks and ellipsis added for clarity.
```