import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import AnnotationLayer styles
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Import TextLayer styles
import fff from '../img/Resume.pdf';

// Ensure that PDF worker is set up from react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resumeimg() {
  const [numPages, setNumPages] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  // Replace 'your_pdf_file.pdf' with the path to your PDF file
  const pdfFilePath = fff;

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(pdfFilePath);
        const blob = await response.blob();
        setPdfFile(blob);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  },[pdfFilePath]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  };

  return (
    <div className="m-0 p-0 flex justify-center text-center w-full overflow-y-auto h-screen ">
      {pdfFile && (
        <div className='max-w-[700px] h-[300px]'>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
}

export default Resumeimg;

