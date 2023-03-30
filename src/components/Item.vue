<template>
  <div class="item" v-bind:class="{ active: !price && !click }">
    <img @click="modalClick" :src="image" alt="painting 1" />
    <div class="item__info">
      <span>{{ title }}</span>
      <div v-if="price" class="item__price-container">
        <div class="item__price">
          <p v-if="sale" class="item__sale">{{ sale }}</p>
          <p v-if="price" class="item__price-main">{{ price }}</p>
        </div>
        <div class="item__buttons">
          <button
            v-bind:class="{ clicked: cart }"
            @click="toggleCart"
            type="button"
          >
            {{ this.button }}
          </button>
          <button
            v-bind:class="{ delay: delay }"
            class="item__delay-button"
            type="button"
          >
            Обрабатывается
          </button>
        </div>
      </div>
      <div class="item__price-container" v-else>
        <p class="item__no-price">Продана на аукционе</p>
      </div>
    </div>
    <div
      class="modal"
      @click="modalClose"
      v-bind:class="{ modal_clicked: click }"
    >
      <div class="modal__container">
        <div class="slider">
          <tiny-slider :mouse-drag="true" :loop="false" items="1" gutter="20" controlsText="‹›">
            <div v-for="item in slider" :key="item">
              <img :src="item" alt="slide">
            </div>
          </tiny-slider>
        </div>
        <div class="item__info">
          <span>{{ title }}</span>
          <div v-if="price" class="item__price-container">
            <div class="item__price">
              <p v-if="sale" class="item__sale">{{ sale }}</p>
              <p v-if="price" class="item__price-main">{{ price }}</p>
            </div>
          </div>
          <div class="item__description">{{ description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Item",
  data: function () {
    return {
      cart: false,
      button: "Купить",
      click: false,
      delay: true
    };
  },
  props: ["title", "image", "sale", "price", "description", "slider"],
  components: {
    'tiny-slider': VueTinySlider
  },
  methods: {
    modalClick() {
      this.click = true
      document.body.style.overflow = "hidden"
    },
    modalClose(event) {
      const modal = document.querySelector(".modal");
      if (event.target.classList.contains(modal.classList)) {
        console.log("click")
        this.click = false
        document.body.style.overflow = "auto"
      }
    },
    toggleCart() {
      this.delay = false;
      setTimeout(() => {
        this.delay = true;
      }, 2000);
      let items = this.$store.state.items;
      if (window.localStorage.getItem("items")) {
        items = JSON.parse(window.localStorage.getItem("items"));
      }
      items.forEach((el) => {
        if (el.title === this.title) {
          el.cart = !el.cart;
        }
      });
      window.localStorage.setItem("items", JSON.stringify(items));
      this.checkButtonState();
    },
    checkButtonState() {
      let clickedItems = JSON.parse(window.localStorage.getItem("items"));
      clickedItems.forEach((el) => {
        if (el.title === this.title) {
          this.cart = el.cart;
        }
      });
      if (this.cart === true) {
        this.button = "В корзине";
      } else {
        this.button = "Купить";
      }
    },
  },
  mounted() {
    this.checkButtonState();
  },
  updated() {
    this.checkButtonState();
  },
};
</script>
<style scoped>
.item {
  width: 280px;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.item__info {
  width: 100%;
  padding: 20px 24px 24px 24px;
  border-top: 1px solid #e1e1e1;
}

.item span {
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #343030;
}

.item__price-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
}

.item__price {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item__price-main {
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #343030;
}

.item__sale {
  font-weight: 300;
  font-size: 14px;
  text-decoration-line: line-through;
  color: #a0a0a0;
}

.item__info button {
  width: 118px;
  height: 48px;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #f4f6f9;
  border: none;
  background-color: #382e2b;
  transition: all 0.5s ease;
}

.item__info button:hover {
  background: #776763;
  cursor: pointer;
}

.item__no-price {
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #343030;
  line-height: 48px;
}

.active {
  opacity: 0.5;
}

.modal {
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(9, 15, 30, 0.9);
  padding: 0;
  margin: 0;
}

.modal .item__info {
  border: none;
}

.modal__container {
  width: 500px;
  height: fit-content;
  padding: 20px;
  background-color: #eceaea;
}

.clicked {
  background: #5B3A32 !important;
}

.modal_clicked {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.item__description {
  margin-top: 20px;
}

.item__buttons {
  position: relative;
}

.item__delay-button {
  position: absolute;
  left: 0;
  background: #c1b4b1 !important;
  font-size: 10px !important;
}

.delay {
  display: none;
}

.slider {
  position: relative;
}

@media screen and (max-width: 600px) {
  .modal__container {
    width: 400px;
  }
}

@media screen and (max-width: 425px) {
  .modal__container {
    width: 300px;
  }
}
</style>
