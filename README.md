Link: [nishalsach.github.io](https://nishalsach.github.io)

# Editing Guide

## Where things live

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

## How to edit different parts

Reminder to self: do not add PDFs or media files outside of blog_builds!
But reference stuff from home, not from blog builds :):):)

### Homepage Bio
- **Edit:** `blog_builds/data/bio.yaml`
- Supports Markdown formatting (`**bold**`, `[links](url)`)
- Changes appear after running `hugo` from `blog_builds/`

### News Updates
- **Edit:** `blog_builds/data/news.yaml`
- Each entry needs `title`, `date` (`YYYY-MM-DD`), and `summary`
- Newest entries at the top (Hugo sorts by date)
- Supports Markdown in summary text

### Blog Posts
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

### Blog Post Images
- **Save to:** `blog_builds/static/img/`
- **Reference in posts:** `../../img/image.png` or `/img/image.png`
- Example: `![alt text](../../img/2025-dis-values-table.png)`

### Other Pages
- **About page:** `blog_builds/content/about.md`
- **Publications:** `blog_builds/content/publications.md`
- **Projects:** `blog_builds/content/projects.md`

## Building the site

From the `blog_builds/` directory, run:
```bash
hugo
```
This generates HTML files in the parent directory (repo root) which GitHub Pages serves.

---

# To Do (updated Nov 29, 2023)

### Content

- link to TSB post
- link to GAI post

### Design

- mobile rendering still not great, fix this
- Fix the heading sizes of header and body
- Improve responsiveness of site by setting some sort of min-width on text
- Test shortcodes for buttons: done using [here](http://oostens.me/posts/hugo-button-shortcode/) and an scss2css converter
