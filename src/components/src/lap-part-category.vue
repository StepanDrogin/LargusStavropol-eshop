<template>
  <div class="lap__category">
    <h2 class="lap__item_title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </h2>
    <div class="options" v-if="areOptionsVisible">
      <p
        class="lap__item_category"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "lap-part-category",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option), (this.areOptionsVisible = false);
    },
  },
};
</script>
<style>
.lap__category {
  margin-right: 45px;
}
.lap__item_title {
  border: 1px solid #383838;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 5px;
  min-width: 375px;
  font-weight: 450;
  font-size: 24px;
  cursor: pointer;
}
.lap__item_category {
  border: 1px solid #383838;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 5px;
  min-width: 375px;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
}
.lap__item_category:hover {
  background: #e83c26;
  color: white;
  box-shadow: inset 0 0 0 3px #e83c26;
}
.lap__item_title:hover {
  background: #e83c26;
  color: white;
  box-shadow: inset 0 0 0 3px #e83c26;
}
/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .lap__item_title {
    margin: 0px;
  }
  .lap__item_category {
    min-width: 25%;
  }
}

/* Portrait phones and smaller */
@media (max-width: 480px) {
  .lap__item_title {
    margin: 0px;
  }
  .lap__item_category {
    min-width: 25%;
  }
}

@media (max-width: 320px) {
  .lap__item_title {
    min-width: 230px;
    margin: 0px;
  }
  .lap__item_category {
    min-width: 25%;
  }
}
</style>