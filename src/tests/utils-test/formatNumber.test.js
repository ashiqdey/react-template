// test utils/formateNumber
import { describe, test, expect } from 'vitest';

import { fCurrency, fPercent, fNumber, fShortenNumber, fData } from '../../utils/formatNumber'; // Replace with the actual file path

describe('Number Formatting Functions', () => {
  test('fCurrency formats integer number', () => {
    expect(fCurrency(1000)).toBe('$1,000');
  });

  test('fCurrency formats decimal number', () => {
    expect(fCurrency(1000.25)).toBe('$1,000.25');
  });

  test('fPercent formats number as percentage', () => {
    expect(fPercent(0.5)).toBe('0.5%');
  });

  test('fNumber formats number', () => {
    expect(fNumber(1234567)).toBe('1,234,567');
  });

  test('fShortenNumber shortens large number', () => {
    expect(fShortenNumber(1234567890)).toBe('1.23b');
  });

  test('fData formats number as data', () => {
    expect(fData(1500)).toBe('1.5 KB');
  });
});
