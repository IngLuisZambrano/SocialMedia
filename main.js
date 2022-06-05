let msg = document.getElementById("msg");
let form = document.getElementById("form");
let post = document.getElementById("post");
let input = document.querySelector("#input");


form.addEventListener("submit", (e) =>{
    e.preventDefault();         // para que quede en la consola.
    console.log("button clicked");
    formValidation();
    acceptData();
});

let formValidation = () => {
    if (input.value === "") {    // el text area no puede estar vacia !!!
        msg.innerHTML = "Post no puede estar vacio."
        console.log("No hay nada escrito para postear !!");
    }
    else {
        msg.innerHTML = ""
        console.log(input.value);
    }
};

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    crearPost();
};

let crearPost = () => {
    if(input.value !== ""){   // para que no se creen post con el text area vacio
    post.innerHTML += `
    <div>
        <p> ${data.text} </p>
            <span class="options"> 
                <i onClick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
            </span>
    </div> `;
    input.value = "";  // para limpiar el textarea;
    }
}

let deletePost = (e) => {
    if (confirm("Estas seguro de borrar el post ?") === true){
        e.parentElement.parentElement.remove();
    }
}

let updatePost = (e) => {
    if (confirm("Estas seguro de modificar el post ?") === true){
        input.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove();
    }   
}
