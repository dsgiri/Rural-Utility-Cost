import { describe, it, expect } from 'vitest';
import { RESOURCES, CATEGORIES } from './resource-data';

describe('Resource Data Validation', () => {
  it('has no duplicate resources by URL', () => {
    const urls = RESOURCES.map(r => r.url);
    const uniqueUrls = new Set(urls);
    expect(uniqueUrls.size).toBe(urls.length);
  });

  it('has no duplicate titles', () => {
    const titles = RESOURCES.map(r => r.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('all resources have required fields populated', () => {
    for (const r of RESOURCES) {
      expect(r.title.length).toBeGreaterThan(0);
      expect(r.url.length).toBeGreaterThan(0);
      expect(r.description.length).toBeGreaterThan(0);
      expect(r.category.length).toBeGreaterThan(0);
      expect(r.bestFor.length).toBeGreaterThan(0);
      expect(['official', 'extension', 'nonprofit', 'local']).toContain(r.type);
    }
  });

  it('generates distinct categories', () => {
    expect(CATEGORIES.length).toBeGreaterThan(0);
    expect(CATEGORIES).toContain('Getting Started');
    expect(CATEGORIES).toContain('USDA Resources');
  });
});
