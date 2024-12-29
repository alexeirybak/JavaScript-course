fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Запрос к серверу не удался");
    }
    return response.json();
  })
  .then((data) => console.log(data));




