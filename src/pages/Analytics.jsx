import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, ShieldCheck, TrendingUp, Activity, CheckCircle2 } from 'lucide-react';
import { analyticsData } from '../data/mock';

const Analytics = () => {
  const { totalUsers, totalVerifications, averageScore, activeProtocols, monthlyGrowth, scoreDistribution, verificationMethods, recentActivity } = analyticsData;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Platform Analytics</h1>
          <p className="text-gray-600">Real-time insights into the Aura Protocol ecosystem</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  +{monthlyGrowth}%
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{totalUsers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <ShieldCheck className="w-8 h-8 text-purple-600" />
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  +18.2%
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{totalVerifications.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Verifications</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                  +12
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{activeProtocols}</div>
              <div className="text-sm text-gray-600">Active Protocols</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">
                  +5.3%
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{averageScore}</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Score Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Score Distribution</CardTitle>
              <CardDescription>User distribution across score ranges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scoreDistribution.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.range}</span>
                      <span className="text-sm text-gray-600">{item.count.toLocaleString()} users ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all"
                        style={{ width: `${item.percentage * 2}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Verification Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Verification Methods</CardTitle>
              <CardDescription>Popular identity verification providers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {verificationMethods.map((method, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-medium text-gray-900">{method.method}</span>
                      </div>
                      <span className="text-sm text-gray-600">{method.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${method.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{method.users.toLocaleString()} users</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{activity.action}</div>
                    <div className="text-sm text-gray-600">User: {activity.user}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-semibold text-indigo-600">Score: {activity.score}</div>
                      <div className="text-xs text-gray-500">{activity.timestamp}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-700">System Uptime</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">0.3s</div>
                <div className="text-sm text-gray-700">Avg Proof Time</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-700">Privacy Preserved</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
