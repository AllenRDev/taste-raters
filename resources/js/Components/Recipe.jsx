import React from 'react';

const Recipe = ({ recipe, onClick }) => {

  return (
    <div className="bg-white inline-block rounded-2xl shadow-xl" onClick={() => onClick(recipe)}>
      <div>
        <img
          src={'storage/' + recipe.image_path}
          alt={recipe.name}
          className='rounded-t-2xl w-full h-48 object-cover'
        />

      </div>

      <div className="p-4">
        <h2 className="font-bold mb-2 text-lg">{recipe.name}</h2>

        <div className='text-md leading-tight'> {recipe.description} </div>

        <div className="flex justify-end">
          <a href="#" className="font-bold text-slate-500"><span className="material-symbols-outlined">
dictionary
</span> View</a>
        </div>
      </div>
    </div>
    
  );
};

export default Recipe;

