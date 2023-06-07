document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookForm'); // Get the book form element
    const bookTableBody = document.getElementById('bookTableBody'); // Get the book table body element
    const bookData = []; // Array to store book data
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get input values from the form
      const bookNameInput = document.getElementById('bookName');
      const authorNameInput = document.getElementById('authorName');
      const bookCategoryInput = document.getElementById('bookCategory');
      const bookRatingInput = document.getElementById('bookRating');
      const bookReviewInput = document.getElementById('bookReview');
      const bookImageInput = document.getElementById('bookImage');
  
      // Extract values from input elements
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
  
      // Get current date and format it
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  
      // Create a book object with the extracted values
      const book = {
        bookName: bookName,
        authorName: authorName,
        bookCategory: bookCategory,
        bookRating: bookRating,
        date: formattedDate,
        bookReview: bookReview,
        bookImage: bookImage
      };
  
      // Add the book to the bookData array
      bookData.push(book);
  
      // Render the book table with the updated data
      renderBookTable();
    });
  
    // Function to render the book table
    function renderBookTable() {
      bookTableBody.innerHTML = ''; // Clear the table body
  
      // Iterate over each book in the bookData array
      bookData.forEach(function (book, index) {
        const row = document.createElement('tr'); // Create a new table row
  
        // Create table cells for book information
        const nameCell = document.createElement('td');
        nameCell.textContent = book.bookName;
        row.appendChild(nameCell);
        nameCell.style.fontWeight = 'bolder'; // Make the name cell bold
  
        const authorCell = document.createElement('td');
        authorCell.textContent = book.authorName;
        row.appendChild(authorCell);
  
        const categoryCell = document.createElement('td');
        categoryCell.textContent = book.bookCategory;
        row.appendChild(categoryCell);
  
        const ratingCell = document.createElement('td');
        if (Number.isInteger(book.bookRating) && book.bookRating >= 1 && book.bookRating <= 5) {
          const stars = '★'.repeat(book.bookRating) + '☆'.repeat(5 - book.bookRating); // Display stars based on the rating
          ratingCell.textContent = stars;
        } else {
          ratingCell.textContent = 'Invalid Rating'; // Display "Invalid Rating" for invalid ratings
        }
        row.appendChild(ratingCell);
        ratingCell.style.color = "#FFF09E"; // Set the color of the rating cell
  
        const dateCell = document.createElement('td');
        dateCell.textContent = book.date;
        row.appendChild(dateCell);
  
        const readMoreCell = document.createElement('td');
        const readMoreButton = document.createElement('button');
        readMoreButton.textContent = 'Read';
        let isExpanded = false;
  
        // Event listener for the "Read" button to expand/collapse the book review
        readMoreButton.addEventListener('click', function () {
          if (!isExpanded) {
            const expandedRow = document.createElement('tr');
  
            const expandedCell = document.createElement('td');
            expandedCell.colSpan = 6; // Span the expanded cell across all columns
            expandedCell.style.flexDirection = 'column';
            expandedCell.style.backgroundColor = '#DFD4C1';
            expandedCell.style.padding = '20px';
            expandedCell.style.width = 'auto';
            expandedCell.style.borderRadius = '10px';
            expandedCell.style.transform = '0.5s';
  
            // Create a div to display the book review
            const reviewDiv = document.createElement('div');
            reviewDiv.textContent = `Book Review: ${book.bookReview}`;
            expandedCell.appendChild(reviewDiv);
            reviewDiv.style.paddingBottom = '10px';
  
            // Display book image if available
            if (book.bookImage) {
              const image = document.createElement('img');
              image.src = URL.createObjectURL(book.bookImage);
              image.style.width = '150px';
              image.style.height = 'auto';
              expandedCell.appendChild(image);
            }
  
            expandedRow.appendChild(expandedCell);
            row.insertAdjacentElement('afterend', expandedRow);
            readMoreButton.textContent = 'Collapse';
          } else {
            row.nextElementSibling.remove();
            readMoreButton.textContent = 'Read';
          }
  
          isExpanded = !isExpanded; // Toggle the expanded state
        });
  
        readMoreCell.appendChild(readMoreButton);
        row.appendChild(readMoreCell);
  
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'X';
  
        // Event listener for the "X" button to delete the book
        deleteButton.addEventListener('click', function () {
          deleteBook(index); // Call the deleteBook function with the index of the book
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
  
        bookTableBody.appendChild(row); // Append the row to the table body
      });
    }
  
    // Function to delete a book from the bookData array
    function deleteBook(index) {
      bookData.splice(index, 1); // Remove the book at the specified index
      renderBookTable(); // Render the book table with the updated data
    }
    
    // Sample Book Data
    const initialBooks = [
      {
        bookName: "The Giver",
        authorName: "Miguel de Cervantes",
        bookCategory: "Fiction",
        bookRating: 4,
        date: "01/06/2023",
        bookReview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bookImage: null
      },
      {
        bookName: "Jane Eyre",
        authorName: "Charlotte Brontë",
        bookCategory: "Classics",
        bookRating: 3,
        date: "02/06/2023",
        bookReview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bookImage: null
      },
    ];
  
    // Add initial books to the bookData array
    bookData.push(...initialBooks);
  
    // Render the book table with initial data
    renderBookTable();
});
