import React from 'react';
import { AddUser } from './home-content-main/AddUser';
import { UserList } from './home-content-main/UserList';
import { ServerStatusCard } from './home-content-main/ServerStatusCard';
import { useAxios } from '../hooks/useAxios';

export const HomeContentMain = () => {
  const { data, isLoading, serverUsing } = useAxios();
  return (
    <div className="row home-content__main">
      <div className="col-eight home-content__text pull-right">
        <h3>Curso: Sistemas Distribuidos</h3>

        {/* <AddUser /> */}

        <h1>Lista de Estudiantes</h1>
        {isLoading ? (
          <h2>
            <span className="loading">
              <span className="loading-circle"></span> obteniendo datos...
            </span>
          </h2>
        ) : (
          <UserList data={data} />
        )}
      </div>

      <ServerStatusCard serverUsing={serverUsing} isLoading={isLoading} />
    </div>
  );
};
