import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Recipe from '@/Components/Recipe';
import RecipeModal from '@/Components/RecipeModal';
import { Head } from '@inertiajs/react';

export default function Index({ auth }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle recipe click and open the modal
  const handleRecipeClick = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const recipes = [
    {
      id: 1,
      name: 'Chicken Adobo',
      image: 'https://images.unsplash.com/photo-1611009665886-4b0b2b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvYm98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      ingredients: [
        '1/2 cup soy sauce',
        '1/2 cup white vinegar',
        '1 head garlic, crushed',
        '1 teaspoon black peppercorns',
        '3 bay leaves',
        '1 tablespoon vegetable oil',
        '3 pounds chicken legs, thighs, and wings',
        '1 teaspoon white sugar, or to taste',
      ],
      instructions: [
        'Combine soy sauce, vinegar, garlic, peppercorns, and bay leaves in a large pot; add chicken. Bring to a boil. Reduce heat to medium-low and simmer until chicken is no longer pink in the center, about 30 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).',
        'Transfer chicken to a platter and keep warm. Strain and reserve liquid in the pot.',
        'Heat oil in a large skillet over medium heat. Add chicken; cook until browned, about 3 minutes per side. Transfer to a serving platter. Pour reserved cooking liquid into the skillet; add sugar and simmer until thickened, 5 to 7 minutes. Pour sauce over chicken.',
      ],
    },
  ];

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Recipes" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-gray-200 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {recipes.map((recipe, index) => (
                  <Recipe key={index} recipe={recipe} onClick={() => handleRecipeClick(recipe)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <RecipeModal
          recipe={selectedRecipe}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

    </AuthenticatedLayout>
  );
}


