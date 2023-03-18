import React from 'react';

const style = {
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
};

const Header = () => {
  return (
    <div className={style.heading}>
      <h3>Lista de Tarefas</h3>
    </div>
  );
};

export default Header;
