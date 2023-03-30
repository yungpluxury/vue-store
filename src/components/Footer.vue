<template>
  <footer class="footer">
    <div class="footer__container">
      <Nav></Nav>
      <Contacts></Contacts>
    </div>
  </footer>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Contacts from "@/components/Contacts.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: "Footer",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Contacts, Nav },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 37px 0;
  background: #eceaea;
  margin-top: 32px;
}
.footer__container {
  max-width: 1263px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 1300px) {
  .footer__container {
    flex-direction: column;
    justify-content: center;
    max-width: calc(100% - 100px);
  }
}
@media screen and (max-width: 700px) {
  .footer__container {
    flex-direction: row;
    max-width: calc(100% - 50px);
  }
}

@media screen and (max-width: 425px) {
  .footer__container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
