import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions'
import mutations from "./mutations/mutations"
import getters from "./getters/getters";


Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        search: '',
        cart: [],
        items: [
            {
                id: 1,
                image: "/vue-store/painting_1.png",
                title: "«Рождение Венеры» Сандро Боттичелли",
                sale: "2 000 000 $",
                price: "1 000 000 $",
                cart: false,
                slider: ["/vue-store/painting_1.png", "/vue-store/painting_4.png", "/vue-store/painting_3.png"],
                description: "«Рождение Венеры» (итал. Nascita di Venere) — картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.",
            },
            {
                id: 2,
                image: "/vue-store/painting_2.png",
                title: "«Тайная вечеря»  Леонардо да Винчи",
                sale: "",
                price: "3 000 000 $",
                cart: false,
                slider: ["/vue-store/painting_2.png", "/vue-store/painting_4.png", "/vue-store/painting_3.png"],
                description: "«Та́йная ве́черя» — монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане.",
            },
            {
                id: 3,
                image: "/vue-store/painting_3.png",
                title: "«Сотворение Адама» Микеланджело",
                sale: "6 000 000 $",
                price: "5 000 000 $",
                cart: false,
                slider: ["/vue-store/painting_3.png", "/vue-store/painting_2.png", "/vue-store/painting_1.png"],
                description: "«Сотворение Адама» — фреска Микеланджело, написанная около 1511 года.",
            },
            {
                id: 4,
                image: "/vue-store/painting_4.png",
                title: "«Урок анатомии»  Рембрандт",
                sale: "",
                price: "",
                cart: false,
                slider: ["/vue-store/painting_4.png", "/vue-store/painting_3.png", "/vue-store/painting_2.png"],
                description: "«Урок анатомии доктора Тульпа» — картина Рембрандта, написанная в 1632 году.",
            }
        ],
    },
    mutations,
    actions,
    getters,
})

export default store