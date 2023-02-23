import '../styles/Components/Pagination.css';

function Pagination({ currentPage, totalPages }) {
  return (
    <p className="pagination">
      {currentPage}/{totalPages}
    </p>
  );
}

export default Pagination;
