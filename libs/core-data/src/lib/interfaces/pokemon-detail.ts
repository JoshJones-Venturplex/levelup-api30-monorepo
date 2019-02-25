export interface PokemonDetail {
    base_happiness: number;
    capture_rate: number;
    color: {
      name: string;
      url: string;
    };
    egg_groups: any[];
    evolution_chain: {
      url: string;
    };
    evolves_from_species: any;
    flavor_text_entries: any[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: any[];
    generation: {
      name: string;
      url: string;
    };
    growth_rate: {
      name: string;
      url: string;
    };
    habitat: {
      name: string;
      url: string;
    };
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    names: any[];
    order: number;
    pal_park_encounters: any[];
    pokedex_numbers: any[];
    shape: {
      name: string;
      url: string
    };
    varieties: any[]
  }