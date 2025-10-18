# Aura Protocol - ZK Credit Passport

Universal Trust in a Trustless World. Aura Protocol builds ZK Credit Passport — your on-chain financial identity that verifies reputation and uniqueness without revealing personal data.

## 🚀 Features

- **ZK Credit Passport** - On-chain financial identity with privacy-preserving verification
- **Proof-of-Uniqueness** - Cryptographic verification ensuring one unique identity per user
- **Privacy-First** - ZK-Proofs protect your data while proving your reputation
- **Cross-Chain Ready** - AuraX enables reputation across multiple blockchains
- **AI Risk Oracle** - Advanced AI analyzes on-chain behavior for accurate risk assessment
- **Proof-as-a-Service** - API for protocols to verify user reputation in real-time

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Wagmi** - React hooks for Ethereum wallet connection
- **Viem** - TypeScript interface for Ethereum
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server for production
- **Pydantic** - Data validation using Python type hints
- **Motor** - Async MongoDB driver
- **JWT** - JSON Web Token authentication

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- MongoDB (optional, for backend)

### Frontend Setup
```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

## 🌐 Usage

1. **Start Backend**: `http://localhost:8000`
2. **Start Frontend**: `http://localhost:3001`
3. **Connect Wallet**: Click "Connect Wallet" to link your Ethereum wallet
4. **View Dashboard**: Access your ZK Credit Passport and reputation data
5. **Generate Proofs**: Create privacy-preserving proofs of your reputation

## 🔗 Wallet Connection

The app supports wallet connection through:
- **MetaMask** - Browser extension wallet
- **Injected Providers** - Any browser-based Ethereum wallet
- **Mainnet & Sepolia** - Support for both networks

## 📱 Pages

- **Home** - Landing page with features overview
- **Features** - Detailed feature explanations
- **Roadmap** - Development timeline
- **Dashboard** - User wallet and reputation management
- **Analytics** - Reputation metrics and insights

## 🔧 Configuration

### Environment Variables
```bash
# Frontend (.env)
PORT=3001
GENERATE_SOURCEMAP=false

# Backend (.env)
MONGODB_URL=mongodb://localhost:27017
JWT_SECRET=your-secret-key
```

### Wagmi Configuration
```javascript
// src/wagmi.js
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
```

## 🏗 Architecture

```
app/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── data/          # Mock data and constants
│   │   └── wagmi.js       # Wallet configuration
│   └── public/            # Static assets
├── backend/           # FastAPI backend application
│   ├── server.py          # Main application file
│   └── requirements.txt   # Python dependencies
└── tests/             # Test files
```

## 🎨 UI Components

Built with **Radix UI** primitives:
- Accordion, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu, Form
- Navigation Menu, Progress, Tabs
- Toast, Tooltip, and more

## 🔐 Security Features

- **ZK-Proofs** - Zero-knowledge cryptographic proofs
- **Privacy-Preserving** - No personal data exposure
- **Secure Wallet Connection** - Industry-standard wallet integration
- **JWT Authentication** - Secure API access
- **Input Validation** - Comprehensive data validation

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Docker)
```dockerfile
FROM python:3.9
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Website**: [Aura Protocol](https://aura-protocol.com)
- **Documentation**: [Docs](https://docs.aura-protocol.com)
- **Twitter**: [@AuraProtocol](https://twitter.com/auraprotocol)

---

Built with ❤️ for the decentralized future