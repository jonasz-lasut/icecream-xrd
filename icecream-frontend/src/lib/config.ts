import { env } from '$env/dynamic/private';

const _backendProtocol: string = env.FIBER_COFFEE_PROTOCOL;
const _backendHost: string = env.FIBER_COFFEE_HOST;
const _backendPort: string = env.FIBER_COFFEE_PORT;
const _backendUri = `${_backendProtocol}://${_backendHost}:${_backendPort}`;

export const CoffeeBackendEndpoint = `${_backendUri}/v1/coffee`;
export const DescriptionBackendEndpoint = `${_backendUri}/v1/description`;
export const ProfileBackendEndpoint = `${_backendUri}/v1/profile`;
