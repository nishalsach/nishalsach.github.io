---
title: "Brief Primer on Text Encodings for Overworked Graduate Students"
date: 2023-05-18
draft: true
description: 
tags: [code, python]
---



## What is a _Character Encoding_ Anyway?

In the simplest fo words: character encodings are mappings of characters in human language to representations that computers can internally store and process i.e. numbers. Human languages are vast and can have many different kinds of characters and modifications, ergo different **kinds and sizes** of encodings are capable of representing different human languages, and also in different ways. It is important to **standardize** encodings across computing systems, so multiple people can share files and their machines can actually understand these files. 

The numbers that encodings use that correspond to human characters are themselves are represented in bits, and therefore it becomes intuitively clear that the greater number of bits you can use and store within a computing system, the more characters you can represent. This is however, not true anymore.

## Beyond One-to-One Mappings