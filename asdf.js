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
      }, {
        id: 3,
        title: 'YouTube',
        model: null
      }, {
        id: 4,
        title: 'Vkontakte/Odnoklassniki',
        model: null
      }, {
        id: 5,
        title: 'Telegram',
        model: null
      }, {
        id: 6,
        title: 'Видеоигры',
        model: null
      }, {
        id: 7,
        title: 'Радио',
        model: null
      }, {
        id: 8,
        title: 'Международное телевидение',
        model: null
      }, {
        id: 9,
        title: 'Местные новостные сайты',
        model: null
      }, {
        id: 10,
        title: 'Instagram',
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