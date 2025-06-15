import React from 'react';
import { AddUser } from './home-content-main/AddUser';
import { UserList } from './home-content-main/UserList';
import { ServerStatusCard } from './home-content-main/ServerStatusCard';
import { getEnvVariables } from '../helpers/getEnvVariables';

export const HomeContentMain = () => {
  console.log(getEnvVariables());
  return (
    <div className="row home-content__main">
      <div className="col-eight home-content__text pull-right">
        <h3>Página de inicio</h3>

        <AddUser />

        <UserList />
      </div>

      <ServerStatusCard />
    </div>
  );
};
