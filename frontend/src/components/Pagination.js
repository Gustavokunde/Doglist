import React from 'react';

const Pagination = ({ dogsPerPage, totalDogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">Páginas:
        {pageNumbers.map(number =>
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link-responsive p-1">
              {number}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
