
let date = document.getElementById("date")
date.innerHTML=moment().format("MMM Do YY");


add_item = () =>{
    let value_to_add= document.getElementById("add").value;
    if (value_to_add != ""){
        document.querySelector("#form_check").insertAdjacentHTML(`beforeend`, 
                            `<p>
                                <label class="container">`+value_to_add+
                                    `<input type="checkbox" name="action">
                                    <span class="checkmark"></span>
                                </label>
                                <img id="delete" src="./delete.png" alt="">
                            </p>`);
        document.getElementById("add").value ="";
    }
}

let PLUS = document.querySelector("#plus");
PLUS.addEventListener('click', add_item);
/*
let MOINS = document.querySelector("#delete");
MOINS.addEventListener('click', delete_item);

*/