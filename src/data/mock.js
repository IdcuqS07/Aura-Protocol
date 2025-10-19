// Mock data for Aura Protocol

export const userProfile = {
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  zkIdBadge: {
    verified: true,
    uniqueness: 'VERIFIED',
    issueDate: '2024-01-15',
    nftId: 'AURA-ZK-001234'
  },
  creditPassport: {
    score: 785,
    level: 'Gold',
    totalTransactions: 342,
    onChainAge: '2.3 years',
    riskRating: 'Low',
    verifications: [
      { type: 'Civic', status: 'verified', date: '2024-01-15' },
      { type: 'Worldcoin', status: 'verified', date: '2024-01-18' },
      { type: 'Lens ID', status: 'verified', date: '2024-01-20' }
    ]
  },
  reputationHistory: [
    { date: '2024-01', score: 650 },
    { date: '2024-02', score: 680 },
    { date: '2024-03', score: 710 },
    { date: '2024-04', score: 745 },
    { date: '2024-05', score: 765 },
    { date: '2024-06', score: 785 }
  ]
};

export const roadmapPhases = [
  {
    wave: 1,
    title: 'Proof of Uniqueness & ZK Identity',
    status: 'completed',
    goal: 'Build a layer of unique and credible identities on Polygon',
    features: [
      'Proof-of-Uniqueness Implementation',
      'Civic Integration',
      'Worldcoin Integration',
      'Lens ID Integration',
      'ZK-ID Badge Launch'
    ],
    output: 'ZK-ID Badge (NFT)'
  },
  {
    wave: 2,
    title: 'ZK Credit Passport & Proof-as-a-Service',
    status: 'in-progress',
    goal: 'Transform on-chain reputation into verifiable cryptographic proofs',
    features: [
      'ZK Credit Passport (Soulbound NFT)',
      'Proof-as-a-Service API',
      'Premium Analytics Dashboard',
      'Lender Integration Tools'
    ],
    output: 'ZK Credit Passport + API Monetization'
  },
  {
    wave: 3,
    title: 'Cross-Chain & AI Risk Oracle',
    status: 'upcoming',
    goal: 'Expand cross-chain functionality and integrate AI',
    features: [
      'AuraX Cross-Chain Layer',
      'AI Risk Oracle Integration',
      'Reputation DAO',
      'AI-based Lending'
    ],
    output: 'Full Ecosystem: AI + DeFi + Governance'
  }
];

export const analyticsData = {
  totalUsers: 15847,
  totalVerifications: 23456,
  averageScore: 712,
  activeProtocols: 34,
  monthlyGrowth: 23.5,
  scoreDistribution: [
    { range: '0-200', count: 1200, percentage: 7.6 },
    { range: '201-400', count: 2400, percentage: 15.1 },
    { range: '401-600', count: 4500, percentage: 28.4 },
    { range: '601-800', count: 5200, percentage: 32.8 },
    { range: '801-1000', count: 2547, percentage: 16.1 }
  ],
  verificationMethods: [
    { method: 'Civic', users: 8934, percentage: 56.4 },
    { method: 'Worldcoin', users: 6234, percentage: 39.3 },
    { method: 'Lens ID', users: 5123, percentage: 32.3 }
  ],
  recentActivity: [
    { id: 1, user: '0x742d...bEb', action: 'ZK Badge Minted', timestamp: '2 mins ago', score: 785 },
    { id: 2, user: '0x123f...4ac', action: 'Proof Generated', timestamp: '5 mins ago', score: 654 },
    { id: 3, user: '0x9a7b...2ef', action: 'Credit Updated', timestamp: '8 mins ago', score: 890 },
    { id: 4, user: '0x456c...9bd', action: 'Verification Complete', timestamp: '12 mins ago', score: 723 },
    { id: 5, user: '0x789e...5cd', action: 'Cross-Chain Sync', timestamp: '15 mins ago', score: 812 }
  ]
};

export const features = [
  {
    id: 1,
    title: 'ZK Credit Passport',
    description: 'On-chain financial identity that verifies reputation without revealing personal data',
    icon: 'shield-check'
  },
  {
    id: 2,
    title: 'Proof-of-Uniqueness',
    description: 'Cryptographic verification ensuring each user has one unique identity',
    icon: 'fingerprint'
  },
  {
    id: 3,
    title: 'Privacy-First',
    description: 'ZK-Proofs protect your data while proving your reputation',
    icon: 'lock'
  },
  {
    id: 4,
    title: 'Cross-Chain Ready',
    description: 'AuraX enables your reputation to work across multiple blockchains',
    icon: 'network'
  },
  {
    id: 5,
    title: 'AI Risk Oracle',
    description: 'Advanced AI analyzes on-chain behavior for accurate risk assessment',
    icon: 'brain'
  },
  {
    id: 6,
    title: 'Proof-as-a-Service',
    description: 'API for protocols to verify user reputation in real-time',
    icon: 'cloud'
  }
];

export const stats = [
  { label: 'Total Users', value: '15,847', change: '+23.5%' },
  { label: 'Verifications', value: '23,456', change: '+18.2%' },
  { label: 'Protocols', value: '34', change: '+12' },
  { label: 'Avg Score', value: '712', change: '+5.3%' }
];
