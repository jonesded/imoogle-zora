'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const TestClipboard = () => {
  const { toast } = useToast();

  const testCopy = async () => {
    const testText = "http://localhost:3000/test-meeting-123";
    
    console.log('Testing clipboard with:', testText);
    console.log('Navigator clipboard available:', !!navigator.clipboard);
    console.log('Secure context:', window.isSecureContext);
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(testText);
        toast({
          title: 'Test Successful',
          description: 'Clipboard API is working properly',
        });
      } else {
        console.log('Using fallback method');
        const textArea = document.createElement("textarea");
        textArea.value = testText;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          toast({
            title: 'Test Successful',
            description: 'Fallback clipboard method is working',
          });
        } else {
          throw new Error('Copy command failed');
        }
      }
    } catch (err) {
      console.error('Copy test failed:', err);
      toast({
        title: 'Test Failed',
        description: 'Clipboard functionality is not working: ' + err,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-dark-3">
      <h3 className="text-lg font-semibold mb-2 text-white">Clipboard Test</h3>
      <Button onClick={testCopy} className="bg-blue-1">
        Test Copy Functionality
      </Button>
    </div>
  );
};

export default TestClipboard;