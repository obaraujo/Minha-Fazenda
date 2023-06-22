document.querySelectorAll('.encoler-menu').forEach(bt => {
  bt.addEventListener('click', () => {
      const menu = document.querySelector('.menu-lateral')
      if (menu.style.display == 'none') {

          document.querySelectorAll('.encoler-menu')[1].style.display = 'none'
          menu.style.display = 'block'
          document.querySelector('.conteudo').style.left = '280px'
          document.querySelector('.conteudo').style.width = "80%"
          document.querySelector('.titulo-logo').style.left = '280px'
      } else {
          document.querySelectorAll('.encoler-menu')[1].style.display = 'block'
          menu.style.display = 'none'
          document.querySelector('.conteudo').style.left = 0
          document.querySelector('.conteudo').style.width = "100%"
          document.querySelector('.titulo-logo').style.left = 0
      }
  })
})