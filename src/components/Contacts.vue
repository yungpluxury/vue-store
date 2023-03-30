<template>
  <div class="footer__contacts">
    <div class="contacts__item">
      <img src="../assets/phone.png" alt="phone number">
      <a href="tel:+78125555555">+7(812)-555-55-55</a>
    </div>
    <div class="contacts__item">
      <img src="../assets/adress.png" alt="phone number">
      <span>г. Санкт-Петербург, ул. Ефимова, 3</span>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contacts"
}
</script>

<style scoped>
  .footer__contacts {
    display: flex;
    flex-direction: row;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  .contacts__item {
    margin-right: 54px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .contacts__item img {
    margin-right: 10px;
  }

  .contacts__item a {
    text-decoration: none;
    color: #343030;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  .contacts__item:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1300px) {
    .footer__contacts {
      justify-content: center;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 700px) {
    .footer__contacts {
      flex-direction: column;
    }

    .contacts__item:first-child {
      margin-bottom: 20px;
    }
  }
</style>