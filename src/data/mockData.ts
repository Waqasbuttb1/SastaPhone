import { Category, Brand, Device, Tool } from '../types';

export const categories: Category[] = [
  { id: 'firmware', name: 'Stock Firmware', icon: '📱', description: 'Official stock ROMs and firmware files', count: 15420 },
  { id: 'frp', name: 'FRP Bypass', icon: '🔓', description: 'FRP unlock files and tools', count: 3250 },
  { id: 'flash-tools', name: 'Flash Tools', icon: '⚡', description: 'SP Flash Tool, Odin, QFIL etc.', count: 145 },
  { id: 'drivers', name: 'USB Drivers', icon: '🔌', description: 'Android USB drivers for all brands', count: 89 },
  { id: 'combination', name: 'Combination Files', icon: '🔧', description: 'Samsung combination firmware', count: 8750 },
  { id: 'custom-rom', name: 'Custom ROMs', icon: '🎨', description: 'LineageOS, Pixel Experience, etc.', count: 2340 },
  { id: 'root', name: 'Root Files', icon: '🌱', description: 'Magisk, SuperSU, root packages', count: 560 },
  { id: 'recovery', name: 'Recovery', icon: '💾', description: 'TWRP, CWM custom recovery', count: 1890 },
];

export const brands: Brand[] = [
  { id: 'samsung', name: 'Samsung', logo: '🟦', deviceCount: 4521 },
  { id: 'xiaomi', name: 'Xiaomi', logo: '🟧', deviceCount: 2145 },
  { id: 'oppo', name: 'OPPO', logo: '🟩', deviceCount: 1876 },
  { id: 'vivo', name: 'Vivo', logo: '🟪', deviceCount: 1654 },
  { id: 'realme', name: 'Realme', logo: '🟨', deviceCount: 987 },
  { id: 'huawei', name: 'Huawei', logo: '🔴', deviceCount: 2341 },
  { id: 'oneplus', name: 'OnePlus', logo: '⬛', deviceCount: 234 },
  { id: 'motorola', name: 'Motorola', logo: '🔵', deviceCount: 567 },
  { id: 'lg', name: 'LG', logo: '🟥', deviceCount: 432 },
  { id: 'nokia', name: 'Nokia', logo: '⬜', deviceCount: 321 },
  { id: 'infinix', name: 'Infinix', logo: '🟫', deviceCount: 445 },
  { id: 'tecno', name: 'Tecno', logo: '🔷', deviceCount: 389 },
];

export const featuredDevices: Device[] = [
  {
    id: '1',
    name: 'Samsung Galaxy A54 5G',
    brand: 'Samsung',
    model: 'SM-A546B',
    image: '📱',
    android: 'Android 14',
    files: [
      { id: '1', name: 'A546BXXU6CXA1_OXM.zip', type: 'firmware', size: '6.2 GB', version: 'A546BXXU6CXA1', date: '2024-01-15', downloads: 12543 },
      { id: '2', name: 'A546B_COMBINATION_FAC.zip', type: 'combination', size: '1.1 GB', version: 'U6', date: '2024-01-10', downloads: 8721 },
    ]
  },
  {
    id: '2',
    name: 'Xiaomi Redmi Note 13 Pro',
    brand: 'Xiaomi',
    model: 'emerald',
    image: '📱',
    android: 'Android 14',
    files: [
      { id: '3', name: 'emerald_global_images_V14.0.8.0.zip', type: 'firmware', size: '5.8 GB', version: 'V14.0.8.0', date: '2024-01-18', downloads: 9876 },
    ]
  },
  {
    id: '3',
    name: 'OPPO Reno 11 Pro',
    brand: 'OPPO',
    model: 'CPH2487',
    image: '📱',
    android: 'Android 14',
    files: [
      { id: '4', name: 'CPH2487_11_F.15.zip', type: 'firmware', size: '5.4 GB', version: 'F.15', date: '2024-01-20', downloads: 5432 },
    ]
  },
  {
    id: '4',
    name: 'Vivo V30 Pro',
    brand: 'Vivo',
    model: 'V2318',
    image: '📱',
    android: 'Android 14',
    files: [
      { id: '5', name: 'PD2318F_EX_A_1.20.5.zip', type: 'firmware', size: '5.1 GB', version: '1.20.5', date: '2024-01-22', downloads: 3245 },
    ]
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    model: 'SM-S928B',
    image: '📱',
    android: 'Android 14',
    files: [
      { id: '6', name: 'S928BXXU1AXAA_OXM.zip', type: 'firmware', size: '7.8 GB', version: 'S928BXXU1AXAA', date: '2024-01-25', downloads: 25678 },
    ]
  },
  {
    id: '6',
    name: 'Realme GT 5 Pro',
    brand: 'Realme',
    model: 'RMX3888',
    image: '📱',
    android: 'Android 14',
    files: [
      { id: '7', name: 'RMX3888_14.0.0.800.zip', type: 'firmware', size: '5.6 GB', version: '14.0.0.800', date: '2024-01-24', downloads: 4321 },
    ]
  },
];

export const tools: Tool[] = [
  { id: '1', name: 'SP Flash Tool', description: 'MediaTek smartphone flashing utility', version: 'v5.2228', size: '48 MB', category: 'MTK', downloads: 125000 },
  { id: '2', name: 'Odin3', description: 'Samsung firmware flashing tool', version: 'v3.14.4', size: '4.2 MB', category: 'Samsung', downloads: 245000 },
  { id: '3', name: 'QFIL Tool', description: 'Qualcomm Flash Image Loader', version: 'v2.0.3.5', size: '156 MB', category: 'Qualcomm', downloads: 89000 },
  { id: '4', name: 'MiFlash Tool', description: 'Xiaomi official flashing tool', version: '2024.01.01', size: '72 MB', category: 'Xiaomi', downloads: 156000 },
  { id: '5', name: 'Samsung FRP Tool', description: 'One-click FRP bypass for Samsung', version: 'v1.2', size: '12 MB', category: 'FRP', downloads: 67000 },
  { id: '6', name: 'ADB & Fastboot', description: 'Android Debug Bridge platform tools', version: '35.0.0', size: '8.5 MB', category: 'Universal', downloads: 340000 },
  { id: '7', name: 'MTK Auth Bypass', description: 'MediaTek DA authentication bypass', version: 'v2.5', size: '15 MB', category: 'MTK', downloads: 45000 },
  { id: '8', name: 'UnlockTool', description: 'Universal Android unlock tool', version: '2024.01.15', size: '245 MB', category: 'Universal', downloads: 78000 },
];

export const recentFiles = [
  { device: 'Samsung Galaxy A15', file: 'SM-A156B Firmware', type: 'firmware', time: '2 min ago' },
  { device: 'Xiaomi 14', file: 'HyperOS Global', type: 'firmware', time: '5 min ago' },
  { device: 'OPPO A79', file: 'CPH2553 Stock ROM', type: 'firmware', time: '8 min ago' },
  { device: 'Vivo Y36', file: 'FRP Bypass File', type: 'frp', time: '12 min ago' },
  { device: 'Realme 12 Pro', file: 'RMX3840 Firmware', type: 'firmware', time: '15 min ago' },
  { device: 'Samsung Galaxy M35', file: 'Combination File', type: 'combination', time: '18 min ago' },
  { device: 'Infinix Hot 40i', file: 'Stock ROM', type: 'firmware', time: '22 min ago' },
  { device: 'Tecno Spark 20 Pro', file: 'FRP File', type: 'frp', time: '25 min ago' },
];
