import React from 'react';

const Recipe = ({ recipe, onClick }) => {

  return (
    <div className="bg-white inline-block rounded-2xl shadow-xl shadow-slate-700/10" onClick={() => onClick(recipe)}>
      <div>
        {/* <img
          src={recipe.image}
          alt={recipe.title}
        /> */}

        <div className="bg-slate-300 rounded-t-2xl h-40 w-full"></div>
      </div>

      <div className="p-4">
        <h2 className="font-bold mb-2 text-lg">{recipe.name}</h2>

        <div className='text-md leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo, enim voluptatum ipsa nulla quaerat id nostrum, repellat optio eos sit perferendis in facilis deserunt.</div>

        <div className="flex justify-end">
          <a href="#" className="font-bold text-slate-500">View</a>
        </div>
      </div>
    </div>
    
  );
};

export default Recipe;

