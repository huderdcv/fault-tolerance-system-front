import React from 'react';

export const ServerStatusCard = ({ serverUsing }) => {
  return (
    <div className="col-four home-content__counter">
      <h3>Solicitando a</h3>

      <div className="home-content__clock">
        <div className="top">
          <div className="time days">
            S{serverUsing}
            <span>x</span>
          </div>
        </div>
      </div>
    </div>
  );
};
