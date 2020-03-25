let myHeaders = new Headers();

let fetchOptions = {
    method: 'GET',          // Methode utilisée par la requête
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
// Fetch : Fonction native de l'API web JS du navigateur
fetch("https://jsonplaceholder.typicode.com/users", fetchOptions)     
.then(resp => resp.text())                                        // QUAND il retourne une reponse je convertit mon objet response en text
.then(body => {                                                   // QUAND il a fini de préparer le texte
    body = JSON.parse(body);

    let user_list = Object.values(body);
    let col_names = Object.keys(user_list[0]);
    user_list.forEach((item, index) => {
        let user = Object.values(item);
        document.querySelector("#table_body").insertAdjacentHTML(`beforeend`, 
                        `<tr id=row_`+index+`></tr>`);
        user.forEach((user_info,user_nb)=>{ 
            if (index==0){
                document.querySelector("#thead_row").insertAdjacentHTML(`beforeend`, 
                            `<th>`+col_names[user_nb]+`</th>`);
            }
            if (typeof(user_info)!= "object"){
                document.querySelector("tr#row_"+index).insertAdjacentHTML(`beforeend`, 
                            `<td>`+user_info+`</td>`);
            }
           else {
                let string_info = "";
                let complex_info = Object.values(user_info);
                let list_complex = Object.values(complex_info);
                list_complex.forEach((elt) =>{
                    if (typeof(elt)!="object"){
                        string_info+= " "+elt;
                    }
                    else{
                        string_info += Object.values(elt);
                    }
                })

                document.querySelector("tr#row_"+index).insertAdjacentHTML(`beforeend`, 
                    `<td>`+string_info+`</td>`);
            }
        })
    })
})
.catch(erreur =>{
    console.log(erreur);
})


