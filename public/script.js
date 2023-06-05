document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form and table body
    const form = document.getElementById('bookForm');
    const bookTableBody = document.getElementById('bookTableBody');
    const bookData = []; // Array to store book data
  
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get input field values
      const bookNameInput = document.getElementById('bookName');
      const authorNameInput = document.getElementById('authorName');
      const bookCategoryInput = document.getElementById('bookCategory');
      const bookRatingInput = document.getElementById('bookRating');
      const bookReviewInput = document.getElementById('bookReview');
      const bookImageInput = document.getElementById('bookImage');
  
      const bookName = bookNameInput.value;
      const authorName = authorNameInput.value;
      const bookCategory = bookCategoryInput.value;
      const bookRating = parseInt(bookRatingInput.value);
      const bookReview = bookReviewInput.value;
      const bookImage = bookImageInput.files[0];
  
      // Clear input fields
      bookNameInput.value = '';
      authorNameInput.value = '';
      bookCategoryInput.value = '';
      bookRatingInput.value = '';
      bookReviewInput.value = '';
      bookImageInput.value = '';
  
      // Get current date
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  
      // Create book object
      const book = {
        bookName: bookName,
        authorName: authorName,
        bookCategory: bookCategory,
        bookRating: bookRating,
        date: formattedDate,
        bookReview: bookReview,
        bookImage: bookImage
      };
  
      // Add book to bookData array
      bookData.push(book);
  
      // Render the book table
      renderBookTable();
    });
  
    // Function to render the book table
    function renderBookTable() {
      // Clear the table body
      bookTableBody.innerHTML = '';
  
      // Loop through each book in the bookData array
      bookData.forEach(function (book, index) {
        const row = document.createElement('tr');
  
        // Create cells for book data
        const nameCell = document.createElement('td');
        nameCell.innerHTML = `<strong>${book.bookName}</strong>`; // Use <strong> tags to make the book name bold
        row.appendChild(nameCell);
  
        const authorCell = document.createElement('td');
        authorCell.textContent = book.authorName;
        row.appendChild(authorCell);
  
        const categoryCell = document.createElement('td');
        categoryCell.textContent = book.bookCategory;
        row.appendChild(categoryCell);
  
        const ratingCell = document.createElement('td');
        // Check if bookRating is a whole number between 1 and 5
        if (Number.isInteger(book.bookRating) && book.bookRating >= 1 && book.bookRating <= 5) {
          const stars = '★'.repeat(book.bookRating) + '☆'.repeat(5 - book.bookRating);
          ratingCell.textContent = stars;
        } else {
          ratingCell.textContent = 'Invalid Rating';
        }
        row.appendChild(ratingCell);
  
        const dateCell = document.createElement('td');
        dateCell.textContent = book.date;
        row.appendChild(dateCell);
  
        const readMoreCell = document.createElement('td');
        const readMoreButton = document.createElement('button');
        readMoreButton.textContent = 'Read More';
        let isExpanded = false;
  
        // Event listener for the "Read More" button
        readMoreButton.addEventListener('click', function () {
          if (!isExpanded) {
            // Create an expanded row with book review and image
            const expandedRow = document.createElement('tr');
  
            const expandedCell = document.createElement('td');
            expandedCell.colSpan = 6;
  
            // Create a div for book review
            const reviewDiv = document.createElement('div');
            reviewDiv.textContent = `Book Review: ${book.bookReview}`;
            expandedCell.appendChild(reviewDiv);
  
            // Check if bookImage is available and create an image element
            if (book.bookImage) {
              const image = document.createElement('img');
              image.src = URL.createObjectURL(book.bookImage);
              image.style.width = '200px';
              expandedCell.appendChild(image);
            }
  
            expandedRow.appendChild(expandedCell);
  
            // Insert the expanded row below the current row
            row.insertAdjacentElement('afterend', expandedRow);
          } else {
            // Remove the expanded row
            row.nextElementSibling.remove();
          }
  
          isExpanded = !isExpanded;
        });
  
        readMoreCell.appendChild(readMoreButton);
        row.appendChild(readMoreCell);
  
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'X';
        deleteButton.addEventListener('click', function () {
          deleteBook(index);
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
  
        // Append the row to the table body
        bookTableBody.appendChild(row);
      });
    }
  
    // Function to delete a book
    function deleteBook(index) {
      bookData.splice(index, 1);
      renderBookTable();
    }
  });
  