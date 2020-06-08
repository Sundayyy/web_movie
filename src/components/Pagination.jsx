import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const page = [];
  for (let i = 1; i <= totalPages; i++) {
    page.push(i);
  }
  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {page.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "pagination__item pagination__item--active"
                : "pagination__item"
            }
            onClick={() => onPageChange(page)}
          >
            <a href="/#" className="pagination__link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
