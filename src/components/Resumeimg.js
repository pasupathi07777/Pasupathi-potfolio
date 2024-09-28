import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css'; 
import fff from '../img/Resume.pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resumeimg() {
  const [numPages, setNumPages] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);


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
  }, [pdfFilePath]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black text-white font-serif ">
      {pdfFile && (
        <div className="w-full max-w-500 mx-auto my-auto text-center flex justify-center ">
          <Document className='w-[500px]'  file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={Math.min(viewportWidth, 500)}
                height={viewportHeight}
                className="mx-auto text-center flex justify-center"
              />
            ))}
          </Document>
         
        </div>
      )}
    </div>
  );
}

export default Resumeimg;





























