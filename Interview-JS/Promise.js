// const userPromise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.2) {
//     resolve();
//   } else {
//     reject();
//   }
// })
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("not resolved");
//   });

// const userPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.2) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// };

// userPromise().then(() => {
//   console.log("resolved");
// });
// userPromise().catch(() => {
//   console.log("not resolved");
// });

const fakePromise = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (url === "/user") {
        resolve({
          status: 200,
          userId: 23,
          name: "Rian",
        });
      } else {
        reject({ status: 404, message: "user not found" });
      }
    }, 2000);
  });
};

fakePromise("/user")
  .then((res) => {
    console.log(res);
    console.log("SUCCESS");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED");
  });
