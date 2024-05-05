import { MaterialType, BicycleType } from "../../../types/enum";
export const wheelSizes = [
    { value: 26, label: '26' },
    { value: 28, label: '28' },
    { value: 29, label: '29' },
];

export const materialTypes = [
    { value: MaterialType.ALUMINIUM, label: 'Aluminium' },
    { value: MaterialType.CARBON, label: 'Carbon' },
    { value: MaterialType.TITANIUM, label: 'Titanum' },
];

export const bicycleTypes = [
    { value: BicycleType.MOUNTAIN, label: 'Mountain' },
    { value: BicycleType.HIGHWAY, label: 'Highway' },
    { value: BicycleType.CITY, label: 'City' },
    { value: BicycleType.ELECTRO, label: 'Electro' },
];