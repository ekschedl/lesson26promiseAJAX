const getData = () => {
  // Получение данных из файла db.json
  return fetch("db.json")
    .then((response) => {
      if (!response.ok) {
        // Вывод ошибки, если запрос не удался
        console.error("Не удалось загрузить данные");
        return Promise.reject("Не удалось загрузить данные");
      }
      return response.json();
    })
    .catch((error) => {
      // Вывод ошибки, если произошла ошибка при получении данных
      console.error("Ошибка:", error);
      return Promise.reject(error);
    });
};

const sendData = (data) => {
  // Отправка данных на сервер
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        // Вывод ошибки, если отправка данных не удалась
        console.error("Не удалось отправить данные");
        return Promise.reject("Не удалось отправить данные");
      }
      return response.json();
    })
    .catch((error) => {
      // Вывод ошибки, если произошла ошибка при отправке данных
      console.error("Ошибка:", error);
      return Promise.reject(error);
    });
};

// Получение данных и последующая отправка на сервер
getData()
  .then((data) => {
    // Вывод полученных данных
    console.log("Данные с сервера:", data);
    return sendData(data);
  })
  .then((responseData) => {
    // Вывод ответа от сервера
    console.log("Ответ от сервера:", responseData);
  })
  .catch((error) => {
    // Вывод ошибки, если что-то пошло не так
    console.error("Ошибка:", error);
  });
