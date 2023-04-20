import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { loginButtons } from '../headerButtons';

const useLoginLogoutBtn = () => {
  const { status } = useSession();
  const [activeButton, setActiveButton] = useState(loginButtons.login);

  useEffect(() => {
    status === 'authenticated' ? setActiveButton(loginButtons.logout) : setActiveButton(loginButtons.login);
  }, [status]);

  return activeButton;
};

export default useLoginLogoutBtn;
