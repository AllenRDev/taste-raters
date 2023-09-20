import React from 'react';

const Recipe = ({ recipe, onClick }) => {

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-64 max-h-[400px] mx-auto" onClick={() => onClick(recipe)}>
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto"
        />
      </div>
      <div className="p-4 pt-1">
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <p className="text-gray-600 text-sm">By {recipe.author}</p>
        <div className="mt-4">
          <h3 className="text-md font-semibold">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold">Instructions:</h3>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    
  );
};

export default Recipe;

