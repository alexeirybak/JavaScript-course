// const request = new Promise((resolve, reject) => {
//   const success = 0.7;

//   if (success > 0.5) {
//     resolve(success);
//   } else {
//     reject();
//   }
// });

// request
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Ошибка при получении данных");
//   })
//   .finally(() => {
//     console.log("Операция завершена");
//   });



//   function request(url, onSuccess) {
//     /*...*/
//   }

//   request("/api/users/1", function (user) {
//     request(`/api/photos/${user.id}/`, function (photo) {
//       request(`/api/avatars/${photo.id}/`, function (response) {
//         console.log(response);
//       });
//     });
//   });


//   //
//   function request(url) {
//     return new Promise(function (resolve, reject) {
//       let responseFromServer;
//       /*...*/
//       resolve(responseFromServer);
//     });
//   }

//   request("/api/users/1")
//     .then((user) => request(`/api/photos/${user.id}/`))
//     .then((photo) => request(`/api/avatars/${photo.id}/`))
//     .then((response) => console.log(response));


