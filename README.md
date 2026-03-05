# MediConnect
## MediConnect

Basic full-stack project structure:

- `client/`: React + Vite frontend
- `server/`: Node.js + Express backend

## Prerequisites

- Node.js 18+
- npm 9+

## Setup

Install dependencies for both apps:

```bash
cd client
npm install

cd ../server
npm install
```

## Run (Development)

Start backend:

```bash
cd server
npm run dev
```

Start frontend in another terminal:

```bash
cd client
npm run dev
```

## Scripts

Frontend (`client/package.json`):

- `npm run dev` - start Vite dev server
- `npm run build` - build for production
- `npm run preview` - preview production build

Backend (`server/package.json`):

- `npm run dev` - run server with watch mode
- `npm start` - run server normally
