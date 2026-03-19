import { useState } from 'react';
import { z } from 'zod';
import { ApiResponseSchema, type BookSchema } from '../schema/BookSchema';

export type Book = z.infer<typeof BookSchema>;

export async function fetchAndValidate<T>(
  url: string,
  schema: z.ZodSchema<T>,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Failed to fetch a book');
  }

  const data = await response.json();

  return schema.parse(data);
}

export function useRandomBook() {
  const [book, setBook] = useState<Book | null>(null);

  async function getRandomBook() {
    try {
      const data = await fetchAndValidate(
        `https://api.bigbookapi.com/search-books?api-key=81bf9c24bfc3429398552ea228d145c6&query=sci+fi+books`,
        ApiResponseSchema,
      );

      const flatBooks = data.books.flat();

      const randomBook =
        flatBooks[Math.floor(Math.random() * flatBooks.length)];

      setBook(randomBook);
    } catch (err) {
      console.error(err);
    }
  }

  return { book, getRandomBook };
}
