/**
 * HTML Structure Tests for CSS Basics Lab
 * 
 * Core tests that validate the HTML structure and required elements
 * as specified in the lab README instructions.
 */

const fs = require('fs');
const path = require('path');

describe('CSS Basics Lab - HTML Structure Tests', () => {
  let htmlContent;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '..', 'lab', 'index.html');
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
    document.documentElement.innerHTML = htmlContent;
  });

  describe('Document Structure', () => {
    test('should have valid HTML5 DOCTYPE', () => {
      expect(htmlContent).toMatch(/<!DOCTYPE html>/i);
    });

    test('should have html, head, and body elements', () => {
      expect(document.querySelector('html')).toBeTruthy();
      expect(document.querySelector('head')).toBeTruthy();
      expect(document.querySelector('body')).toBeTruthy();
    });

    test('should link to styles.css', () => {
      const linkElement = document.querySelector('link[rel="stylesheet"]');
      expect(linkElement).toBeTruthy();
      expect(linkElement.href).toMatch(/styles\.css/);
    });
  });

  describe('Main Content', () => {
    test('should have main title with id "main-title"', () => {
      const mainTitle = document.getElementById('main-title');
      expect(mainTitle).toBeTruthy();
      expect(mainTitle.tagName.toLowerCase()).toBe('h1');
      expect(mainTitle.textContent.length).toBeGreaterThan(0);
    });

    test('should have at least one paragraph', () => {
      const paragraphs = document.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThan(0);
    });

    test('should have a paragraph with class "highlight"', () => {
      const highlight = document.querySelector('.highlight');
      expect(highlight).toBeTruthy();
    });

    test('should have a link with target _blank', () => {
      const link = document.querySelector('a[target="_blank"]');
      expect(link).toBeTruthy();
      expect(link.hasAttribute('href')).toBeTruthy();
    });

    test('should have a descendant paragraph inside a div', () => {
      const innerPara = document.querySelector('div p');
      expect(innerPara).toBeTruthy();
    });
  });

  describe('Box Model', () => {
    test('should have a box model div with class "box-model-demo"', () => {
      const box = document.querySelector('.box-model-demo');
      expect(box).toBeTruthy();
      expect(box.tagName.toLowerCase()).toBe('div');
    });
  });

  describe('Layout - Flexbox & Grid', () => {
    test('should have a flex container with child items', () => {
      const flexContainer = document.querySelector('.flex-container');
      expect(flexContainer).toBeTruthy();
      expect(flexContainer.children.length).toBeGreaterThan(0);
    });

    test('should have a grid container with child items', () => {
      const gridContainer = document.querySelector('.grid-container');
      expect(gridContainer).toBeTruthy();
      expect(gridContainer.children.length).toBeGreaterThan(0);
    });
  });

  describe('Animations & Buttons', () => {
    test('should have an animated box', () => {
      const animatedBox = document.querySelector('.animated-box');
      expect(animatedBox).toBeTruthy();
    });

    test('should have a hover button', () => {
      const button = document.querySelector('.hover-btn') || document.querySelector('.btn');
      expect(button).toBeTruthy();
    });
  });

  describe('Responsive Design', () => {
    test('should have a responsive card', () => {
      const card = document.querySelector('.responsive-card');
      expect(card).toBeTruthy();
      const img = card.querySelector('img');
      expect(img).toBeTruthy();
    });
  });
});
