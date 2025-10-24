#!/usr/bin/env python3
"""
Generate a search index for Hugo blog posts using lunr.js format.
This script should be run before the hugo build step.
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path


def extract_frontmatter_and_content(filepath):
    """Extract YAML frontmatter and markdown content from a file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split frontmatter and content
    parts = content.split('---', 2)
    if len(parts) < 3:
        return None, content

    frontmatter = parts[1]
    markdown_content = parts[2].strip()

    # Parse frontmatter (simple approach)
    metadata = {}
    for line in frontmatter.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            metadata[key.strip()] = value.strip().strip('"\'')

    return metadata, markdown_content


def clean_content(text):
    """Remove markdown formatting and clean text for search."""
    # Remove code blocks
    text = re.sub(r'```[\s\S]*?```', '', text)
    text = re.sub(r'`[^`]*`', '', text)

    # Remove markdown links but keep text
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)

    # Remove markdown images
    text = re.sub(r'!\[([^\]]*)\]\([^\)]+\)', '', text)

    # Remove markdown headers
    text = re.sub(r'^#+\s+', '', text, flags=re.MULTILINE)

    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)

    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text)

    return text.strip()


def create_search_index(content_dir, output_file):
    """Create search index from all markdown files in content directory."""
    content_path = Path(content_dir)
    posts_path = content_path / 'posts'

    index_entries = []
    entry_id = 0

    # Walk through all markdown files in posts directory
    for md_file in posts_path.rglob('*.md'):
        try:
            metadata, content = extract_frontmatter_and_content(md_file)

            if not metadata:
                continue

            # Skip if draft
            if metadata.get('draft', '').lower() == 'true':
                continue

            # Clean content
            clean_text = clean_content(content)

            # Create URL reference (relative to site)
            relative_path = md_file.relative_to(content_path)
            # Convert path to URL format
            url_parts = list(relative_path.parts[:-1])  # Remove filename
            filename = relative_path.stem  # Get filename without extension
            if filename != 'index':
                url_parts.append(filename)
            ref = '/posts/' + '/'.join(url_parts[1:]) if len(url_parts) > 1 else '/posts/' + filename
            ref = ref.rstrip('/')

            # Get date
            date_str = metadata.get('date', '')

            # Create entry
            entry = {
                'id': entry_id,
                'title': metadata.get('title', ''),
                'ref': ref,
                'content': clean_text[:500],  # First 500 chars
                'summary': clean_text[:160],  # First 160 chars
                'date': date_str,
                'creator': 'Sachita Nishal',
                'site': 'nishalsach.github.io'
            }

            index_entries.append(entry)
            entry_id += 1

        except Exception as e:
            print(f"Error processing {md_file}: {e}")
            continue

    # Sort by date (newest first)
    index_entries.sort(key=lambda x: x.get('date', ''), reverse=True)

    # Write to output file
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(index_entries, f, ensure_ascii=False, indent=2)

    print(f"Created search index with {len(index_entries)} entries at {output_file}")


if __name__ == '__main__':
    # Paths relative to blog_builds directory
    script_dir = Path(__file__).parent
    blog_builds_dir = script_dir.parent

    content_dir = blog_builds_dir / 'content'
    output_file = blog_builds_dir / 'static' / 'search' / 'lunr-index.json'

    create_search_index(content_dir, output_file)
