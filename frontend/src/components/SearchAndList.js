import React, { useState } from 'react';
import Breeds from './Breeds';
import Doglist from './DogList';

const Search = () => {
  const [search, setSearch] = useState({
    name: '',
    dateBirth: '',
    breed: '',
    castrated: '',
    gender: '',
    ownerName: '',
  });

  return (
    <>
      <form>
        <div ClassName="search">
          <div className="row">
            <div className="form-group my-1 col-md-8">
              <label htmlFor="Textarea1">Nome do pet:</label>
              <textarea
                className="form-control"
                id="Textarea1"
                rows="1"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, name: val };
                  });
                }}
              />
            </div>
            <div className="form-group my-1 mx-1 col">
              <label htmlFor="Textarea2">Data de nascimento:</label>
              <textarea
                className="form-control"
                id="Textarea2"
                rows="1"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, dateBirth: val };
                  });
                }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group my-1 col-md-4">
              <label htmlFor="inputState">Raça:</label>
              <select
                id="inputState"
                className="form-control"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, breed: val };
                  });
                }}
              >
                {Breeds.map((raca, index) => {
                  return <option selected>{raca}</option>;
                })}
              </select>
            </div>
            <div className="form-group my-1 mx-3 col-md-5 #007fff">
              <label htmlFor="inputState">Castrado:</label>
              <select
                id="inputState"
                className="form-control"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, castrated: val };
                  });
                }}
              >
                <option selected>Sim</option>
                <option selected>Não</option>
                <option selected />
              </select>
            </div>
            <div className="form-group my-1 mx-1 col #007fff">
              <label htmlFor="inputState">Gênero:</label>
              <select
                id="inputState"
                className="form-control"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, gender: val };
                  });
                }}
              >
                <option selected>Macho</option>
                <option selected>Fêmea</option>
                <option selected />
              </select>
            </div>
          </div>
         <div className="row">
            <div className="form-group my-1 col-md-8">
              <label htmlFor="Textarea1">Dono:</label>
              <textarea
                className="form-control"
                id="Textarea1"
                rows="1"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, ownerName: val };
                  });
                }}
              />
            </div>
            <div className="form-group my-1 col">
              <label htmlFor="Textarea2">Última visita:</label>
              <textarea
                className="form-control"
                id="Textarea2"
                rows="1"
                onChange={e => {
                  const val = e.target.value;
                  setSearch(prevState => {
                    return { ...prevState, lastVisit: val };
                  });
                }}
              />
            </div>
          </div>
          <Doglist search={search} />
        </div>
      </form>
    </>
  );
};
export default Search;
