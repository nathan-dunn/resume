import { Button } from '@chakra-ui/react';
import { jsPDF } from 'jspdf';
import { theme } from '../config';

const { colors } = theme;

interface PDFButtonProps {
  pageRef: any;
}

export const PDFButton = ({ pageRef }: PDFButtonProps): JSX.Element => {
  const downloadPdf = () => {
    const content = pageRef.current;
    const doc = new jsPDF({});
    doc.html(content, {
      callback: doc => {
        doc.save('resume-test.pdf');
      },
    });
  };

  return (
    <Button
      onClick={downloadPdf}
      h="20px"
      w="40px"
      fontSize="12px"
      variant="outline"
      position="absolute"
      bg={colors.backgroundColor3}
      top={4}
      left={4}
    >
      PDF
    </Button>
  );
};
