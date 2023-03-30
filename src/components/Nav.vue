<template>
  <nav>
    <ul>
      <li>
        <a href="#" title="Каталог">Каталог</a>
      </li>
      <li>
        <a href="#" title="Доставка">Доставка</a>
      </li>
      <li>
        <a href="#" title="Оплата">Оплата</a>
      </li>
      <li>
        <a href="#" title="Контакты">Контакты</a>
      </li>
      <li>
        <a href="#" title="О компании">О компании</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: "Nav"
}
</script>

<style scoped>
  nav {
    max-width: 542px;
    width: 100%;
    margin-left: 96px;
  }

  .footer nav {
    margin-left: 118px;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    list-style: none;
  }

  nav ul li a {
    text-decoration: none;
    color: #343030;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    transition: all 0.5s ease;
  }

  nav ul li a:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 1300px) {
    .footer nav {
      margin: 0 auto;
    }

    .header nav {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 700px) {
    .header nav ul {
      flex-wrap: wrap;
    }

    .header nav ul li {
      margin-right: 20px;
      margin-bottom: 10px;
    }

    .header nav ul li:last-child {
      margin-right: 0;
    }

    .footer nav {
      width: fit-content;
      margin-left: 0;
    }

    .footer nav ul {
      flex-direction: column;
      width: fit-content;
    }

    .footer nav ul li {
      width: fit-content;
    }
  }
</style>