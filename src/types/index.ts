export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  deviceCount: number;
}

export interface Device {
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  android: string;
  files: FileItem[];
}

export interface FileItem {
  id: string;
  name: string;
  type: 'firmware' | 'rom' | 'tool' | 'frp' | 'driver' | 'combination';
  size: string;
  version: string;
  date: string;
  downloads: number;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  version: string;
  size: string;
  category: string;
  downloads: number;
}
