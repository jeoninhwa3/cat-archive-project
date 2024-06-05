import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Temp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });

  return <></>;
};

export default Temp;
