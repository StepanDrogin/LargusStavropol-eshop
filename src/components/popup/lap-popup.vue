<template>
<div class="popup__wrapper" ref="popup__wrapper">
    <div class="lap-popup" >
        <div class="lap-popup__header">
            <span>Подробное описание товара</span>
            <span>
                <i class="material-icons"
                @click="closePopup"
                >close</i>
            </span>
        </div>
        <div class="lap-popup__content">
            <slot></slot>
        </div>
        <div class="lap-popup__footer">
            <button class="submit__button"
            @click="rightBtnAction"
            >{{rightBtnTitle}}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'lap-popup',
    methods: {
        closePopup() {
            this.$emit('closePopup')
        },
        rightBtnAction() {
        this.$emit('rightBtnAction')
      }
    },
    props: {
        rightBtnTitle: {
            type: String,
            default: 'Ok'
        }
},
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popup__wrapper']) {
          vm.closePopup()
        }
      })
    },
  }
</script>

<style>
.popup__box {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}
.popup__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
.lap-popup {
    padding: 16px;
    position: fixed;
    width: 550px;
    background: #ffffff;
    box-shadow: 0px 0 10px 3px #413b3b;
    z-index: 10;
}
.lap-popup__header {
    display: flex;
    justify-content: space-between;
}
.lap-popup__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.lap-popup__footer {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit__button {
    padding: 8px;
    color: whitesmoke;
    background: #26ae26;
        cursor: pointer;
}
.material-icons {
    cursor: pointer;
}
@media (max-width: 767px) {
.lap-popup {
    width: 50%;
}
.lap-popup__content {
    flex-direction: column;
}
}
/* Portrait phones and smaller */
@media (max-width: 480px) {
.lap-popup {
    width: 50%;
}
.lap-popup__content {
    flex-direction: column;
}
}

@media (max-width: 320px) {
.lap-popup {
    width: 50%;
}
.lap-popup__content {
    flex-direction: column;
}
}
</style>