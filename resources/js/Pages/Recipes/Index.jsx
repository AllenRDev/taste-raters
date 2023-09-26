import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Recipe from '@/Components/Recipe';
import RecipeModal from '@/Components/RecipeModal';
import { Head } from '@inertiajs/react';

export default function Index({ auth, recipes }) {

  // const recipe = 
  //   {
  //     id: 1,
  //     name: 'Chicken Adobo',
  //     image: 'images/StockSnap_7QH4K6AESO.jpg',
  //     description: 'Chicken Adobo is a Filipino dish made with only a few ingredients. It is easy to make and full of flavor. Serve it with rice for a simple yet satisfying meal.',
  //     ingredients: [
  //       '1/2 cup soy sauce',
  //       '1/2 cup white vinegar',
  //       '1 head garlic, crushed',
  //       '1 teaspoon black peppercorns',
  //       '3 bay leaves',
  //       '1 tablespoon vegetable oil',
  //       '3 pounds chicken legs, thighs, and wings',
  //       '1 teaspoon white sugar, or to taste',
  //     ],
  //     instructions: [
  //       'Combine soy sauce, vinegar, garlic, peppercorns, and bay leaves in a large pot; add chicken. Bring to a boil. Reduce heat to medium-low and simmer until chicken is no longer pink in the center, about 30 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).',
  //       'Transfer chicken to a platter and keep warm. Strain and reserve liquid in the pot.',
  //       'Heat oil in a large skillet over medium heat. Add chicken; cook until browned, about 3 minutes per side. Transfer to a serving platter. Pour reserved cooking liquid into the skillet; add sugar and simmer until thickened, 5 to 7 minutes. Pour sauce over chicken.',
  //     ],
  //   };
  //   //Fill new recipes array with 20 of recipe
  //   const recipes = Array(20).fill(recipe);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState('');
  const [currentRecipes, setCurrentRecipes] = useState(recipes);

  // Function to handle recipe click and open the modal
  const handleRecipeClick = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };
  
  const handleSearch = (search) => {
    setSearch(search);
    const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()) || recipe.description.toLowerCase().includes(search.toLowerCase()));
    setCurrentRecipes(filteredRecipes);
  };



  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Recipes" />

      <h2 className="font-bold mb-12 text-5xl text-slate-700">Recipes</h2>

<div className='relative'>
<input placeholder='Search Recipes' value={search} onChange={(e) => handleSearch(e.target.value)} className='mt-1 p-3 text-sm block lg:w-2/5 w-full mb-10 bg-white border-none rounded-lg focus:outline-none focus:ring focus:ring-blue-200'></input>
  <div className='absolute inset-y-0 lg:left-[37%] md:left-[95%] left-[91%] flex items-center pr-3 pointer-events-none text-slate-400'>
      <span class="material-icons">
        search
    </span>
  </div>
</div>
      
      <div className="grid lg:gap-10 lg:grid-cols-4 md:gap-4 md:grid-cols-3 grid-cols-1">
        {currentRecipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} onClick={() => handleRecipeClick(recipe)} />
        ))}
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


