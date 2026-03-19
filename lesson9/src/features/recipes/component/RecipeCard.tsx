import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/shared/components/ui/card';
import { useRandomBook } from '../api/getApi';
import { RecipeButton } from './RecipeButton';

export function RecipeCard() {
  const { book, getRandomBook } = useRandomBook();

  return (
    <Card className="w-100">
      <CardHeader>
        <CardTitle>{book ? book.title : 'Random Book'}</CardTitle>

        <CardDescription>
          {book
            ? book.authors.map((a) => a.name).join(', ')
            : 'Click below to get a book'}
        </CardDescription>

        <CardAction>
          <RecipeButton onClick={getRandomBook} />
        </CardAction>
      </CardHeader>

      <CardContent>
        {book?.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-md"
          />
        ) : (
          <p>No image available</p>
        )}
      </CardContent>

      <CardFooter>
        <p>⭐ {book?.rating?.average ?? 'No rating'}</p>
      </CardFooter>
    </Card>
  );
}
