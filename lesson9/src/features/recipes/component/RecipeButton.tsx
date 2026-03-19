import { Button } from '@/shared/components/ui/button';
import { useRandomBook } from '../api/getApi';

export function RecipeButton() {
  const { book, getRandomBook } = useRandomBook();

  return (
    <Button className="text-black" onClick={getRandomBook}>
      Press for a book
    </Button>
  );
}
