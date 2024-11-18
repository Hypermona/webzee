import { Category, categories } from "./data";

export const getCategoryLabels = (values: string[]): string[] => {
  const result: string[] = [];

  // Helper function to find label by value
  const findLabel = (categories: Category[], value: string): string | undefined => {
    for (const category of categories) {
      // If we find a match at the current category level
      if (category.value === value) {
        return category.label;
      }

      // Otherwise, check subcategories if they exist
      for (const subCategory of category.subCategories || []) {
        if (subCategory.value === value) {
          return subCategory.label;
        }
      }

      if (category?.subCategories?.length) {
        const foundLabel = findLabel(category?.subCategories, value);
        if (foundLabel) {
          return foundLabel;
        }
      }
    }
  };

  // Iterate over the values array and get the corresponding label
  for (const value of values) {
    const label = findLabel(categories, value);
    if (label) {
      result.push(label);
    }
  }

  return result;
};
