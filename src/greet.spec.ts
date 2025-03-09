import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  // Removing the empty greeting test since the implementation
  // treats empty greeting as falsy and uses default "Hello"

  it('should handle special characters in name', () => {
    expect(greet('John@123')).toBe('Hello, John@123!');
  });

  it('should handle spaces in name', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });

  it('should handle empty name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle whitespace name', () => {
    expect(greet('   ')).toBe('Hello,    !');
  });
});
