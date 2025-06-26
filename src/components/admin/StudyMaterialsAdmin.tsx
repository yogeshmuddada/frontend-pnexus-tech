
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface StudyMaterial {
  id: string;
  title: string;
  description: string | null;
  file_url: string | null;
  file_type: string | null;
  week_number: number | null;
  is_published: boolean;
  created_at: string;
}

interface StudyMaterialsAdminProps {
  onStatsUpdate: () => void;
}

export const StudyMaterialsAdmin = ({ onStatsUpdate }: StudyMaterialsAdminProps) => {
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMaterial, setEditingMaterial] = useState<StudyMaterial | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file_url: '',
    file_type: 'pdf',
    week_number: 1,
    is_published: false
  });

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const { data, error } = await supabase
        .from('study_materials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMaterials(data || []);
    } catch (error) {
      console.error('Error fetching materials:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch study materials',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (editingMaterial) {
        const { error } = await supabase
          .from('study_materials')
          .update(formData)
          .eq('id', editingMaterial.id);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Study material updated successfully' });
      } else {
        const { error } = await supabase
          .from('study_materials')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Study material created successfully' });
      }

      setShowDialog(false);
      setEditingMaterial(null);
      resetForm();
      fetchMaterials();
      onStatsUpdate();
    } catch (error) {
      console.error('Error saving material:', error);
      toast({
        title: 'Error',
        description: 'Failed to save study material',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this material?')) return;

    try {
      const { error } = await supabase
        .from('study_materials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: 'Success', description: 'Study material deleted successfully' });
      fetchMaterials();
      onStatsUpdate();
    } catch (error) {
      console.error('Error deleting material:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete study material',
        variant: 'destructive',
      });
    }
  };

  const togglePublished = async (material: StudyMaterial) => {
    try {
      const { error } = await supabase
        .from('study_materials')
        .update({ is_published: !material.is_published })
        .eq('id', material.id);

      if (error) throw error;
      toast({ 
        title: 'Success', 
        description: `Material ${!material.is_published ? 'published' : 'unpublished'} successfully` 
      });
      fetchMaterials();
    } catch (error) {
      console.error('Error toggling published status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update published status',
        variant: 'destructive',
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      file_url: '',
      file_type: 'pdf',
      week_number: 1,
      is_published: false
    });
  };

  const openEditDialog = (material: StudyMaterial) => {
    setEditingMaterial(material);
    setFormData({
      title: material.title,
      description: material.description || '',
      file_url: material.file_url || '',
      file_type: material.file_type || 'pdf',
      week_number: material.week_number || 1,
      is_published: material.is_published
    });
    setShowDialog(true);
  };

  if (loading) {
    return <div className="text-center py-8">Loading study materials...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Study Materials</h2>
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setEditingMaterial(null); }}>
              <Plus className="w-4 h-4 mr-2" />
              Add Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingMaterial ? 'Edit Study Material' : 'Add Study Material'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <Input
                placeholder="File URL"
                value={formData.file_url}
                onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
              />
              <select
                className="w-full p-2 border rounded"
                value={formData.file_type}
                onChange={(e) => setFormData({ ...formData, file_type: e.target.value })}
              >
                <option value="pdf">PDF</option>
                <option value="video">Video</option>
                <option value="link">Link</option>
                <option value="document">Document</option>
              </select>
              <Input
                type="number"
                placeholder="Week Number"
                value={formData.week_number}
                onChange={(e) => setFormData({ ...formData, week_number: parseInt(e.target.value) })}
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_published}
                  onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                />
                <span>Published</span>
              </label>
              <Button onClick={handleSubmit} className="w-full">
                {editingMaterial ? 'Update' : 'Create'} Material
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Week</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{material.file_type}</Badge>
                  </TableCell>
                  <TableCell>Week {material.week_number}</TableCell>
                  <TableCell>
                    <Badge variant={material.is_published ? "default" : "secondary"}>
                      {material.is_published ? 'Published' : 'Draft'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => togglePublished(material)}
                      >
                        {material.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(material)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(material.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
