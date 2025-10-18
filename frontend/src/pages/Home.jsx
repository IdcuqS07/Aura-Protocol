import React from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, ShieldCheck, Fingerprint, Lock, Network, Brain, Cloud } from 'lucide-react';
import { stats } from '../data/mock';

const Home = () => {
  const { isConnected } = useAccount();
  const { connect } = useConnect();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
              Polygon's ZK Credit Layer
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Universal Trust in a{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Trustless World
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aura Protocol builds ZK Credit Passport — your on-chain financial identity that verifies 
              reputation and uniqueness without revealing personal data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isConnected ? (
                <Link to="/dashboard">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                    Get Your ZK Badge
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <Button onClick={() => connect({ connector: injected() })} size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                    Connect Wallet
                  </Button>
                  <p className="text-sm text-gray-500">Connect your wallet to get started</p>
                </div>
              )}
              <Link to="/features">
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <div className="text-sm font-medium text-green-600">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Building blocks of decentralized credibility</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'ZK Credit Passport',
                description: 'On-chain financial identity that verifies reputation without revealing personal data',
                color: 'indigo'
              },
              {
                icon: Fingerprint,
                title: 'Proof-of-Uniqueness',
                description: 'Cryptographic verification ensuring each user has one unique identity',
                color: 'purple'
              },
              {
                icon: Lock,
                title: 'Privacy-First',
                description: 'ZK-Proofs protect your data while proving your reputation',
                color: 'blue'
              },
              {
                icon: Network,
                title: 'Cross-Chain Ready',
                description: 'AuraX enables your reputation to work across multiple blockchains',
                color: 'violet'
              },
              {
                icon: Brain,
                title: 'AI Risk Oracle',
                description: 'Advanced AI analyzes on-chain behavior for accurate risk assessment',
                color: 'indigo'
              },
              {
                icon: Cloud,
                title: 'Proof-as-a-Service',
                description: 'API for protocols to verify user reputation in real-time',
                color: 'purple'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to build your on-chain reputation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Connect & Verify',
                description: 'Connect your wallet using RainbowKit and complete identity verification using ZK-Proofs through Civic, Worldcoin, or Lens ID'
              },
              {
                step: '02',
                title: 'Mint ZK Badge',
                description: 'Receive your unique ZK-ID Badge (NFT) as proof of your verified identity and uniqueness'
              },
              {
                step: '03',
                title: 'Build Reputation',
                description: 'Your on-chain activity builds your Credit Passport score, unlocking better DeFi opportunities'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-indigo-100 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your On-Chain Reputation?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users creating verifiable, privacy-preserving financial identities
          </p>
          {isConnected ? (
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          ) : (
            <Button onClick={() => connect({ connector: injected() })} size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8">
              Connect Wallet
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
