function openPDF(url) {
    var fileId = extractFileId(url);
    var pdfViewer = document.getElementById('pdf-iframe');
    var pdfContainer = document.getElementById('pdf-container');
    var pdfURL = 'https://drive.google.com/file/d/' + fileId + '/preview';
    
    pdfViewer.src = pdfURL;
    pdfContainer.style.display = 'block';
  }

  function closePDF() {
    var pdfContainer = document.getElementById('pdf-container');
    pdfContainer.style.display = 'none';
  }

  function extractFileId(url) {
    var match = url.match(/\/file\/d\/(.+?)\//);
    return match ? match[1] : null;
  }