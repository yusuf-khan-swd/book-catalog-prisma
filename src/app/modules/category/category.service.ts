import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category): Promise<Category> => {
  return await prisma.category.create({ data });
};

export const CategoryService = { createCategory };
