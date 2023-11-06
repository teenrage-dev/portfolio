import { Slide, toast } from 'react-toastify';

export const errorNotification = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    transition: Slide,
    theme: 'dark',
    style: { backgroundColor: '#303942' },
  });
};
