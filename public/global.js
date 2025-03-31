function toggleFormStatusDisplay(action) {
    if (action === 'hide') {
        $('#page-status').removeClass('d-flex');
        $('#page-status').addClass('d-none');
    } else {
        $('#page-status').addClass('d-flex');
        $('#page-status').removeClass('d-none');
    }
}

$('input').add('textarea').change((event) => {
    let input = event.target;
    if (input.checkValidity()) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
});

// Global functions for CV templates

// Function to generate PDF from CV content
function generatePDF() {
  window.print();
}

// Function to handle contenteditable paste to remove formatting
document.addEventListener('paste', function(e) {
  if (e.target.hasAttribute('contenteditable')) {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  }
});

// Function to prevent drag and drop on contenteditable elements
document.addEventListener('dragover', function(e) {
  if (e.target.hasAttribute('contenteditable')) {
    e.preventDefault();
  }
});

document.addEventListener('drop', function(e) {
  if (e.target.hasAttribute('contenteditable')) {
    e.preventDefault();
  }
});

// Function to handle tab key in contenteditable elements
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab' && e.target.hasAttribute('contenteditable')) {
    e.preventDefault();
    document.execCommand('insertHTML', false, '&#009');
  }
});

// Function to prevent form submission on enter key
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && e.target.hasAttribute('contenteditable')) {
    const isTable = e.target.closest('table');
    if (isTable) {
      e.preventDefault();
    }
  }
}); 