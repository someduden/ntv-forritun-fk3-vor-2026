import { RecipeButton } from '@/features/recipes/component/RecipeButton';
import { RecipeCard } from '@/features/recipes/component/RecipeCard';

export function IndexPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center gap-15">
      <h1 className="text-4xl font-bold">Verkefni 9</h1>
      <RecipeCard />
    </main>
  );
}
