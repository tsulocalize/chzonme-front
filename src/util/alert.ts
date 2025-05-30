import Swal from "sweetalert2";

export const onError = (message: string) => {
  Swal.fire({
    icon: 'error',
    title: '에러가 발생했습니다',
    text: message,
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
  position: 'top-right',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

