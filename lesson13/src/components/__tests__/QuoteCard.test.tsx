import { vi, it, expect } from 'vitest';
import { fetchRandomQuote } from '@/lib/quotes';

// vi.mock('@/lib/quotes', () => ({
//   fetchRandomQuote: vi.fn(),
// }));

afterEach(() => {
  vi.unstubAllGlobals();
});

// it('returns the mocked quote string', async () => {
//   vi.mocked(fetchRandomQuote).mockResolvedValue('Test Quote');

//   const result = await fetchRandomQuote();
//   expect(result).toBe('Test Quote');
// });

it('returns a formatted quote when API succeeds', async () => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => ({
          content: 'Test Quote',
          author: 'Tester',
        }),
      } as Response),
    ),
  );

  const result = await fetchRandomQuote();
  expect(result).toBe('„Test Quote“ — Tester');
});

it('throws an error when the API response is not ok', async () => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response),
    ),
  );

  await expect(fetchRandomQuote()).rejects.toThrow('Ekki tókst að sækja quote');
});
