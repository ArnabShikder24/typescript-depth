// const makePromise = (): Promise<string> => {
//    return new Promise<string>((resolve, reject) => {
//       const data: string = "Data is fetched";
//       if(data) {
//          resolve(data);
//       }
//       else{
//          reject("failed to feted data");
//       }
//    });
// }


// const getPromiseData = async (): Promise<void> => {
//    const data = await makePromise();
//    console.log(data);
// }

// getPromiseData();

// interface ITodo {
//    userId: string;
//    id: string;
//    title: string;
//    completed: boolean;
// }


// const fetchTodo = async (): Promise<void> => {
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    return await response.json();
   
// }


// const geTotoData = async (): Promise<void> => {
//    const result = await fetchTodo();
//    console.log(result);
// }

// geTotoData();


