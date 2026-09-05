import { describe, expect, it } from 'vitest';
import { content } from './i18n/en';

function visibleSeoText(): string {
  return content.seo
    .map((section) => {
      if ('text' in section) return section.text;
      if ('html' in section) return section.html.replace(/<[^>]*>/gu, ' ');
      if ('items' in section) return section.items.join(' ');
      return '';
    })
    .join(' ')
    .replace(/\s+/gu, ' ')
    .trim();
}

describe('loan-to-income ratio SEO content', () => {
  it('answers the main calculator search intent with actionable copy', () => {
    const seoText = visibleSeoText();

    expect(content.title).toBe('Debt to Income Ratio Calculator');
    expect(content.description).toContain('debt-to-income ratio calculator');
    expect(seoText).toContain('DTI = monthly debt payments');
    expect(seoText).toContain('1,200 of monthly debt on 5,000 of income is 24%');
    expect(seoText).toContain('not as a lending verdict');
    expect(content.faq).toHaveLength(3);
    expect(content.howTo).toHaveLength(4);
  });

  it('publishes the SEO schemas from the shared content pipeline', () => {
    expect(content.schemas.map((schema) => schema['@type'])).toEqual([
      'FAQPage',
      'HowTo',
      'SoftwareApplication',
    ]);
  });
});
