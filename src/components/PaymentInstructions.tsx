import { Copy, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import qr from "../Images/QR.jpeg";

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
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <AlertCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900">Payment Instructions</h3>
          <p className="text-sm text-blue-700">Choose one of the following methods to complete your payment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Option 1: UPI ID + Amount */}
        <div className="bg-white p-4 rounded-lg border border-blue-200 space-y-4">
          <h4 className="font-semibold text-blue-800 mb-2">Option 1: Pay via UPI</h4>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">UPI ID</label>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 px-3 py-2 rounded text-sm font-mono flex-1">
                6304566534@kotak
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
            <label className="text-sm font-medium text-gray-700 block mb-1">Amount</label>
            <div className="flex items-center gap-2">
              <code className="bg-gray-100 px-3 py-2 rounded text-sm font-mono flex-1">₹2,499</code>
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

        {/* Option 2: PhonePe QR */}
        <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
          <h4 className="font-semibold text-blue-800 mb-4">Option 2: Scan QR with PhonePe</h4>
          <img
            src={qr}
            alt="QR Code"
            className="mx-auto w-48 h-48 border rounded-lg shadow-sm"
          />
          <p className="text-sm text-gray-600 mt-3">
            Scan using any UPI app like PhonePe, Google Pay, or Paytm
          </p>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
        <h4 className="font-medium text-amber-800 mb-2">Important Notes:</h4>
        <ul className="text-sm text-amber-700 space-y-1 list-disc list-inside">
          <li>Make sure to use the exact UPI ID or scan the correct QR</li>
          <li>Take a clear screenshot after completing the payment</li>
          <li>Your registration will be verified within 24 hours</li>
          <li>You will receive a confirmation email after verification</li>
        </ul>
      </div>
    </div>
  );
};
