import type { CollectionEntry } from "astro:content";

/**
 * Get the name of a character collection entry.
 * @param character Character whose name is to be retrieved.
 * @returns The name of the character.
 */
export function getName(character: CollectionEntry<"characters">): string {
  return character.data.name ?? character.id.slice(0, -3);
}
