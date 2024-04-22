// import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import AnnotationLayer styles
// import 'react-pdf/dist/esm/Page/TextLayer.css'; // Import TextLayer styles
// import fff from '../img/Resume.pdf';

// // Ensure that PDF worker is set up from react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function Resumeimg() {
//   const [numPages, setNumPages] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);

//   // Replace 'your_pdf_file.pdf' with the path to your PDF file
//   const pdfFilePath = fff;

//   useEffect(() => {
//     const fetchPdf = async () => {
//       try {
//         const response = await fetch(pdfFilePath);
//         const blob = await response.blob();
//         setPdfFile(blob);
//       } catch (error) {
//         console.error('Error fetching PDF:', error);
//       }
//     };

//     fetchPdf();
//   },[pdfFilePath]);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages)
//   };

//   return (
//     <div className=" w-full h-full flex justify-center  sm:overflow-y-auto ">
//       {pdfFile && (
//         <div className='w-[100vw] sm:max-w-[600px]  items-center object-cover my-auto sm:m-0'>
//           <Document className='w-[200px] ' file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page className='dd' key={`page_${index + 1}`} pageNumber={index + 1} />
//             ))}
//           </Document>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Resumeimg;




// import fff from '../img/Resume.pdf';
import React from 'react';
import fff from '../img/Resume.pdf';

const Resumeimg = () => {
  const openPdfInNewTab = () => {
    window.open(fff, '_blank')
  }

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = fff;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Replace this div with your PDF viewer component */}
      <div>PDF Viewer Component</div>
      
      {/* Message to inform users about manual options */}
      <p>
        You can also&nbsp;
        <button onClick={openPdfInNewTab}>View in New Tab</button>&nbsp;
        or&nbsp;
        <button onClick={downloadPdf}>Download PDF</button>&nbsp;
        manually.
      </p>
    </div>
  );
};

export default Resumeimg;













