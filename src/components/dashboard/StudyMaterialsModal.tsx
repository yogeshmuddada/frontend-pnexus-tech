
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Download, ExternalLink, FileText } from 'lucide-react';

interface StudyMaterial {
  id: string;
  title: string;
  description: string | null;
  file_url: string | null;
  file_type: string | null;
  week_number: number | null;
}

interface StudyMaterialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyMaterialsModal = ({ isOpen, onClose }: StudyMaterialsModalProps) => {
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      fetchMaterials();
    }
  }, [isOpen]);

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('study_materials')
        .select('*')
        .eq('is_published', true)
        .order('week_number', { ascending: true });

      if (error) throw error;
      setMaterials(data || []);
    } catch (error) {
      console.error('Error fetching materials:', error);
      toast({
        title: 'Error',
        description: 'Failed to load study materials',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getFileIcon = (fileType: string | null) => {
    switch (fileType) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'video':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'link':
        return <ExternalLink className="w-5 h-5 text-green-500" />;
      default:
        return <Download className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Study Materials
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-y-auto max-h-[60vh] space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>Loading study materials...</p>
            </div>
          ) : materials.length === 0 ? (
            <div className="text-center py-8">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No Materials Available</h3>
              <p className="text-gray-500">Study materials will be published here as the course progresses.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {materials.map((material) => (
                <Card key={material.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {getFileIcon(material.file_type)}
                        {material.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        {material.week_number && (
                          <Badge variant="outline">Week {material.week_number}</Badge>
                        )}
                        <Badge variant="secondary">{material.file_type?.toUpperCase()}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {material.description && (
                      <p className="text-gray-600 mb-4">{material.description}</p>
                    )}
                    {material.file_url && (
                      <Button asChild className="w-full">
                        <a
                          href={material.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Access Material
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
