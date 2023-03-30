<template>
  <div class="search">
    <input class="search__input" @focus="focused = true" @blur="focused = false" v-bind:class="{ focus: focused }" type="text" v-model="search" placeholder="Поиск по названию картины">
    <button type="submit" @click="onSearch(search)">Найти</button>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      search: "",
      focused: false,
    }
  },
  computed: {
    ...mapGetters(["SEARCH"])
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE_TO_VUEX"]),
    onSearch(search) {
      this.GET_SEARCH_VALUE_TO_VUEX(search)
    }
  }
}
</script>

<style scoped>
  .search {
    max-width: 416px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .search button {
    font-family: 'Merriweather', sans-serif;
    padding: 13px 36px;
    border: none;
    background: #403432;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.5s ease;
  }

  .search button:hover {
    background: #776763;
    cursor: pointer;
  }

  .search__input {
    font-family: 'Merriweather', sans-serif;
    border: 1px solid #E1E1E1;
    flex: 1;
    padding-left: 16px;
    outline:none;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #343030;
  }

  .search__input::placeholder {
    color: #9F9F9F;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  .focus {
    border: 1px solid #B5B5B5;
  }

  @media screen and (max-width: 1100px) {
    .search {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    .search__input::placeholder {
      font-weight: 300;
      font-size: 10px;
    }
  }

  @media screen and (max-width: 425px) {
    .search {
      max-width: 270px;
    }

    .search__input {
      width: 65%;
      flex: none;
    }

    .search button {
      padding: 13px 24px;
      font-size: 12px;
    }
  }
</style>