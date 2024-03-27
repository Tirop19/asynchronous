function processFile() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    const file = fileInput.files[0];
    if (!file) {
      resultDiv.textContent = "Please select a file.";
      return;
    }

    const reader = new FileReader();

    const wordCount = countWords(text);
    resultDiv.textContent = `Number of words in the file: ${wordCount}`;

    reader.onerror = function() {
      resultDiv.textContent = "Error reading the file.";
    };

    reader.readAsText(file);
  }

  function countWords(text) {
    // sooo from research It will split the string by single or multiple whitespace characters such as space, tab  
    const words = text.split(/\s+/);
    // Filter out empty strings (caused by multiple consecutive spaces)
    const filteredWords = words.filter(word => word.trim() !== '');
    return filteredWords.length;
  }