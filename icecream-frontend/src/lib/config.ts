import { env } from '$env/dynamic/public';
import type { Flavour } from './types';

export const IceCreamFlavour: Flavour = <Flavour>env.ICECREAM_FLAVOUR;
export const IceCreamManufacturer: string = <string>env.ICECREAM_MANUFACTURER;
