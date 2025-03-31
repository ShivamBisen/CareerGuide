document.addEventListener('DOMContentLoaded', function() {
  const cv = document.getElementById('cv');
  const editButton = document.getElementById('editCv');
  const saveButton = document.getElementById('saveCv');
  const resetButton = document.getElementById('resetCv');
  const printButton = document.getElementById('printCv');
  
  let isEditing = false;
  let originalContent = '';
  
  // Save original content when page loads
  originalContent = cv.innerHTML;
  
  // Load saved content if it exists
  const savedContent = localStorage.getItem('iitm-cv-content');
  if (savedContent) {
    cv.innerHTML = savedContent;
  }
  
  editButton.addEventListener('click', function() {
    isEditing = !isEditing;
    
    const elements = cv.querySelectorAll('.intro-text, td, li, p');
    elements.forEach(element => {
      if (element.classList.contains('table-header')) return;
      if (element.tagName === 'LI' && element.classList.contains('heading')) return;
      
      element.contentEditable = isEditing;
      element.style.backgroundColor = isEditing ? '#f0f0f0' : '';
    });
    
    editButton.textContent = isEditing ? 'Stop Editing' : 'Edit';
    editButton.classList.toggle('btn-secondary');
    editButton.classList.toggle('btn-warning');
  });
  
  saveButton.addEventListener('click', function() {
    localStorage.setItem('iitm-cv-content', cv.innerHTML);
    alert('CV content saved successfully!');
  });
  
  resetButton.addEventListener('click', function() {
    if (confirm('Are you sure you want to reset the CV to its original state? All changes will be lost.')) {
      cv.innerHTML = originalContent;
      localStorage.removeItem('iitm-cv-content');
      
      if (isEditing) {
        editButton.click(); // Turn off editing mode
      }
    }
  });
  
  printButton.addEventListener('click', function() {
    window.print();
  });
}); 