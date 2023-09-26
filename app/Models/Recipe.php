<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recipe extends Model
{
    use HasFactory;

    protected $casts = [
        ];
        

    protected $fillable = [
        'name',
        'image',
        'description',
        'ingredients',
        'instructions',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
