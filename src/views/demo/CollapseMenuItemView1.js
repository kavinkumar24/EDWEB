import React, { useState } from 'react';
import Views from 'views/Viewscount';

const materials = [
  { title: 'PDF Materials', isHeader: true },
  { title: 'Python', pdfUrl: 'https://static.realpython.com/python-basics-sample-chapters.pdf' },
  { title: 'C', pdfUrl: 'https://www.vssut.ac.in/lecture_notes/lecture1424354156.pdf' },
  { title: 'Java', pdfUrl: 'https://mrcet.com/downloads/digital_notes/IT/JAVA%20PROGRAMMING.pdf' },
];

const PdfMaterials = () => {
  const [views, setViews] = useState({
    Python: 0,
    C: 0,
    Java: 0,
  });

  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (pdfUrl, title) => {
    window.open(pdfUrl, '_blank', 'fullscreen=yes');
    setViews((prevViews) => ({
      ...prevViews,
      [title]: prevViews[title] + 1,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      {materials.map((material) => (
        <div key={material.title} className={`flex flex-row justify-between items-center p-4 w-full mb-4 ${material.isHeader ? 'bg-gray-200' : 'bg-white shadow-md'}`}>
          <div>
            <h3 className="text-lg font-bold">{material.title}</h3>
          </div>
          {!material.isHeader && (
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDownload(material.pdfUrl)}>Download</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleView(material.pdfUrl, material.title)}>View</button>
            </div>
          )}
        </div>
      ))}
      
      <Views views={views}/>
    </div>
  );
};

export default PdfMaterials;
