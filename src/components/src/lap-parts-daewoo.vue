<template>
  <div class="lap__part">
    <lap-popup
      v-if="isInfoPopupVisible"
      rightBtnTitle="Добавить в корзину"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
    >
      <img
        class="lap__part-img"
        :src="require('../../assets/lap-card/' + daewoo_data.image)"
        alt="auto-part"
      />
      <div class="popup__box">
        <p class="lap-part-name">Название: {{ daewoo_data.name }}</p>
        <p class="lap-part-name">
          Категория товара: {{ daewoo_data.category }}
        </p>
        <p class="lap-part-name">
          Каталожный номер: {{ daewoo_data.catalogNumber }}
        </p>
        <p class="popup__price">Стоимость: {{ daewoo_data.price }} &#8381;</p>
      </div>
    </lap-popup>
    <p class="lap-part-name">{{ daewoo_data.name }}</p>
    <img
      class="lap__part-img"
      :src="require('../../assets/lap-card/' + daewoo_data.image)"
      alt="auto-part"
    />
    <div class="lap__part-info">
      <p class="lap__part-price">{{ daewoo_data.price }} &#8381;</p>
      <button class="part-info" @click="showPopupInfo">
        Показать подробнее
      </button>
      <button class="add__button" @click="addToCart">Добавить</button>
    </div>
  </div>
</template>

<script>
import lapPopup from "../popup/lap-popup.vue";
export default {
  components: { lapPopup },
  name: "lap-parts-daewoo",
  props: {
    daewoo_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  mounted() {
    this.$set(this.daewoo_data, "quantity", 1);
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.daewoo_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<style>
@media (min-width: 1200px) {
}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .lap__title {
    text-align: center;
  }
  .daewoo__parts-wrapper {
    flex-direction: column;
  }
  .lap__part {
    max-width: 275px;
    max-height: 275px;
    margin: 20px 10px 20px;
  }
  .lap__part-img {
    max-width: 100%;
    max-height: 120px;
  }
  .daewoo__parts {
    justify-content: center;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
  .lap__title {
    text-align: center;
  }
  .daewoo__parts-wrapper {
    flex-direction: column;
  }
  .lap__part {
    max-width: 275px;
    max-height: 275px;
    margin: 20px 0px 20px;
  }
  .lap__part-img {
    max-width: 100%;
    max-height: 120px;
  }
  .daewoo__parts {
    justify-content: center;
  }
}

@media (max-width: 320px) {
  .lap__title {
    text-align: center;
  }
  .daewoo__parts-wrapper {
    flex-direction: column;
  }
  .lap__part {
    max-width: 275px;
    max-height: 275px;
    margin: 20px 0px 20px;
  }
  .lap__part-img {
    max-width: 100%;
    max-height: 120px;
  }
}
</style>