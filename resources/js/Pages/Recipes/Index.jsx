import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Recipe from '@/Components/Recipe';
import RecipeModal from '@/Components/RecipeModal';
import { Head } from '@inertiajs/react';

export default function Index({ auth, recipes }) {

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
        {currentRecipes.length > 0 ? currentRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} onClick={handleRecipeClick} />
        )) : <div className='text-center text-2xl text-slate-400'>No Recipes Found</div>}
        
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


