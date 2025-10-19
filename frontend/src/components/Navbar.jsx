import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Button } from './ui/button';
import { Menu, X, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [networkName, setNetworkName] = useState('Unknown');
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const location = useLocation();

  React.useEffect(() => {
    const getNetwork = async () => {
      if (window.ethereum && isConnected) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const chainIdNum = parseInt(chainId, 16);
          if (chainIdNum === 1) setNetworkName('Mainnet');
          else if (chainIdNum === 11155111) setNetworkName('Sepolia');
          else setNetworkName(`Chain ${chainIdNum}`);
        } catch (error) {
          setNetworkName('Unknown');
        }
      }
    };
    getNetwork();
  }, [isConnected]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Analytics', path: '/analytics' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Aura Protocol</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive(link.path) ? 'text-indigo-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {networkName}
                </div>
                <Button
                  onClick={() => disconnect()}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => connect({ connector: injected({ target: 'metaMask' }) })}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isConnected ? (
              <div className="space-y-2">
                <div className="text-xs bg-gray-100 px-2 py-1 rounded text-center">
                  {networkName}
                </div>
                <Button
                  onClick={() => disconnect()}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => connect({ connector: injected({ target: 'metaMask' }) })}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;