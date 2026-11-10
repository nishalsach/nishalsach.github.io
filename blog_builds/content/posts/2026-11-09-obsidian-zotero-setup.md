---
title: "Exporting From Zotero to Obsidian with Simple Citations"
date: 2026-11-09
draft: false
description: "Setting up a simple (kind of) notetaking system in Obsidian for research."
tags: [research, personal, tech]
---

This is how I connected Zotero to Obsidian so that every source in my library:  
1. Gets a literature note named `@citekey`  
2. Can be linked to with `[[@citekey]]`  
3. Shows up in a Base  
4. Can be exported to Word with my desired ACM format.  

I also added a custom `from` field to record where I found each source, which dovetails with my interest in keeping traces of how I find cool things. The reason I had to do this is that the older Obsidian plugin I used stopped working with Zotero 8, which gave me reason to figure out a new setup that takes into account new habits I've picked up when recording and citing stuff. 

### What the setup does

- Zotero (with Better BibTeX) exports my library to a Better CSL JSON file inside my Obsidian vault and keeps it updated.
  - I use Better CSL JSON because postscripts don’t run in Better BibTeX JSON (the plugin’s other supported format), and the Pandoc export only works with Better CSL JSON.
- The Obsidian plugin [Simple Citations](https://github.com/masaki39/simple-citations) reads that file and creates one note per source, which is named `@citekey`.
- A postscript in Better BibTeX in Zotero adds my own `from` field to the export.
- A Base gives me a table of all my sources.
- The plugin's Pandoc command turns a note full of `[[@citekey]]` links into a Word document with a reference list.

Requirements: Zotero 8, the Better BibTeX add-on, Obsidian 1.9+ (for Bases), the Simple Citations plugin, and Pandoc. 

### Exporting the JSON

In Zotero, right-click the library (or a collection) -> Export -> Better CSL JSON, make sure to keep it updated, and save it inside the vault. Better CSL JSON is the format that postscripts run in, and the Pandoc export only works with this one.

Some things that tripped me up:

- I had two exports and the postscript was feeding the wrong file. If a field doesn't show up in the JSON, check you're looking at the right JSON.  
- Exporting the whole library means a note for every item. A collection (e.g. "Obsidian") gives more control. I chose not to go this route because I was feeling lazy.

Then, in Obsidian, open up Simple Citations’ settings and set the bibliography path to this file, set the export folder for notes, and register optional fields.

### Citekeys

The default Better BibTeX formula gives you keys with hyphens in the name, I hate this. So I set the formula as `auth.alphanum.lower + shorttitle(2,2) + year` in Zotero’s Better BibTeX preferences. The formula is a small Better BibTeX language that looks like JavaScript but isn't; it only has the built-in functions and filters (list at retorque.re/zotero-better-bibtex/citing/formulas).

To apply this new formula to existing items, the keys have to be refreshed manually (albeit, not individually). Changing the formula alone doesn't touch existing keys. I also stopped automatically changing keys on edits here, which I had enabled earlier. This is because changing a Better BibTex key orphans its note in Obsidian with Simple Citations. The Simple Citations plugin seems to be matching notes to JSON entries by filename. After a key changes, the old note no longer matches any entry, so `Update literature note` ignores it and `Add literature note` creates a new one. I need to be okay with renaming existing notes by hand inside Obsidian to the exact new key as needed, with Obsidian’s `Automatically update internal links` turned on.

Citekeys containing # ^ [ ] | \ / : are skipped by the plugin because Obsidian filenames can’t contain them. My formula avoids these for the keys it generates, but keys that were imported or edited by hand could still contain them, so I’d check the console log if a source goes missing, as per the README from Simple Citations.

### The `from` field

The way to do this is to put some value in an item's `Extra` field in Zotero, and let a postscript copy it into a field called `from` during the Better CSL JSON export. I did however want to avoid the `Extra` field's content making it into any BibTex exports since that can show up in a PDF rendered in the ACM template. Here's the code for the postscript field in Better BibTex's Zotero settings that I used to accomplish this: 

```js
// ---- "from" field: for Obsidian (Better CSL JSON export) ----
// Reads "from: ..." from the Extra field and writes it as a single string.
// Then removes that line from csl.note so it isn't duplicated or printed
// in bibliographies. Other Extra content is kept.
if (Translator.BetterCSLJSON) {
  const m = (zotero.extra || '').match(/^from:\s*(.+)$/mi);
  if (m) {
    csl.from = m[1].trim();
    if (csl.note) {
      csl.note = csl.note.replace(/^from:.*$/mi, '').trim();
      if (!csl.note) delete csl.note;
    }
  }
}

// ---- Keep the "from" line out of .bib exports ----
// Better BibTeX copies unrecognized Extra lines into note/annotation.
// This removes that field if it contains a "from:" line.
if (Translator.BetterTeX) {
  for (const name of ['note', 'annotation']) {
    const f = tex.has[name];
    if (f && /(^|\n|\s)from:/i.test(String(f.value || f.bibtex || ''))) {
      tex.remove(name);
    }
  }
}
```

One catch: the .bib block removes the whole note (or annotation) field on any item that has a `from:` line, not just the `from:` line itself. If an item’s Extra field has other content, that drops out of the .bib export too. That’s fine for me, since I don’t want Extra content in my ACM PDFs anyway.

I used Claude to write these postscripts for me, and tested them out myself. Then in the plugin settings, I added `from` (lowercase, exact) as an optional field, refreshed the export, and ran `Update literature note`.


### Outputs

Here's what the final outputs look like: 

- A folder with all the literature notes. This is configured in Obsidian's settings for the Simple Citations plugin. I called mine `Sources`.
- The notes are `@citekey.md`, and links to them are `[[@citekey]]`.
- I can make a Base in Obsidian that filters to notes only in my `Sources` folder. 
- To export with Pandoc, I write in a note and cite with `[[@citekey]]`. Then I run the `Pandoc citeproc execution (docx)` command in the Obsidian command palette. 

I think this is as simple as it gets, for me, for now. I am okay with a high-effort setup upfront if it means maintenance is easy. The only aspect complicating maintenance is the need to manually rename literature notes if the citekeys change, and I plan to make a feature request for this to the Obsidian plugin. Still, this makes life really easy for me! 
