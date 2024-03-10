import React from 'react';

const WindowsDownload = () => {
  const handleDownload = () => {
    // Replace 'your-app-setup.exe' with the actual filename of your .exe file
    const downloadUrl = "../distributions/dream-journal-bio-1.0.0-setup.exe";
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'dream-journal-bio-1.0.0-setup.exe';
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
