import React from 'react';

export const UserList = ({ data }) => {
  console.log(data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, nombre, email }, i) => (
            <tr key={id}>
              <td>{i + 1}</td>
              <td>{id}</td>
              <td>{nombre}</td>
              <td>{email}</td>
            </tr>
          ))}

          {/* <tr>
            <td>2</td>
            <td>3R4EWR34</td>
            <td>Carmen Huamán</td>
            <td>carmen.rosa@gmail.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>34RE4TRED4</td>
            <td>Pedro Ramirez</td>
            <td>pedro.r@gmail.com</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};
