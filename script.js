document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
        // Make an AJAX request to fetch the JSON data
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "books.json", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayBooks(data);
            } else {
                console.error("Failed to fetch data");
            }
        };

        xhr.send();
    });

    function displayBooks(books) {
        // Clear any previous content in the bookList div
        bookList.innerHTML = "";

        // Create a table element
        const table = document.createElement("table");

        // Create table headers
        const headers = ["Title", "Author", "Genre", "Published Year", "ISBN", "Description"];
        const headerRow = document.createElement("tr");
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);

        // Create table rows for each book
        books.forEach(function (book) {
            const row = document.createElement("tr");

            // Add title cell
            const titleCell = document.createElement("td");
            titleCell.textContent = book.title;
            row.appendChild(titleCell);

            // Add author cell
            const authorCell = document.createElement("td");
            authorCell.textContent = book.author;
            row.appendChild(authorCell);

            // Add genre cell
            const genreCell = document.createElement("td");
            genreCell.textContent = book.genre;
            row.appendChild(genreCell);

            // Add published year cell
            const yearCell = document.createElement("td");
            yearCell.textContent = book.published_year;
            row.appendChild(yearCell);

            // Add ISBN cell
            const isbnCell = document.createElement("td");
            isbnCell.textContent = book.isbn;
            row.appendChild(isbnCell);

            // Add description cell
            const descriptionCell = document.createElement("td");
            descriptionCell.textContent = book.description;
            row.appendChild(descriptionCell);

            // Append the row to the table
            table.appendChild(row);
        });

        // Append the table to the bookList div
        bookList.appendChild(table);
    }
});
