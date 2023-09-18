import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth }) {

    const [recipeName, setRecipeName] = useState('');
    const [recipeImage, setRecipeImage] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState(['', '']);
    const [instructions, setInstructions] = useState(['', '']);
    const [showAlert, setShowAlert] = useState(false);
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      if (selectedImage) {
        setRecipeImage(selectedImage);
      }
    };

    const addIngredient = () => {
      if (ingredients.length < 15) {
        setIngredients([...ingredients, '']);
      }
    };
  
    const addInstruction = () => {
      if (instructions.length < 10) {
        setInstructions([...instructions, '']);
      }
    };

    const deleteIngredient = (index) => {
      if (ingredients.length === 2) {
        setShowAlert(true);
        return;
      }

      const updatedIngredients = [...ingredients];
      updatedIngredients.splice(index, 1);
      setIngredients(updatedIngredients);
    };

    const deleteInstruction = (index) => {
      if (instructions.length === 2) {
        setShowAlert(true);
        return;
      }

      const updatedInstructions = [...instructions];
      updatedInstructions.splice(index, 1);
      setInstructions(updatedInstructions);
    };
  
    const handleIngredientChange = (index, value) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = value;
      setIngredients(updatedIngredients);
    };
  
    const handleInstructionChange = (index, value) => {
      const updatedInstructions = [...instructions];
      updatedInstructions[index] = value;
      setInstructions(updatedInstructions);
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
  
      // Process and submit the form data as needed
      const formData = {
        recipeName,
        recipeImage,
        ingredients,
        instructions,
      };

      post(route('recipe.store'), { onSuccess: () => reset() });
  
      // Perform the submission action, e.g., API request or Inertia.js request
  
      // Reset the form fields after submission
      setRecipeName('');
      setRecipeImage('');
      setIngredients(['']);
      setInstructions(['']);
    };
  
    return (
      <AuthenticatedLayout user={auth.user}>
        <Head title="Submit" />
  
        <div className="py-12">
          <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
              {showAlert && (
                <div className="mt-2 p-2 mb-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  You cannot delete this. At least two ingredients/steps are required.
                </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700">
                      Recipe Name
                    </label>
                    <input
                      type="text"
                      id="recipeName"
                      name="recipeName"
                      value={recipeName}
                      onChange={(e) => setRecipeName(e.target.value)}
                      required
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
                        <label htmlFor="recipeImage" className="block text-sm font-medium text-gray-700">
                            Recipe Image
                        </label>
                        <input
                            type="file"
                            id="recipeImage"
                            name="recipeImage"
                            accept="image/*"
                            onChange={(e) => setRecipeImage(e.target.files[0])}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        {recipeImage && (
                        <img
                          src={URL.createObjectURL(recipeImage)}
                          alt="Recipe Preview"
                          className="mt-2 h-32 w-32 object-cover border border-gray-300 rounded-md"
                        />
                      )}
                    </div>
                    <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Recipe Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                              onClick={() => deleteIngredient(index)}
                              className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-red-200 text-red-800 hover:bg-red-300 hover:text-red-900 focus:outline-none focus:ring focus:ring-red-200"
                            >
                              -
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
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