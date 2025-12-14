import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";


function App() {
    let [books, setBooks] = useState([]);


    let addBook = (book) => {
    setBooks([...books, book]);
    };


    let deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
    };


return (
<div>
    <h1>Library Management</h1>
    <BookForm onAdd={addBook} />
    <BookList books={books} onDelete={deleteBook} />
</div>
);
}


export default App;