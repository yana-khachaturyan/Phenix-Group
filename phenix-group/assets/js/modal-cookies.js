const cookiesClose = document.querySelectorAll('#cookies-close');

let state = false;

cookiesClose.forEach(cookie => {
   cookie.addEventListener('click', () => {
      modalCustom.remove();
      state = true;
      localStorage.setItem('stateLocalStorage', JSON.stringify(state));
   });
});


        