import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { saveAs } from 'file-saver';
import { UHeading1 } from './Uheading';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface DataItem {
  name: string;
  email: string;
  fat: number;
  protein: number;
  price: string;
}

interface DownloadableDataProps {
  data: DataItem[];
}

function generatePDF(data: DataItem[]) {
  // Customize the PDF document content according to your data structure
  const docDefinition: pdfMake.TDocumentDefinitions = {
    content: [
      {
        text: 'Downloadable Data PDF',
        fontSize: 20,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
      },
      // Add your data rows here
      ...data.map((item, index) => ({
        text: `${index + 1}. ${item.name} (${item.email}) - Weight: ${item.fat}g, Price: ${item.price} PKR`,
        fontSize: 14,
        margin: [0, 0, 0, 10],
      })),
    ],
  };

  const pdfDoc = pdfMake.createPdf(docDefinition);

  // Generate the PDF and trigger the download
  pdfDoc.getBlob((blob: any) => {
    saveAs(blob, 'downloadable_data.pdf');
  });
}

const DownloadablePacketInvioce: React.FC<DownloadableDataProps> = ({ data }) => {
  return (
    <div>
      <UHeading1 styles={{ fontSize: 18 }}>Downloadable Data</UHeading1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {`${index + 1}. ${item.name} (${item.email}) - Weight: ${item.fat}g, Price: ${item.price} PKR`}
          </li>
        ))}
      </ul>
      <button onClick={() => generatePDF(data)}>Download PDF</button>
    </div>
  );
};

export default DownloadablePacketInvioce;

