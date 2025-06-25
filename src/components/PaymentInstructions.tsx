
import { Copy, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const PaymentInstructions = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the information manually",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <AlertCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900">Payment Instructions</h3>
          <p className="text-sm text-blue-700">Complete your payment to secure your spot</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">UPI ID</label>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-3 py-2 rounded text-sm font-mono flex-1">
                  durga.chikkala@paytm
                </code>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("durga.chikkala@paytm", "UPI ID")}
                >
                  {copiedField === "UPI ID" ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Amount</label>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-3 py-2 rounded text-sm font-mono flex-1">
                  ₹2,499
                </code>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("2499", "Amount")}
                >
                  {copiedField === "Amount" ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-medium text-amber-800 mb-2">Important Notes:</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Make sure to use the exact UPI ID provided above</li>
            <li>• Take a clear screenshot of the payment completion</li>
            <li>• Your registration will be verified within 24 hours</li>
            <li>• You'll receive a confirmation email once verified</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
