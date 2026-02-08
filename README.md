# Krypto Casinos Website

Deutsche Krypto Casinos - Sicher und zuverlässig

## Project Structure

```
kryptocasinos/
├── client/               # React frontend
│   ├── public/          # Static files
│   ├── src/             # React components and pages
│   └── package.json     # Frontend dependencies
├── data/                # Data files
├── server.js            # Express server
├── package.json         # Backend dependencies
└── README.md            # This file
```

## Features

- 🔒 Secure Krypto Casino listings
- ⚡ Fast and responsive React frontend
- 🎨 Modern dark theme with Bitcoin orange accents
- 📱 Fully responsive design
- 🌐 Multi-page application with React Router
- 🎁 Bonus and promotions listings
- 📚 Complete guide for crypto gambling

## Technologies Used

### Frontend
- React 18
- React Router DOM
- React Helmet Async (SEO)
- React Icons
- CSS3 with custom properties

### Backend
- Express.js
- CORS
- Body Parser

## Installation

1. Install root dependencies:
```bash
npm install
```

2. Install client dependencies:
```bash
cd client
npm install
```

## Development

1. Start the client development server:
```bash
cd client
npm start
```

2. In another terminal, start the backend server:
```bash
npm run dev
```

The client will run on http://localhost:3000 and proxy API requests to http://localhost:3001

## Building for Production

1. Build the client:
```bash
cd client
npm run build
```

2. Start the production server:
```bash
npm start
```

The app will be available at http://localhost:3001

## Project Pages

- **Home** (`/`) - Landing page with featured casinos and benefits
- **Casinos** (`/casinos`) - Complete list of crypto casinos
- **Bonuses** (`/bonuses`) - Casino bonuses and promotions
- **Guide** (`/guide`) - Comprehensive guide for crypto gambling

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3001
NODE_ENV=production
```

## Deployment

The application is ready to be deployed to platforms like:
- Heroku
- Vercel
- Netlify
- DigitalOcean
- AWS

Make sure to:
1. Build the client before deployment
2. Set environment variables on your hosting platform
3. Run `npm start` as the production command

## License

MIT

## Support

For issues and questions, please open an issue in the repository.
