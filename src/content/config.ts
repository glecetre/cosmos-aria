import { defineCollection, z } from "astro:content";

const charactersCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const chroniclesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const questsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  characters: charactersCollection,
  chronicles: chroniclesCollection,
  quests: questsCollection,
};
