import React from 'react';

export const ServerStatusCard = ({ serverUsing, isLoading }) => {
  return (
    <div className="col-four home-content__counter">
      <h3>{isLoading ? 'Solicitando a' : 'Conectado'}</h3>

      <div className="home-content__clock">
        <div className="top">
          <div className="time days">
            S{serverUsing}
            {isLoading ? (
              <span className="loading-circle"></span>
            ) : (
              <span>✓</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
