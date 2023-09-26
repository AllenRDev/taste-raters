import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Create({ auth }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: '',
    image_path: '',
    description: '',
    ingredients: [''],
    instructions: [''],
  });

    const [recipeImage, setRecipeImage] = useState('');
    const [ingredients, setIngredients] = useState(['', '']);
    const [instructions, setInstructions] = useState(['', '']);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleImageChange = (file) => {
      setRecipeImage(file);
      setData('image_path', file);
    };

    const addIngredient = () => {
      if (ingredients.length > 15) {
        setAlertMessage('You cannot have more than 15 ingredients!');
        setShowAlert(true);
        return;
      }
      setIngredients([...ingredients, '']);
      setData('ingredients', ingredients);
     
    };
  
    const addInstruction = () => {
      if (instructions.length > 10) {
        setAlertMessage('You cannot have more than 10 steps!');
        setShowAlert(true);
        return;
      }
      setInstructions([...instructions, '']);
      setData('instructions', instructions);
    };

    const deleteIngredient = (index) => {
      if (ingredients.length === 2) {
        setAlertMessage('You cannot delete this. At least two ingredients are required!');
        setShowAlert(true);
        return;
      }

      const updatedIngredients = [...ingredients];
      updatedIngredients.splice(index, 1);
      setIngredients(updatedIngredients);
      setData('ingredients', updatedIngredients);
    };

    const deleteInstruction = (index) => {
      if (instructions.length === 2) {
        setAlertMessage('You cannot delete this. At least two steps are required!');
        setShowAlert(true);
        return;
      }

      const updatedInstructions = [...instructions];
      updatedInstructions.splice(index, 1);
      setInstructions(updatedInstructions);
      setData('instructions', updatedInstructions);
    };
  
    const handleIngredientChange = (index, value) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = value;
      setIngredients(updatedIngredients);
      setData('ingredients', updatedIngredients);
    };
  
    const handleInstructionChange = (index, value) => {
      const updatedInstructions = [...instructions];
      updatedInstructions[index] = value;
      setInstructions(updatedInstructions);
      setData('instructions', updatedInstructions);
    };

    useEffect(() => {
      if (showAlert) {
        const timer = setTimeout(() => {
          setShowAlert(false);
        }, 3000); // Display for 3 seconds (adjust as needed)
    
        return () => clearTimeout(timer);
      }
    }, [showAlert]);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (ingredients.some((ingredient) => ingredient === '') || instructions.some((instruction) => instruction === '')) {
        setAlertMessage('You cannot have empty ingredients or instructions!');
        setShowAlert(true);
        return;
      }
    

      post(route('recipes.store'), { onSuccess: () => reset() });
    };
  
    return (
      <AuthenticatedLayout user={auth.user}>
        <Head title="Submit" />
  
        <div className="py-2">
          <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 ">
            <div className="overflow-hidden shadow-sm sm:rounded-lg bg-slate-200/50 border border-black/20">
              <div className="p-6  border-b border-gray-200">
              {showAlert && (
                <div className="mt-2 p-2 mb-2 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  {alertMessage}
                </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
                      Recipe Name
                    </label>
                    <input
                      type="text"
                      id="recipeName"
                      name="recipeName"
                      value={data.recipeName}
                      onChange={(e) => setData('name' ,e.target.value)}
                      required
                      className="mt-1 p-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <InputError message={errors.name} className='mb-2'/>
                  <div className="mb-3">
                    <label htmlFor="recipeImage" className="block text-sm font-medium text-gray-700">
                      Recipe Image
                    </label>
                    <input
                      type="file"
                      id="recipeImage"
                      name="recipeImage"
                      value={data.recipeImage}
                      onChange={(e) => handleImageChange(e.target.files[0])}
                      required
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  {recipeImage && (
                    <div className="mt-2">
                      <img
                        src={URL.createObjectURL(recipeImage)}
                        alt="Recipe Image"
                        className="w-40 h-40 object-cover mx-auto border border-black"
                      />
                    </div>
                      )}
                  </div>
                    <InputError message={errors.image_path} className='mb-2'/>
                    <div className="mb-3">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Recipe Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={data.description}
                      onChange={(e) => setData('description' ,e.target.value)}
                      required
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <InputError message={errors.description} className='mb-2'/>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">Ingredients</label>
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="text"
                          value={ingredient}
                          onChange={(e) => handleIngredientChange(index, e.target.value)}
                          placeholder={`Ingredient ${index + 1}`}
                          className="mt-1 p-2 flex-grow border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                          <button
                            type="button"
                            onClick={addIngredient}
                            className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 hover:bg-blue-300 text-blue-800 hover:text-blue-900 focus:outline-none focus:ring focus:ring-blue-200"
                          >
                            +
                          </button>
                            <button
                              type="button"
                              onClick={() => deleteIngredient(index)}
                              className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-red-200 text-red-800 hover:bg-red-300 hover:text-red-900 focus:outline-none focus:ring focus:ring-red-200"
                            >
                              -
                            </button>
                      </div>
                    ))}
                  </div>
                  <InputError message={errors.ingredients} className='mb-2'/>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">Instructions</label>
                    {instructions.map((instruction, index) => (
                      <div key={index} className="flex items-center">
                        <textarea
                          value={instruction}
                          onChange={(e) => handleInstructionChange(index, e.target.value)}
                          placeholder={`Step ${index + 1}`}
                          className="mt-1 p-2 flex-grow border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <button
                          type="button"
                          onClick={addInstruction}
                          className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-blue-200 hover:bg-blue-300 text-blue-800 hover:text-blue-900 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                          +
                        </button>
                        <button
                              type="button"
                              onClick={() => deleteInstruction(index)}
                              className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-red-200 text-red-800 hover:bg-red-300 hover:text-red-900 focus:outline-none focus:ring focus:ring-red-200"
                            >
                              -
                        </button>
                      </div>
                    ))}
                  </div>
                  <InputError message={errors.instructions} className='mb-3'/>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-200 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                      Submit Recipe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  }