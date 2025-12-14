function BookList({ books, onDelete }) {

return (
<ul>
    {books.map((book, index) => (
        <li key={index}> {book.title}  {book.author} <button onClick={() => onDelete(index)}>Delete</button> </li>
    ))}
</ul>
);
}


export default BookList;