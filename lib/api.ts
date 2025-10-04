// lib/api.ts
import { Note, Category } from "@/types/note";
import axios from "axios";

axios.defaults.baseURL = "https://next-docs-9f0504b0a741.herokuapp.com";

interface NoteListResponse {
  notes: Note[];
  total: number;
}
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// lib/api.ts

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios<Category[]>("/categories");
  return res.data;
};
