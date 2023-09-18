import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RecipeCard from '@/Components/RecipeCard';
import { Head } from '@inertiajs/react';

export default function Recipes({ auth }) {
  const sampleRecipe = {
    title: 'Delicious Pasta',
    image: '/images/pasta.jpg',
    author: 'John Doe',
    ingredients: ['Pasta', 'Tomato Sauce', 'Parmesan Cheese', 'Oregano'],
    instructions: [
      'Boil the pasta in a large pot of salted water.',
      'Heat the tomato sauce in a separate pan.',
      'Mix the cooked pasta with the sauce and add Parmesan cheese and oregano for flavor.',
    ],
  };

  const recipes = Array(10).fill(sampleRecipe);

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Recipes" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-gray-200 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

