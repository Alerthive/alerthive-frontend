const URL = process.env.NEXT_PUBLIC_API_URL; 

export const getApiUrl = (path: string) => (URL? URL + path : path);

export const KEY = process.env.NEXT_PUBLIC_API_SECRET;