const { createApp, ref } = Vue

createApp({
  setup() {
    const options = ref([
      {
        id: 1,
        title: 'Местное телевидение',
        model: null
      }, {
        id: 2,
        title: 'Российское национальное телевидение',
        model: null
      },
      // сюда добавить все варианты, id - УНИКАЛЬНОЕ число
    ])

    const send = async () => {
      const url = 'УРЛ_БЭКЕНДА'

      try {
        const response = await axios.post(url, options.value)

        // сервер ответил успешно
      } catch (e) {
       // произошла ошибка при сохранении
      }
    }

    return {
      options,
      send
    }
  }
}).mount('#app')