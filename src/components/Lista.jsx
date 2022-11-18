import React, { useContext } from 'react'
import { ContextoValores } from '../context/Contexto';

const Lista = () => {
  const { valores } = useContext(ContextoValores);

  return <div>Lista</div>;
}

export default Pagina1