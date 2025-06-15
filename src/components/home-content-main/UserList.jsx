import React from 'react';

export const UserList = () => {
  return (
    <>
      <h1>Lista de usuarios</h1>

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
          <tr>
            <td>1</td>
            <td>13534FF3</td>
            <td>Luis Sanchez</td>
            <td>luis.sanchez@gmail.com</td>
          </tr>
          <tr>
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
          </tr>
        </tbody>
      </table>
    </>
  );
};
