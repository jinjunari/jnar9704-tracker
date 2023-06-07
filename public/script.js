document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('bookForm');
  const bookTableBody = document.getElementById('bookTableBody');
  const bookData = [];

  form.addEventListener('submit', function (event) {
    event.preventDefault();

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

    bookNameInput.value = '';
    authorNameInput.value = '';
    bookCategoryInput.value = '';
    bookRatingInput.value = '';
    bookReviewInput.value = '';
    bookImageInput.value = '';

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const book = {
      bookName: bookName,
      authorName: authorName,
      bookCategory: bookCategory,
      bookRating: bookRating,
      date: formattedDate,
      bookReview: bookReview,
      bookImage: bookImage
    };

    bookData.push(book);

    renderBookTable();
  });

  function renderBookTable() {
    bookTableBody.innerHTML = '';

    bookData.forEach(function (book, index) {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = book.bookName;
      row.appendChild(nameCell);

      const authorCell = document.createElement('td');
      authorCell.textContent = book.authorName;
      row.appendChild(authorCell);

      const categoryCell = document.createElement('td');
      categoryCell.textContent = book.bookCategory;
      row.appendChild(categoryCell);

      const ratingCell = document.createElement('td');
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

      readMoreButton.addEventListener('click', function () {
        if (!isExpanded) {
          const expandedRow = document.createElement('tr');

          const expandedCell = document.createElement('td');
          expandedCell.colSpan = 6;

          const reviewDiv = document.createElement('div');
          reviewDiv.textContent = `Book Review: ${book.bookReview}`;
          expandedCell.appendChild(reviewDiv);

          if (book.bookImage) {
            const image = document.createElement('img');
            image.src = URL.createObjectURL(book.bookImage);
            image.style.width = '200px';
            expandedCell.appendChild(image);
          }

          expandedRow.appendChild(expandedCell);
          row.insertAdjacentElement('afterend', expandedRow);
        } else {
          row.nextElementSibling.remove();
        }

        isExpanded = !isExpanded;
      });

      readMoreCell.appendChild(readMoreButton);
      row.appendChild(readMoreCell);

      const deleteCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '🗑';
      deleteButton.addEventListener('click', function () {
        deleteBook(index);
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      bookTableBody.appendChild(row);
    });
  }

  function deleteBook(index) {
    bookData.splice(index, 1);
    renderBookTable();
  }
});
