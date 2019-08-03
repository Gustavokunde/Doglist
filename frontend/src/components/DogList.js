import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const DogList = ({ search }) => {
  const [dogs, setDogs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(23);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(dogs => setDogs(dogs));
  }, []);

  const filteredDogs = dogs
    .filter(dog => {
      return dog.ownerName
        .toLowerCase()
        .includes(search.ownerName.toLowerCase());
    })
    .filter(dog => {
      return dog.name.toLowerCase().includes(search.name.toLowerCase());
    })
    .filter(dog => {
      return dog.breed.includes(search.breed);
    })
    .filter(dog => {
      return dog.castrated.includes(search.castrated);
    })
    .filter(dog => {
      return dog.dateBirth.includes(search.dateBirth);
    })
    .filter(dog => {
      return dog.lastVisit.includes(search.lastVisit);
    })
    .filter(dog => {
      return dog.gender.includes(search.gender);
    });

  // Get current posts
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Raça</th>
            <th>Castrado</th>
            <th>Data de nascimento</th>
            <th>Gênero</th>
            <th>Dono</th>
            <th>Última visita</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {currentDogs.map(item => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.breed}</td>
                <td>{item.castrated}</td>
                <td>{item.dateBirth}</td>
                <td>{item.gender}</td>
                <td>{item.ownerName}</td>
                <td>{item.lastVisit}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={filteredDogs.length}
        paginate={paginate}
      />
    </>
  );
};
export default DogList;
