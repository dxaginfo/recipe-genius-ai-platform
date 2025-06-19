import mongoose from 'mongoose';

export interface ISavedRecipe extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  recipeId: mongoose.Types.ObjectId;
  isFavorite: boolean;
  personalNotes: string;
  createdAt: Date;
  updatedAt: Date;
}

const savedRecipeSchema = new mongoose.Schema<ISavedRecipe>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recipe',
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    personalNotes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to ensure a user can save a recipe only once
savedRecipeSchema.index({ userId: 1, recipeId: 1 }, { unique: true });

export const SavedRecipe = mongoose.model<ISavedRecipe>('SavedRecipe', savedRecipeSchema);
