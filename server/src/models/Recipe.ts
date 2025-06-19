import mongoose from 'mongoose';

interface IIngredient {
  name: string;
  amount: number;
  unit: string;
}

interface INutritionalInfo {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
}

export interface IRecipe extends mongoose.Document {
  title: string;
  description: string;
  ingredients: IIngredient[];
  instructions: string[];
  nutritionalInfo: INutritionalInfo;
  cuisine: string;
  mealType: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  dietaryCategories: string[];
  createdBy: mongoose.Types.ObjectId;
  isPublic: boolean;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const recipeSchema = new mongoose.Schema<IRecipe>(
  {
    title: {
      type: String,
      required: [true, 'Recipe title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    ingredients: [
      {
        name: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
        },
        unit: {
          type: String,
        },
      },
    ],
    instructions: [{
      type: String,
    }],
    nutritionalInfo: {
      calories: Number,
      protein: Number,
      fat: Number,
      carbs: Number,
      fiber: Number,
    },
    cuisine: String,
    mealType: String,
    prepTime: Number,
    cookTime: Number,
    servings: Number,
    dietaryCategories: [{
      type: String,
      enum: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto', 'paleo', 'low-carb'],
    }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Recipe = mongoose.model<IRecipe>('Recipe', recipeSchema);
