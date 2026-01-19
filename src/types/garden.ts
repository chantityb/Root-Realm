export type SunRequirements = 'Full' | 'Partial Sun' | 'Dappled Shade' | 'Full Shade';
export type LifeCycleStage = 'Seed' | 'Seedling' | 'Vegetative' | 'Flowering' | 'Harvest' | 'Seed Saving';
export type WaterLevel = 'Low' | 'Moderate' | 'High';

export interface Plant {
    id: string; //UUID from Supabase
    commonName: string;
    scientificName?: string;

    // Growing Requirements
    sun: SunRequirements;
    waterLevel: WaterLevel;
    idealTempRange: { min: number; max: number }; // In Fahrenheit

    //Gardening Nerd Details
    sowingDepth: string;
    spacing: { individual: number; rows: number };
    daysToMaturity: number;
    
    // Metadata & Images
    tags: string[]; // e.g., ['pest-resistant', 'container-friendly']
    imageUrls: {
        healthy: string;
        seedling: string;
        pestExample?: string;
    };

    // The AI "Fairy" Wisdom
    botanistNotes?: string;
}