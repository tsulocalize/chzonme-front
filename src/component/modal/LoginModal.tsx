import Swal from "sweetalert2";
import {goTo} from "@/router/Navigator.tsx";

export const LoginModal = () => {
  Swal.fire(
    {
      title: '로그인',
      text: '치지직 ID로 로그인할 수 있습니다!',
      icon: 'info',
      confirmButtonColor: '#000000',
      confirmButtonText: '<span style="color:#00FEA2;">치지직 아이디로 로그인</span>',
      showCloseButton: true,
    }
  ).then((result) => {
    if (result.isConfirmed) {
      goTo("/login")
    }
  })

  return (<></>);
}