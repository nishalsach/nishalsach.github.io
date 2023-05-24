---
title: "Reading and Writing Files in Python: Modifiers"
date: 2023-05-23
draft: false
description: How modifiers change what you write
tags: [python, code]
---

Different _modes_ of reading and writing to files, and what they do:

```r```: Only read. This is the default if no ```mode``` argument is given.  
```w```: Only write. An existing file with the same name will be over-written.  
```a```: Append data to the end of the file. Still writing.  
```r+```: Both reading and writing and can be done. I never use this.  

From the [Python Docs](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files): 

> Normally, files are opened in text mode, that means, you read and write strings from and to the file, which are encoded in a specific encoding. If encoding is not specified, the default is platform dependent (see open()). Because UTF-8 is the modern de-facto standard, encoding="utf-8" is recommended unless you know that you need to use a different encoding. Appending a 'b' to the mode opens the file in binary mode. Binary mode data is read and written as bytes objects. You can not specify encoding when opening file in binary mode.
>
> In text mode, the default when reading is to convert platform-specific line endings (\n on Unix, \r\n on Windows) to just \n. When writing in text mode, the default is to convert occurrences of \n back to platform-specific line endings. This behind-the-scenes modification to file data is fine for text files, but will corrupt binary data like that in JPEG or EXE files. Be very careful to use binary mode when reading and writing such files.

Why would one use the binary mode? As the docs say, the binary mode represents things as bytes, not as text. This especially comes into play when characters like newlines (```\n```) and carriage returns (```\r```) are presented as is, versus when the text might show them as a physical linebreak. This [SO answer](https://stackoverflow.com/questions/31483253/when-to-open-file-in-binary-mode-b) highlights when this distinction matters:

> Use 'b' mode, to read/write binary data as is without any transformations such as converting newlines to/from platform-specific values or decoding/encoding text using a character encoding.

I think with [Python 3 having gotten a bit stricter in the distinction](https://tech.aaronteoh.com/b-not-b-opening-files-python-3/) between ```str``` and ```byte``` objects, it's safer to stick to using text mode unless somthing really off is produced.
