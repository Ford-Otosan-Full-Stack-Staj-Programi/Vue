<script setup>
import { ref, reactive, computed } from "vue"
import ButtonComp from '@/components/ButtonComp.vue';

const form = reactive({
  name: '',
  lastname: ''
});

const color = ref('');
const colors = reactive([
  { name: 'chocolate' },
  { name: 'aqua' },
  { name: 'navy' },
  { name: 'pink' },
  { name: 'cornflowerblue' },
  { name: 'darkorange' },
  { name: 'darkslateblue' },

]);

const addNewColor = () => {
  if (color.value == '') return;

  colors.push({ name: color.value });
}

const filteredColors = computed(() => {
  return colors.filter(color => color.name == 'pink' || color.name == "blue" || color.name == 'purple');
})

const fullName = computed(() => {
  return form.name + ' ' + form.lastname
})

const firstLetters = computed(() => {
  return form.name.charAt(0) + form.lastname.charAt(0)
})

const saveForm = () => {
  const body = JSON.stringify(form);
  fetch('/save', {
    method: 'POST',
    body: body
  })
}

</script>

<template>
  <div class="form">
    <h2>Computed Component</h2>

    <input type="text" v-model="color" placeholder="Bir renk adi yazin: purple, blue vb.">
    <ButtonComp text="Add New Color" @action="addNewColor"></ButtonComp>

    <p>
      <strong>filteredColors:</strong> {{ filteredColors }}
    </p>
    <div class="colors" v-for="color in colors" :style="{ color: color.name }">
      {{ color.name }}
    </div>

    <br>
    <h2>Computed Form Elements</h2>
    <div class="profile">
      <strong>{{ fullName }}</strong>
      <span lang="tr">{{ firstLetters }}</span>
    </div>

    <br>
    <strong>Name: {{ form.name }}</strong>
    <br>
    <input type="text" v-model="form.name">
    <br>
    <strong>Lastname: {{ form.lastname }}</strong>
    <br>
    <input type="text" v-model="form.lastname">

    <ButtonComp text="Save Form" color="tertiary" @action="saveForm"></ButtonComp>

  </div>
</template>

<style lang="scss" scoped>
.form {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  width: 100%;
  max-width: 600px;

  input {
    margin: 10px 0;
    padding: 8px;
  }

  p {
    word-wrap: break-word;
  }

  .colors {
    margin: 8px 0;
    padding: 8px;
    font-size: 16px;

    background: ghostwhite;
  }
}


.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 320px;
  min-height: 80px;

  color: #202020;

  font-size: 32px;

  span {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    background-color: lightcoral;
    color: ghostwhite;

    border-radius: 50%;

    font-size: 48px;

    text-transform: uppercase;
  }
}
</style>