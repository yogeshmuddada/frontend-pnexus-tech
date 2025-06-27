
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, BookOpen, MessageCircle, Calendar } from 'lucide-react';

const weeklyData = [
  { name: 'Mon', users: 12, materials: 3, questions: 8 },
  { name: 'Tue', users: 19, materials: 5, questions: 12 },
  { name: 'Wed', users: 15, materials: 2, questions: 6 },
  { name: 'Thu', users: 22, materials: 4, questions: 15 },
  { name: 'Fri', users: 18, materials: 6, questions: 10 },
  { name: 'Sat', users: 8, materials: 1, questions: 4 },
  { name: 'Sun', users: 6, materials: 0, questions: 2 },
];

const pieData = [
  { name: 'Completed', value: 65, color: '#10B981' },
  { name: 'In Progress', value: 25, color: '#3B82F6' },
  { name: 'Not Started', value: 10, color: '#F59E0B' },
];

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#3B82F6" radius={4} />
                <Bar dataKey="materials" fill="#10B981" radius={4} />
                <Bar dataKey="questions" fill="#F59E0B" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progress Distribution */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Course Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-gray-600">
                    {entry.name} ({entry.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Avg. Session Time</p>
                <p className="text-2xl font-bold">45 min</p>
                <Badge className="bg-blue-400/30 text-blue-100 mt-2">
                  +12% this week
                </Badge>
              </div>
              <Clock className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Completion Rate</p>
                <p className="text-2xl font-bold">87%</p>
                <Badge className="bg-green-400/30 text-green-100 mt-2">
                  +8% this week
                </Badge>
              </div>
              <BookOpen className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Questions/Day</p>
                <p className="text-2xl font-bold">23</p>
                <Badge className="bg-purple-400/30 text-purple-100 mt-2">
                  +15% this week
                </Badge>
              </div>
              <MessageCircle className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Active Sessions</p>
                <p className="text-2xl font-bold">156</p>
                <Badge className="bg-orange-400/30 text-orange-100 mt-2">
                  +5% this week
                </Badge>
              </div>
              <Calendar className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
