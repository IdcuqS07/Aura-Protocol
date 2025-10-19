import React, { useState } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { ShieldCheck, Award, TrendingUp, FileText, CheckCircle2, Wallet, X, Share, User, History } from 'lucide-react';
import { userProfile } from '../data/mock';
import NetworkDetector from '../components/NetworkDetector';

const Dashboard = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const [networkName, setNetworkName] = React.useState('Unknown');
  const [activeModal, setActiveModal] = useState(null);
  const { zkIdBadge, creditPassport, reputationHistory } = userProfile;

  React.useEffect(() => {
    const getNetwork = async () => {
      if (window.ethereum && isConnected) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const chainIdNum = parseInt(chainId, 16);
          if (chainIdNum === 1) setNetworkName('Ethereum Mainnet');
          else if (chainIdNum === 11155111) setNetworkName('Sepolia Testnet');
          else setNetworkName(`Chain ${chainIdNum}`);
        } catch (error) {
          setNetworkName('Unknown');
        }
      }
    };
    getNetwork();
  }, [isConnected]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Manage your ZK Credit Passport and on-chain reputation</p>
        </div>
        
        <NetworkDetector />

        {isConnected ? (
          <Card className="mb-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-green-600" />
                Connected Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Address</div>
                  <div className="font-mono text-sm font-semibold text-gray-900">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Network</div>
                  <div className="font-semibold text-green-600">{networkName}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Balance</div>
                  <div className="font-semibold text-gray-900">
                    {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : '0.0000 ETH'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8 border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-yellow-600" />
                Wallet Not Connected
              </CardTitle>
              <CardDescription>
                Connect your wallet to access your ZK Credit Passport and reputation data
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        {/* ZK Badge Card */}
        <Card className="mb-8 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">ZK-ID Badge</CardTitle>
                <CardDescription>Your verified unique identity</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Badge ID</div>
                <div className="font-mono text-sm font-semibold text-gray-900">{zkIdBadge.nftId}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Uniqueness Status</div>
                <div className="font-semibold text-indigo-600">{zkIdBadge.uniqueness}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Issue Date</div>
                <div className="font-semibold text-gray-900">{zkIdBadge.issueDate}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credit Score */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-indigo-600" />
                Credit Passport Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">{creditPassport.score}</div>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    {creditPassport.level} Tier
                  </Badge>
                </div>
                <div className="w-32 h-32 rounded-full border-8 border-indigo-600 flex items-center justify-center">
                  <ShieldCheck className="w-16 h-16 text-indigo-600" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Credit Level Progress</span>
                    <span className="font-semibold text-gray-900">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{creditPassport.totalTransactions}</div>
                    <div className="text-sm text-gray-600">Transactions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{creditPassport.onChainAge}</div>
                    <div className="text-sm text-gray-600">On-Chain Age</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{creditPassport.riskRating}</div>
                    <div className="text-sm text-gray-600">Risk Rating</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                disabled={!isConnected}
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Proof
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setActiveModal('history')}
              >
                <History className="w-4 h-4 mr-2" />
                View History
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setActiveModal('profile')}
              >
                <User className="w-4 h-4 mr-2" />
                Update Profile
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setActiveModal('share')}
              >
                <Share className="w-4 h-4 mr-2" />
                Share Passport
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Verifications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Identity Verifications</CardTitle>
            <CardDescription>Connected verification providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {creditPassport.verifications.map((verification, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{verification.type}</div>
                    <div className="text-sm text-gray-600">{verification.date}</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {verification.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reputation History */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Reputation History</CardTitle>
            <CardDescription>Your credit score trend over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end space-x-4 h-48">
              {reputationHistory.map((item, index) => {
                const height = (item.score / 1000) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="text-xs font-semibold text-gray-900 mb-2">{item.score}</div>
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-2">{item.date}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Modals */}
        {activeModal === 'history' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Transaction History</h3>
                  <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <div className="font-semibold">DeFi Transaction #{i}</div>
                        <div className="text-sm text-gray-600">2024-01-{10+i}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">+{i*10} Points</div>
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'profile' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Update Profile</h3>
                  <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                    <input className="w-full p-2 border rounded-lg" placeholder="Enter display name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea className="w-full p-2 border rounded-lg" rows="3" placeholder="Tell us about yourself"></textarea>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex-1">
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setActiveModal(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'share' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Share Passport</h3>
                  <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                      <div className="text-sm text-gray-600">Your Passport URL</div>
                      <div className="font-mono text-sm break-all">https://aura.app/passport/{address?.slice(0,8)}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Copy Link
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Share on Twitter
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => setActiveModal(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
