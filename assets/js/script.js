$(document).ready(function () {
  $("#btn").click(function () {
    axios.get(`https://jsonplaceholder.typicode.com/todos?id=${$("#input").val()}`).then(
      (response) => {
        response.data.forEach((e) => {
          e.preventDefault();
          if ($("#input").val() == e.id) {
            $("#cards").html(`
                    <p>${e.id}</p>
                    <p>${e.title}</p>
                    <p>${e.completed}</p>
                    `);
          } else {
            alert("Error");
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  });
});
