Link: [nishalsach.github.io](https://nishalsach.github.io)

# TODO

### Fix the B.S. PDFS / Images reference system - Added July 5, 2026

Broken, unintuitive. Nothing about this works consistently in my process. 

### Fix Publications Page - Added July 5, 2026

Looking a little janky, mainly the titles. Why does it look like that? Too wide? Is the whole site too wide?

### Migrate publications to structured data - Added July 5, 2026

Currently `content/publications.md` has all papers hand-formatted inline (manual `<a>`, `<u>`, button HTML per entry). This is v repetitive.

**Plan:** move to one content file per paper (e.g. `content/publications/caged-birds.md`) each with front matter fields:
  - title, authors, venue, year (would need a shortcode to fund my name and add <ul> tags around it?)
  - pdf link, data/code link, doi/anthology link
  - bibtex (raw text)
  - type: peer-reviewed | poster | workshop  (for auto-sorting into sections)

Then write a single Hugo template that loops over all publication pages (like how `index.html` already loops over `site.Data.news.items`) and renders each one consistently, with buttons and all.

The CSS (`.button1.copy-bibtex-btn::before`) and JS (`copyBibtex()` in footer.html) carry over unchanged. But `bibtex.html` will need to move from `layouts/shortcodes/` to `layouts/partials/` and be called from the new loop template (via `{{ partial "bibtex-button.html" . }}`) instead of `{{< bibtex >}}` in markdown. It also needs a new source of unique ID, since `.Ordinal` (shortcode-only) won't apply anymore. Maybe can use something like `.File.ContentBaseName` (the paper's filename/slug) instead, e.g. `bibtex-caged-birds`. Paper slugs might be useful across the site actually hmmm ...

# Editing Guide

### Where things live

```
blog_builds/
├── content/
│   ├── posts/           → Blog posts (Markdown files)
│   ├── about.md         → "More About Me" page
│   ├── publications.md  → Publications page
│   └── projects.md      → Projects page
├── data/
│   ├── bio.yaml         → Homepage bio text
│   └── news.yaml        → News updates
├── static/
│   ├── img/             → Images for blog posts and site
│   └── pdfs/            → PDFs (CV, papers, etc.)
└── config.toml          → Site configuration
```

### How to edit different parts

Reminder to self: do not add PDFs or media files outside of blog_builds!
But reference stuff from home, not from blog builds :):):)

#### Homepage Bio
- **Edit:** `blog_builds/data/bio.yaml`
- Supports Markdown formatting (`**bold**`, `[links](url)`)
- Changes appear after running `hugo` from `blog_builds/`

#### News Updates
- **Edit:** `blog_builds/data/news.yaml`
- Each entry needs `title`, `date` (`YYYY-MM-DD`), and `summary`
- Newest entries at the top (Hugo sorts by date)
- Supports Markdown in summary text

#### Blog Posts
- **Edit:** Create/edit files in `blog_builds/content/posts/`
- File naming: `YYYY-MM-DD-post-title.md`
- Each post needs frontmatter:
  ```yaml
  ---
  title: "Title"
  date: YYYY-MM-DD
  draft: false
  description: Short description for homepage
  tags: [tag1, tag2]
  ---
  ```

#### Blog Post Images
- **Save to:** `blog_builds/static/img/`
- **Reference in posts:** `../../img/image.png` or `/img/image.png`
- Example: `![alt text](../../img/2025-dis-values-table.png)`

### Other Pages
- **About page:** `blog_builds/content/about.md`
- **Publications:** `blog_builds/content/publications.md`
- **Projects:** `blog_builds/content/projects.md`

