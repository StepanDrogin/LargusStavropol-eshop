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
        :src="require('../../assets/lap-card/' + chevrolet_data.image)"
        alt="auto-part"
      />
      <div class="popup__box">
        <p class="lap-part-name">Название: {{ chevrolet_data.name }}</p>
        <p class="lap-part-name">
          Категория товара: {{ chevrolet_data.category }}
        </p>
        <p class="lap-part-name">
          Каталожный номер: {{ chevrolet_data.catalogNumber }}
        </p>
        <p class="popup__price">
          Стоимость: {{ chevrolet_data.price }} &#8381;
        </p>
      </div>
    </lap-popup>
    <p class="lap-part-name">{{ chevrolet_data.name }}</p>
    <img
      class="lap__part-img"
      :src="require('../../assets/lap-card/' + chevrolet_data.image)"
      alt="auto-part"
    />
    <div class="lap__part-info">
      <p class="lap__part-price">{{ chevrolet_data.price }} &#8381;</p>
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
  name: "lap-parts-chevrolet",
  props: {
    chevrolet_data: {
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
  methods: {
    addToCart() {
      this.$emit("addToCart", this.chevrolet_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
  mounted() {
    this.$set(this.chevrolet_data, "quantity", 1);
  },
};
</script>

<style>
.part-info {
  width: 85px;
  height: 34px;
  border-radius: 7px;
  background: rgb(46, 43, 42);
  color: white;
  cursor: pointer;
}
.lap-part-name {
  text-align: center;
}
.lap__part-img {
  height: 180px;
  width: 257px;
  border-top: 2px solid #171717;
  border-bottom: 2px solid #171717;
  box-sizing: border-box;
}
.lap__part-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px;
}
.lap__part {
  background: rgb(233, 228, 227);
  margin: 20px 20px 20px 20px;
  border: 2px solid #171717;
  box-sizing: border-box;
  border-radius: 4px;
}
.add__button {
  width: 75px;
  height: 34px;
  border-radius: 7px;
  background: rgb(16, 109, 56);
  color: white;
  cursor: pointer;
}
.lap__part-price {
  border: 2px solid #383838;
  padding: 4px;
}
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
  .chevrolet__parts-wrapper {
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
  .chevrolet__parts {
    justify-content: center;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
  .lap__title {
    text-align: center;
  }
  .chevrolet__parts-wrapper {
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
  .chevrolet__parts {
    justify-content: center;
  }
}

@media (max-width: 320px) {
  .lap__title {
    text-align: center;
  }
  .chevrolet__parts-wrapper {
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
