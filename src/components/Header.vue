<template>
  <header class="header">
    <div class="header__container">
      <Nav></Nav>
      <Search></Search>
    </div>
  </header>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: "Header",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: {Search, Nav}
}
</script>

<style scoped>
  .header {
    padding: 37px 0;
    border-bottom: 1px solid #E1E1E1;
  }

  .header__container {
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1300px) {
    .header__container {
      max-width: calc(100% - 100px);
    }
  }

  @media screen and (max-width: 1100px) {
    .header__container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 700px) {
    .header__container {
      max-width: calc(100% - 50px);
      align-items: center;
    }
  }
</style>