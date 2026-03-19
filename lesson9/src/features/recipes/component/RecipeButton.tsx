import { Button } from '@/shared/components/ui/button';

export function RecipeButton({ onClick }: { onClick: () => void }) {
  return (
    <Button className="text-black" onClick={onClick}>
      Press for a book
    </Button>
  );
}
