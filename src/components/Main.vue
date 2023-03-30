<template>
  <main class="main">
    <div class="main__container">
      <h1>Картины эпохи Возрождения</h1>
      <div class="main__items">
        <Item v-bind:slider="item.slider" v-bind:description="item.description" v-bind:title="item.title" v-bind:image="item.image" v-bind:sale="item.sale" v-bind:price="item.price" v-for="item in items" v-bind:key="item.id"></Item>
      </div>
    </div>
  </main>
</template>

<script>
import Item from "@/components/Item.vue";
import {mapGetters} from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: "Main",
  data() {
    return {
      items: this.$store.state.items
    }
  },
  methods: {
    sortItems(value) {
      if (value) {
        this.items = this.items.filter(function (item) {
          return item.title.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        return this.items = this.$store.state.items
      }
    },
  },
  components: {Item},
  computed: {
    ...mapGetters([
      "SEARCH", "ITEMS"
    ])
  },
  watch: {
    SEARCH() {
      // eslint-disable-next-line vue/no-use-computed-property-like-method
      this.sortItems(this.SEARCH)
    }
  }
}
</script>

<style scoped>
  main {
    min-height: calc(100vh - 294px);
  }

  .main__container {
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;
  }

  .main__container h1 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-top: 45px;
    margin-bottom: 39px;
  }

  .main__items {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    width: fit-content;
  }

  @media screen and (max-width: 1300px) {
    .main__items {
      grid-template-columns: repeat(3, 1fr);
    }

    .main__container {
      max-width: calc(100% - 100px);
    }

    .main__container h1 {
      text-align: center;
    }
  }

  @media screen and (max-width: 1100px) {
    .main__items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 700px) {
    .main__items {
      grid-template-columns: repeat(1, 1fr);
    }

    .main__container {
      max-width: calc(100% - 25px);
    }
  }
</style>