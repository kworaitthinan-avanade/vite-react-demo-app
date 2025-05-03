// preload.ts

import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // Safe APIs
});