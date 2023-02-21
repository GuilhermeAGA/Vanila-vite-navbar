import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-navbar fixed">
    <div class="menu-container">
      <img src="https://source.unsplash.com/random?a=1" />
      <div class="menu-item">
        <a class="item-link" href="#">Home</a>
        <a class="item-link" href="#">Portifolio</a>
        <a class="item-link" href="#">Serviços</a>
        <a class="item-link" href="#">Sobre Nós</a>
        <a class="item-link" href="#">Contato</a>
      </div>
      <div class="menu-social-icon">
        <a class="social-icon-link" href="#"><i class="ph-instagram-logo"></i></a>
        <a class="social-icon-link" href="#"><i class="ph-facebook-logo"></i></a>
        <a class="social-icon-link" href="#"><i class="ph-whatsapp-logo"></i></a>
      </div>
    </div>
  </div>
`


