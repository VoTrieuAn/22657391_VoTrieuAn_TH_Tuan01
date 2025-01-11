const URL = "https://jsonplaceholder.typicode.com/todos";
// const URL = "http://localhost:3000/todo";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    let htmls = "";
    const elementTodoList = document.querySelector("#todo-list");
    if(elementTodoList) {
      for(const item of data) {
        htmls += `
          <tr todo-id="${item.id}">
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>
              <button class="button button--delete" button-delete="${item.id}">Delete</button>
              <button class="button button--edit" button-edit="${item.id}">Edit</button>
            </td>
          </tr>
        `;
      }
      elementTodoList.innerHTML = htmls;
    }
  }).then(data => {
    const buttonEdits = document.querySelectorAll("[button-edit]");
    if(buttonEdits.length > 0) {
      console.log(buttonEdits);
      buttonEdits.forEach(button => {
        button.addEventListener("click", () => {
          const idUpdate = button.getAttribute("button-edit");
          const dataUpdate = {
            title: "Công việc 7",
          }
      
          fetch(URL + `/${idUpdate}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dataUpdate)
          })
            .then(res => res.json())
            .then(data => {
              const trUpdate = document.querySelector(`tr[todo-id="${idUpdate}"]`);
              if(trUpdate) {
                trUpdate.innerHTML = `<tr todo-id="${data.id}">
                <td>${data.id}</td>
                <td>${data.title}</td>
                <td>
                  <button button-delete="${data.id}">Delete</button>
                  <button button-edit="${data.id}">Edit</button>
                </td>
              </tr>`;
                alert("Thành công");
              }
            });
        });
      });
    }
  });

// const buttonCreate = document.querySelector("[button-create]");

// if(buttonCreate) {
//   buttonCreate.addEventListener("click", () => {
//     const newWork = {
//       title: "Công việc 5",
//     };
//     fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newWork),
//     })
//       .then(res => res.json())
//       .then(data => {
//         const li = document.createElement("li");
//         li.setAttribute("todo-id", data.id);
//         li.innerHTML = `${data.title}`;
//         const elementTodoList = document.querySelector("#todo-list");
//         elementTodoList.appendChild(li);
//       });
//   });
// }


// const buttonDelete = document.querySelector("[button-delete]");
// if(buttonDelete) {
//   buttonDelete.addEventListener("click", () => {
//     const idDelete = 11;
//     fetch(URL + `/${idDelete}`, {
//       method: "DELETE",
//     })
//       .then(res => res.json())
//       .then(data => {
//         const liDelete = document.querySelector(`li[todo-id="${idDelete}"]`);
//         liDelete.remove();
//       });
//   });
// }