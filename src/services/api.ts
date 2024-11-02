import {
  BlizzardPet,
  WarcraftPetImage,
  BattleLocation,
  ArtStyle,
} from '../types/pets';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchPets(): Promise<BlizzardPet[]> {
  const response = await fetch(`${API_BASE_URL}/api/pets`);
  if (!response.ok) throw new Error('Failed to fetch pets');
  return response.json();
}

export async function fetchPetImages(
  petId: number
): Promise<WarcraftPetImage[]> {
  const response = await fetch(`${API_BASE_URL}/api/pets/${petId}/images`);
  if (!response.ok) throw new Error('Failed to fetch pet images');
  return response.json();
}

export async function fetchBattleLocations(): Promise<BattleLocation[]> {
  const response = await fetch(`${API_BASE_URL}/api/battle-locations`);
  if (!response.ok) throw new Error('Failed to fetch battle locations');
  return response.json();
}

export async function fetchArtStyles(): Promise<ArtStyle[]> {
  const response = await fetch(`${API_BASE_URL}/api/art-styles`);
  if (!response.ok) throw new Error('Failed to fetch art styles');
  return response.json();
}
