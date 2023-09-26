import React, { useEffect } from 'react';
import Modal from 'react-modal';

const RecipeModal = ({ recipe, isOpen, onClose }) => {
  const closeModal = () => {
    onClose();
};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="modal-content"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      shouldFocusAfterRender={false}
    >
      <div className="modal-container bg-white p-4 rounded-lg shadow-lg w-4/5 md:w-3/5 h-screen md:h-fit max-h-screen overflow-scroll mx-auto">
        <div className="modal-header flex justify-between items-center pb-2 border-b">
          <h2 className="text-2xl font-semibold">{recipe.name}</h2>
          <button
            className="close-button text-red-500 hover:text-red-700"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="modal-body p-4">
          <img
            src={'storage/' + recipe.image_path}
            alt={recipe.title}
            className="recipe-image mb-4 rounded-lg aspect-[4/3]"
          />
          <h3 className="text-lg font-semibold">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2 text-sm">
                {ingredient}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Instructions</h3>
          <ol className="list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-2 text-sm">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Modal>
  );
};

export default RecipeModal;
