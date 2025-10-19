import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle } from 'lucide-react';

const NetworkDetector = () => {
  const { chain, isConnected } = useAccount();
  const [networkStatus, setNetworkStatus] = useState('');
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    const detectNetwork = async () => {
      if (typeof window !== 'undefined' && window.ethereum && isConnected) {
        try {
          const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
          const chainIdNum = parseInt(currentChainId, 16);
          setChainId(chainIdNum);
          
          if (chainIdNum === 1) {
            setNetworkStatus('mainnet');
          } else if (chainIdNum === 11155111) {
            setNetworkStatus('sepolia');
          } else {
            setNetworkStatus('unsupported');
          }
        } catch (error) {
          console.error('Error detecting network:', error);
        }
      }
    };
    
    detectNetwork();
    
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('chainChanged', detectNetwork);
      return () => window.ethereum.removeListener('chainChanged', detectNetwork);
    }
  }, [isConnected]);

  if (!isConnected) return null;

  if (networkStatus === 'unsupported') {
    return (
      <Alert className="mb-4 border-yellow-200 bg-yellow-50">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <AlertDescription className="text-yellow-800">
          Unsupported network detected. Please switch to Ethereum Mainnet or Sepolia.
        </AlertDescription>
      </Alert>
    );
  }

  const getNetworkName = () => {
    if (chainId === 1) return 'Ethereum Mainnet';
    if (chainId === 11155111) return 'Sepolia Testnet';
    if (chainId === 137) return 'Polygon Mainnet';
    if (chainId === 80001) return 'Polygon Mumbai';
    if (chainId === 56) return 'BSC Mainnet';
    if (chainId === 97) return 'BSC Testnet';
    return chainId ? `Chain ID: ${chainId}` : 'Unknown';
  };

  return (
    <div className="mb-4 text-sm text-gray-600">
      Connected to: <span className="font-semibold">{chainId ? getNetworkName() : 'Detecting...'}</span>
    </div>
  );
};

export default NetworkDetector;