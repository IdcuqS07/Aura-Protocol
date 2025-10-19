import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ShieldCheck, Fingerprint, Lock, Network, Brain, Cloud, ArrowRight, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const mainFeatures = [
    {
      icon: ShieldCheck,
      title: 'ZK Credit Passport',
      description: 'Your on-chain financial identity that verifies reputation and uniqueness without revealing personal data.',
      details: [
        'Soulbound NFT representing your credit history',
        'Verifiable proofs without exposing sensitive information',
        'Portable across DeFi protocols',
        'Dynamic score based on on-chain behavior'
      ],
      color: 'indigo'
    },
    {
      icon: Fingerprint,
      title: 'Proof-of-Uniqueness',
      description: 'Cryptographic verification ensuring each user maintains only one unique identity in the ecosystem.',
      details: [
        'Prevents Sybil attacks and identity farming',
        'Integration with Civic, Worldcoin, and Lens ID',
        'ZK-based verification process',
        'Immutable uniqueness guarantees'
      ],
      color: 'purple'
    },
    {
      icon: Lock,
      title: 'Privacy-First Architecture',
      description: 'Zero-Knowledge Proofs protect your personal data while enabling verifiable reputation.',
      details: [
        'No personal data stored on-chain',
        'Selective disclosure of reputation attributes',
        'Cryptographic proof generation',
        'GDPR and privacy regulation compliant'
      ],
      color: 'blue'
    },
    {
      icon: Network,
      title: 'AuraX Cross-Chain',
      description: 'Extend your reputation across multiple blockchains with seamless cross-chain functionality.',
      details: [
        'Multi-chain reputation aggregation',
        'Unified credit score across networks',
        'Bridge-compatible architecture',
        'Future-ready for new chains'
      ],
      color: 'violet'
    },
    {
      icon: Brain,
      title: 'AI Risk Oracle',
      description: 'Advanced machine learning models analyze on-chain behavior for accurate risk assessment.',
      details: [
        'Real-time behavior analysis',
        'Predictive risk scoring',
        'Pattern recognition for fraud detection',
        'Continuous model improvement'
      ],
      color: 'pink'
    },
    {
      icon: Cloud,
      title: 'Proof-as-a-Service API',
      description: 'Enterprise-ready API for DeFi protocols to verify user reputation in real-time.',
      details: [
        'RESTful API with comprehensive documentation',
        'Sub-second proof verification',
        'Flexible integration options',
        'Usage-based pricing model'
      ],
      color: 'cyan'
    }
  ];

  const useCases = [
    {
      title: 'DeFi Lending',
      description: 'Enable undercollateralized loans based on verified on-chain reputation'
    },
    {
      title: 'DAOs & Governance',
      description: 'Prevent Sybil attacks and ensure one-person-one-vote mechanisms'
    },
    {
      title: 'Airdrops & Rewards',
      description: 'Distribute tokens fairly to unique, verified community members'
    },
    {
      title: 'Credit Scores',
      description: 'Build trustless credit scoring systems for Web3 financial services'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
            Core Technology
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Decentralized Trust
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aura Protocol combines cutting-edge cryptography, AI, and blockchain technology 
            to create the most advanced reputation system in Web3.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-12 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card key={index} className={`border-2 hover:shadow-xl transition-all ${
                isEven ? 'border-indigo-100' : 'border-purple-100'
              }`}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                      <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 text-${feature.color}-600`} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                      <Button 
                        onClick={() => setSelectedFeature(feature)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                    <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Key Capabilities</h4>
                        <ul className="space-y-3">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className={`w-1.5 h-1.5 bg-${feature.color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Use Cases */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Use Cases</h2>
            <p className="text-lg text-gray-600">See how Aura Protocol powers trust across the Web3 ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Card className="border-0 bg-gradient-to-r from-indigo-600 to-purple-600">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Experience the Future of Trust?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join the growing ecosystem of protocols and users building reputation on Aura
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Get Your ZK Badge
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${selectedFeature.color}-100 to-${selectedFeature.color}-50 rounded-lg flex items-center justify-center mr-4`}>
                    <selectedFeature.icon className={`w-6 h-6 text-${selectedFeature.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedFeature.title}</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedFeature(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedFeature.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Technical Details</h4>
                <ul className="space-y-3">
                  {selectedFeature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 bg-${selectedFeature.color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex gap-3">
                  <Link to="/dashboard">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      Try It Now
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={() => setSelectedFeature(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
