<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
{
    $recipes = Recipe::with('user:id,name,image,description,ingredients,instructions')->latest()->get();

    // Deserialize the 'ingredients' and 'instructions' fields in each recipe
    $recipes = $recipes->map(function ($recipe) {
        $recipe->ingredients = json_decode($recipe->ingredients);
        $recipe->instructions = json_decode($recipe->instructions);
        return $recipe;
    });

    //Die dump type of ingredients and instructions
    // var_dump($recipes[0]->ingredients);s

    return Inertia::render('Recipes/Index', [
        'recipes' => $recipes,
    ]);
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Recipes/Create', [
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        
        $request->merge([
            'ingredients' => json_encode($request->ingredients),
            'instructions' => json_encode($request->instructions),
        ]);


        $validated = $request->validate([
            'name' => 'required|string|max:50',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'required|string|max:255',
            'ingredients' => 'required|json',
            'instructions' => 'required|json',
        ]);

        //Store and save images in storage/app/public folder
        $validated['image'] = $request->file('image')->store('recipe-images', 'public');
        
        $request->user()->recipes()->create($validated);

        return redirect(route('recipes.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Recipe $recipe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recipe $recipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Recipe $recipe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recipe $recipe)
    {
        //
    }
}
