// const form = document.getElementById("bookform");
// const booklist = document.getElementById("booklist");

// var bookList = [];
// var bookId = 1;

// function addBook(title, name, type, imageFile, rating, review) {
//     let book = {
//       id: bookId,
//       title,
//       name,
//       type,
//       rating,
//       review,
//     };
  
//     // Read the image file using FileReader
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       book.image = event.target.result; // Save the base64-encoded image data
//       bookList.push(book);
//       displayBook(book);
//       bookId++;
//     };
    
//     // Access the selected file from the files property
//     const selectedFile = imageFile.files[0];
//     reader.readAsDataURL(selectedFile); // Read the file as data URL
  
//     form.reset();
//   }




// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   addBook(
//     form.elements.bookName.value,
//     form.elements.authorName.value,
//     form.elements.bookCategory.value,
//     form.elements.bookCover.value,
//     form.elements.bookRating.value,
//     form.elements.bookReview.value
//   );
// });

  
// function displayBook(book) {
//     let item = document.createElement("li");
//     item.setAttribute("data-id", book.id);
//     item.innerHTML = `<p><strong>${book.title}</strong><br>${book.name}</p>`;
  
//     // Append the new <li> element to the <ul> with id "booklist"
//     booklist.appendChild(item);
  
//     form.reset();
//   }
  


// SIMPLE code 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const bookNameInput = document.getElementById('bookName');
      const bookName = bookNameInput.value;

      bookNameInput.value = '';

      const listItem = document.createElement('li');
      listItem.textContent = bookName;

      bookTableBody.appendChild(listItem);
    });
  });
  