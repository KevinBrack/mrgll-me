export interface BlizzardPet {
  id: number;
  name: string;
  description: string;
  icon_url: string;
  type: string;
  source: string;
  is_capturable: boolean;
  is_tradable: boolean;
  is_battlepet: boolean;
  is_unique: boolean;
  abilities: PetAbility[];
}

export interface PetAbility {
  id: number;
  name: string;
  icon_url: string;
  cooldown: number;
  rounds: number;
  type: string;
}

export interface WarcraftPetImage {
  pet_id: number;
  image_url: string;
  page_url: string;
}

export interface BattleLocation {
  id: number;
  name: string;
  description: string;
  lore: string;
  image_prompt: string;
}

export interface ArtStyle {
  id: number;
  name: string;
  description: string;
  prompt_template: string;
}
