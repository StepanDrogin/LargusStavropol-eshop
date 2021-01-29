<template>
  <div class="footer">
    <div class="footer__logo">
      <p class="footer__shop">Largus Auto Stavropol</p>
      <p class="footer__shop">© Moskvich Auto Stavropol, 2020</p>
    </div>
    <div class="footer__info">
      <div class="footer__info-phone">
        <img src="../../assets/img-header/phone-call.svg" alt="phone-call" />
        <a class="footer__info-subtitle" href="tel:+79097699642">+7 (909) 769-96-42</a>
      </div>
      <div class="footer__info-geo">
        <img src="../../assets/img-header/gps-icon.svg" alt="gps-icon" />
        <p class="footer__info-subtitle">
          г.Ставрополь, Старомарьевское шоссе, 7а Павильон № 28
        </p>
      </div>
    </div>
    <div class="footer__development">
      <p class="footer__development-info">
        Сайт разработан:
        <a href="https://vk.com/stepan_drogin" target="_blank">
          <img
            class="footer__development-img"
            src="https://cdn.worldvectorlogo.com/logos/vk-1.svg"
            alt="Vk"
          />
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "lap-footer",
};
</script>
<style>
.footer {
  background: #171717;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 15px 15px;
}
.footer__development-img {
  height: 50px;
  width: 50px;
}
.footer__info-phone {
  display: flex;
}
.footer__info-geo {
  display: flex;
}
.footer__info-subtitle {
  margin: 15px 15px;
}
.footer__development-info {
  text-align: center;
}
.footer__development {
  text-align: center;
}
.footer__development-img {
  height: 25px;
  width: 25px;
  margin-left: 5px;
}
@media (max-width: 320px) {
  .footer {
    flex-direction: column;
  }
}
</style>