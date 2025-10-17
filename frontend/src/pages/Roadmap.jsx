import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { roadmapPhases } from '../data/mock';

const Roadmap = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 'upcoming':
        return <Circle className="w-6 h-6 text-gray-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
      case 'upcoming':
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Upcoming</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Development Roadmap
          </h1>
          <p className="text-xl text-gray-600">
            Our journey to becoming Polygon's universal trust layer
          </p>
        </div>

        <div className="space-y-12">
          {roadmapPhases.map((phase, index) => (
            <div key={phase.wave} className="relative">
              {/* Connector Line */}
              {index < roadmapPhases.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-purple-300 -mb-12"></div>
              )}

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full p-2 shadow-md border-2 border-gray-100">
                      {getStatusIcon(phase.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-indigo-600 text-white">Wave {phase.wave}</Badge>
                        {getStatusBadge(phase.status)}
                      </div>
                      <CardTitle className="text-2xl mb-2">{phase.title}</CardTitle>
                      <p className="text-gray-600">{phase.goal}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {phase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Expected Output</h4>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <p className="text-gray-800">{phase.output}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Final Vision */}
        <Card className="mt-12 bg-gradient-to-br from-indigo-600 to-purple-600 border-0 text-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Final Vision</h3>
              <h4 className="text-3xl font-bold mb-4">Aura as Polygon's Trust Layer</h4>
              <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
                Become the standard for reputation and financial identity on Polygon. 
                Unifying AI + DeFi + ZK Proofs into a secure and efficient ecosystem, 
                making trust a new primitive on the blockchain.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;
