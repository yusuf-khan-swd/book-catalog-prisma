import { Book, Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBook = async (data: Book): Promise<Book> => {
  return await prisma.book.create({ data });
};

const getAllBooks = async (): Promise<Book[]> => {
  return await prisma.book.findMany();
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  return await prisma.book.findUnique({
    where: { id },
  });
};

const updateBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book | null> => {
  return await prisma.book.update({
    where: { id },
    data,
  });
};

const deleteBook = async (id: string): Promise<Book | null> => {
  return await prisma.book.delete({ where: { id } });
};

const getBooksByCategory = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: { id },
    include: { books: true },
  });
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  getBooksByCategory,
};
