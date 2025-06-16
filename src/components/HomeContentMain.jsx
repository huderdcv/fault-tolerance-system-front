import React from 'react';
import { AddUser } from './home-content-main/AddUser';
import { UserList } from './home-content-main/UserList';
import { ServerStatusCard } from './home-content-main/ServerStatusCard';
import { useAxios } from '../hooks/useAxios';

export const HomeContentMain = () => {
  const { data, isLoading } = useAxios();
  return (
    <div className="row home-content__main">
      <div className="col-eight home-content__text pull-right">
        <h3>Página de inicio</h3>

        <AddUser />

        <h1>Lista de usuarios</h1>
        {isLoading ? <h2>obteniendo usuarios...</h2> : <UserList data={data} />}
      </div>

      <ServerStatusCard />
    </div>
  );
};
