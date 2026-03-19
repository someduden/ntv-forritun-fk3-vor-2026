import z from 'zod';

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string().optional(),
  authors: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  rating: z
    .object({
      average: z.number(),
    })
    .optional(),
});

export const ApiResponseSchema = z.object({
  books: z.array(z.array(BookSchema)),
});
