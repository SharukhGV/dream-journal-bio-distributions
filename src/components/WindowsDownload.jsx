import React from 'react';

const WindowsDownload = () => {
    const handleDownload = () => {
        const downloadUrl = 'https://raw.githubusercontent.com/SharukhGV/dream-journal-bio-distributions/main/src/distributions/dream-journal-bio-1.0.0-setup.exe';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'dream-journal-bio-1.0.0-setup.exe'; // specify the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
  return (
    <div>
      <button onClick={handleDownload}>Windows Download</button>
    </div>
  );
};

export default WindowsDownload;
