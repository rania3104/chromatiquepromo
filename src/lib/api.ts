
import { categories, clothingItems, seasons, subscriptionPlans } from "./data";


export const getCategories = () => {
  return Promise.resolve(categories);
};


export const getClothingItemById = (id: string) => {
  const item = clothingItems.find((item) => item.id === id);
  return Promise.resolve(item || null);
};

export const getSavedItems = (userProvidedItems?: string[]) => {

  const savedItemIds = userProvidedItems || ["item-1", "item-3", "item-6", "item-9"];
  return Promise.resolve(
    clothingItems.filter((item) => savedItemIds.includes(item.id))
  );
};

