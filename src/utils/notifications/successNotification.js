import { Slide, toast } from 'react-toastify';

export const successNotification = (message) => {
  toast.success(message, {
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
