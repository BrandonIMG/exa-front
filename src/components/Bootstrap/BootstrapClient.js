// components/BootstrapClient.js
import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // Este componente no renderiza nada visual
}

export default BootstrapClient;