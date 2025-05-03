# vite-react-demo-app

Create node
```
nvm list available
nvm install 22.15.0
nvm use 22.15.0
node -v
npm -v
```
Create frontend react vite
```root
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
npm run dev
```
Local: http://localhost:5173


=========================

Create electron
build\icon.ico                  # 256 x 256 up
```root
npm init -y
npm install --save-dev electron@latest electron-builder@latest @types/electron@latest
npm install --save-dev esbuild
npm install --save-dev concurrently wait-on
npn run build
```

Rebuild
```
rmdir /s /q frontend\dist
npm install
npm run build
```

Local run electron
```
npm run dev
```

File Structure
```
vite-react-demo-app/
├── frontend/                         # Vite + React + TypeScript frontend
│   ├── public/                       # Static assets (favicons, etc.)
│   ├── src/                          # React source code (components, pages, etc.)
│   ├── index.html                    # Entry HTML for Vite build
│   ├── tsconfig.json                 # TypeScript config for React app
│   ├── vite.config.ts                # Vite dev/build configuration
│   └── package.json                  # Frontend-specific scripts and deps
│
├── dist/                             # Electron and frontend production output
│   └── *.exe                         # Electron installer executable(s)
│
├── main.ts                           # Electron main process entry (creates BrowserWindow)
├── preload.ts                        # Electron preload script (secure API bridge to frontend)
├── tsconfig.electron.json            # TypeScript config for Electron code
├── package.json                      # Root config: build scripts, electron-builder, shared devDeps
```
