# Nairobi Fashion Vibe (GA4 Tracking Demo)

A dummy e-commerce site built to demonstrate Google Analytics 4 (GA4) event tracking and social-to-WhatsApp funnel analysis, hosted on GitHub Pages.

**[Live site](https://linda-nyakasi.github.io/Kenya-digital-marketing-analytics/)**

## Project Background

Kenya is one of the world's most active social media markets, and many local brands rely on social platforms (Instagram, TikTok, Facebook, X) to drive traffic directly to WhatsApp for customer inquiries and sales. Despite this, most small businesses have no visibility into which platform is actually sending them valuable traffic, so ad spend gets allocated on guesswork rather than data.

This project simulates that setup: a fictional fashion brand whose main conversion action is a WhatsApp inquiry click, with GA4 configured to capture the full range of visitor behaviour that would inform a real social media ad budget decision.

## Site Structure

This is a genuine multi-page site rather than a single scrolling page, so each section loads independently and GA4 records a real page view per section:

- `index.html`, homepage with the primary WhatsApp CTA
- `about.html`, brand story
- `products.html`, product catalogue with category filters and an in-page detail view per item
- `reviews.html`, customer testimonials
- `blog.html`, article list with an in-page detail view per post
- `careers.html`, job listings with an in-page detail view per role
- `contact.html`, newsletter signup and social links
- `styles.css`, shared stylesheet, includes a light/dark theme that follows the visitor's system setting
- `main.js`, shared logic: product/blog/career data, list-to-detail view switching, and all GA4 event calls

## What This Demonstrates

- **UTM-based channel attribution**: social links are structured to carry campaign tags so that traffic from Instagram, TikTok, Facebook, and X can be isolated and compared inside GA4, rather than lumped into one generic "social" bucket.
- **Conversion tracking**: the WhatsApp inquiry button and newsletter signup form fire distinct GA4 events, so inquiries can be tied back to the channel that generated them.
- **Content-level demand signals**: Products, Blog, and Careers each use a list view that expands into a full in-page detail view (with a Back button) when an item is clicked. This means GA4 can show not just that someone visited Products, but exactly which product, article, or job listing they opened, via `view_item`, `blog_click`, and `career_view` events labelled with the specific item.
- **Navigation and engagement signals beyond pageviews**: top-nav clicks, category filter usage (Dresses, Outerwear, Casual), back-button usage, scroll depth (25/50/75/100%), and a 30-second time-on-page milestone all fire as custom events, giving a fuller picture of visitor quality than pageviews alone.

## Portfolio Use Case

The intended output of this setup is a channel comparison report (built in GA4 or exported into Power BI/Looker Studio) answering the question a business owner actually cares about: which social platform sends the most engaged, highest-intent traffic, and which specific products, articles, or roles are generating that engagement, so ad spend and content effort go where they actually perform. This turns a simple analytics install into a decision-support tool for budget allocation, which is the angle this project is meant to showcase.

## Tech Stack

- HTML, CSS, and vanilla JavaScript (no framework, kept intentionally simple)
- Google Analytics 4 via gtag.js
- Product photography sourced from Pexels (free to use, no attribution required)
- GitHub Pages for hosting

## A Note on How This Was Built

This site was AI-assisted (sometimes called "vibe coded"): I directed the structure, content, and analytics requirements, and used Claude to generate and refine the actual HTML, CSS, and JavaScript. I did not hand-write the code myself. I reviewed it, tested it, and made the decisions on what to track and why; the implementation was AI-generated based on my specifications.

## Setup Notes

1. All 9 files (`index.html`, `about.html`, `products.html`, `reviews.html`, `blog.html`, `careers.html`, `contact.html`, `styles.css`, `main.js`) must sit together in the root of the repository (or whichever folder GitHub Pages is configured to serve), since the pages reference each other and the shared stylesheet/script by filename.
2. GitHub Pages source is set under repo Settings > Pages; confirm branch and folder match where these files live.
3. GA4 property ID is embedded directly in the gtag script tag on every page (`G-ZZE3RNQ6L9` in this demo); replace with your own property ID to reuse this template.
4. The WhatsApp number is set in one place, the `WHATSAPP_NUMBER` constant at the top of `main.js`, and used everywhere else in the site from there.

## Status

This is a demo project for portfolio purposes only. Products, testimonials, and job listings are fictional.
