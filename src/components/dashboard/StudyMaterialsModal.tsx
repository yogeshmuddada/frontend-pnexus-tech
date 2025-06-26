
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, ExternalLink, FileText, Video, Code } from 'lucide-react';

interface StudyMaterial {
  id: string;
  title: string;
  type: 'video' | 'document' | 'code' | 'link';
  url: string;
  description: string;
  week?: number;
}

interface StudyMaterialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyMaterialsModal = ({ isOpen, onClose }: StudyMaterialsModalProps) => {
  const [materials] = useState<StudyMaterial[]>([
    {
      id: '1',
      title: 'HTML Fundamentals Guide',
      type: 'document',
      url: '#',
      description: 'Complete guide to HTML basics and semantic elements',
      week: 1
    },
    {
      id: '2',
      title: 'CSS Flexbox Tutorial',
      type: 'video',
      url: '#',
      description: 'Master CSS Flexbox with practical examples',
      week: 1
    },
    {
      id: '3',
      title: 'JavaScript ES6+ Features',
      type: 'code',
      url: '#',
      description: 'Modern JavaScript features and syntax',
      week: 2
    },
    {
      id: '4',
      title: 'React Documentation',
      type: 'link',
      url: 'https://react.dev',
      description: 'Official React documentation and guides',
      week: 3
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'document': return FileText;
      case 'code': return Code;
      case 'link': return ExternalLink;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'document': return 'bg-blue-100 text-blue-800';
      case 'code': return 'bg-green-100 text-green-800';
      case 'link': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Study Materials
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 mt-4">
          {materials.map((material) => {
            const Icon = getIcon(material.type);
            return (
              <Card key={material.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <div>
                        <CardTitle className="text-lg">{material.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {material.week && (
                        <Badge variant="outline">Week {material.week}</Badge>
                      )}
                      <Badge className={getTypeColor(material.type)}>
                        {material.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(material.url, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open
                    </Button>
                    <Button
                      variant="outline"
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
      </DialogContent>
    </Dialog>
  );
};
