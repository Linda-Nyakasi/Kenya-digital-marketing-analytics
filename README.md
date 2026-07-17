# Nairobi Fashion Hub (GA4 Tracking Demo)

A dummy e-commerce landing page built to demonstrate Google Analytics 4 (GA4) event tracking and social-to-WhatsApp funnel analysis, hosted on GitHub Pages.

**Live site:** [add your GitHub Pages URL here]

## Project Background

Kenya is one of the world's most active social media markets, and many local brands rely on social platforms (Instagram, TikTok, Facebook, X) to drive traffic directly to WhatsApp for customer inquiries and sales. Despite this, most small businesses have no visibility into which platform is actually sending them valuable traffic, so ad spend gets allocated on guesswork rather than data.

This project simulates that setup: a fictional fashion brand whose main conversion action is a WhatsApp inquiry click, with GA4 configured to capture the full range of visitor behaviour that would inform a real social media ad budget decision.

## What This Demonstrates

- **UTM-based channel attribution**: social links are structured to carry campaign tags so that traffic from Instagram, TikTok, Facebook, and X can be isolated and compared inside GA4, rather than lumped into one generic "social" bucket.
- **Conversion tracking**: the WhatsApp inquiry button and newsletter signup form fire distinct GA4 events, so inquiries can be tied back to the channel that generated them.
- **Engagement signals beyond pageviews**: product clicks, category filter usage, blog article clicks, career listing clicks, scroll depth (25/50/75/100%), and a 30-second time-on-page milestone all fire as custom events, giving a fuller picture of visitor quality than pageviews alone.

## Portfolio Use Case

The intended output of this setup is a channel comparison report (built in GA4 or exported into Power BI/Looker Studio) answering the question a business owner actually cares about: which social platform sends the most engaged, highest-intent traffic, and where should the next advertising shilling go. This turns a simple analytics install into a decision-support tool for ad budget allocation, which is the angle this project is meant to showcase.

## Tech Stack

- HTML, CSS, and vanilla JavaScript (no framework, kept intentionally simple)
- Google Analytics 4 via gtag.js
- GitHub Pages for hosting

## A Note on How This Was Built

This site was AI-assisted (sometimes called "vibe coded"): I directed the structure, content, and analytics requirements, and used Claude to generate and refine the actual HTML, CSS, and JavaScript. I did not hand-write the code myself. I reviewed it, tested it, and made the decisions on what to track and why; the implementation was AI-generated based on my specifications. 

## Setup Notes

1. The `index.html` file must sit in the root of the repository (or whichever folder GitHub Pages is configured to serve).
2. GitHub Pages source is set under repo Settings > Pages; confirm branch and folder match where `index.html` lives.
3. GA4 property ID is embedded directly in the gtag script tag (`G-ZZE3RNQ6L9` in this demo); replace with your own property ID to reuse this template.

## Status

This is a demo project for portfolio purposes only. Products, testimonials, and job listings are fictional.
