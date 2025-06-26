
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Download, Search, FileText, Archive, Image, Code, Calendar } from 'lucide-react';

interface DownloadItem {
  id: string;
  name: string;
  type: 'pdf' | 'zip' | 'image' | 'code';
  size: string;
  uploadDate: string;
  category: string;
  description: string;
  downloadUrl: string;
}

interface DownloadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadsModal = ({ isOpen, onClose }: DownloadsModalProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloads] = useState<DownloadItem[]>([
    {
      id: '1',
      name: 'HTML5 Semantic Elements Cheat Sheet',
      type: 'pdf',
      size: '2.3 MB',
      uploadDate: '2025-01-10',
      category: 'HTML',
      description: 'Complete reference for HTML5 semantic elements',
      downloadUrl: '#'
    },
    {
      id: '2',
      name: 'CSS Grid Layout Examples',
      type: 'zip',
      size: '5.7 MB',
      uploadDate: '2025-01-12',
      category: 'CSS',
      description: 'Collection of CSS Grid layout examples and exercises',
      downloadUrl: '#'
    },
    {
      id: '3',
      name: 'JavaScript ES6 Code Samples',
      type: 'zip',
      size: '3.1 MB',
      uploadDate: '2025-01-14',
      category: 'JavaScript',
      description: 'Modern JavaScript code examples and best practices',
      downloadUrl: '#'
    },
    {
      id: '4',
      name: 'React Component Library',
      type: 'zip',
      size: '12.5 MB',
      uploadDate: '2025-01-16',
      category: 'React',
      description: 'Reusable React components for your projects',
      downloadUrl: '#'
    },
    {
      id: '5',
      name: 'Design System Assets',
      type: 'zip',
      size: '8.9 MB',
      uploadDate: '2025-01-18',
      category: 'Design',
      description: 'Icons, fonts, and design system components',
      downloadUrl: '#'
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText;
      case 'zip': return Archive;
      case 'image': return Image;
      case 'code': return Code;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'bg-red-100 text-red-800';
      case 'zip': return 'bg-purple-100 text-purple-800';
      case 'image': return 'bg-green-100 text-green-800';
      case 'code': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDownloads = downloads.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (item: DownloadItem) => {
    // In a real app, this would trigger the actual download
    console.log('Downloading:', item.name);
    // For demo purposes, we'll just show an alert
    alert(`Downloading: ${item.name}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Course Downloads
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid gap-4">
            {filteredDownloads.map((item) => {
              const Icon = getIcon(item.type);
              return (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-gray-600" />
                        <div>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.category}</Badge>
                        <Badge className={getTypeColor(item.type)}>
                          {item.type.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{item.size}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.uploadDate).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => handleDownload(item)}
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredDownloads.length === 0 && (
            <div className="text-center py-8">
              <Download className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No downloads found</h3>
              <p className="text-gray-500">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
