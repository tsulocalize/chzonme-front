import Swal from "sweetalert2";

export const onError = (message: string) => {
  Swal.fire({
    icon: 'error',
    title: '에러가 발생했습니다',
    html: `${message}`,
    // text: message, // TODO
  });
}

export const onToastSuccess = (message: string) => {
  Toast.fire({
    icon: 'success',
    title: message
  })
}

export const onToastError = (message: string) => {
  Toast.fire({
    icon: 'error',
    title: message
  })
}


const Toast = Swal.mixin({
  toast: true,
  position: window.innerWidth < 768 ? `top-start` : 'top-end',
  width: window.innerWidth < 768 ? '70%' : 600,
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
    return window.innerWidth < 768 ? toast.style.padding = '4px 0px 4px 12px' : '';
  }
});
