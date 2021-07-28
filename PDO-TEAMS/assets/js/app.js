const all_office = [{img : "../assets/img/office/zinmaung.jpg",name : "Zin Maung", en_name : "Jude", position : "Manager", email : "zinmaung2011@gmail.com", phone : "+959402598710", facebook : "Zin Maung"},
{img : "../assets/img/office/naylinhtun.jpg",name : "Nay Lin Htun", en_name : "Justus", position : "Assistant Manager", email : "example@gmail.com", phone : "+959000000000", facebook : "Nay Lin Htun"},
{img : "../assets/img/office/aungkyawzwah.jpg",name : "Aung Kyaw Zwah", en_name : "Oscar", position : "Senior", email : "example@gmail.com", phone : "+959696066864", facebook : "Aung Kyaw Zwah"},
{img : "../assets/img/office/chawei.jpg",name : "Chaw Ei", en_name : "Marry", position : "Senior", email : "example@gmail.com", phone : "+959000000000", facebook : "Chaw Ei"},
{img : "../assets/img/office/shunelaemay.jpg",name : "Shoon Lae May", en_name : "Sera", position : "Senior", email : "example@gmail.com", phone : "+959000000000", facebook : "sXoon Lae May"},
{img : "../assets/img/office/theinhtikeaung.jpg",name : "Thein Htike Aung", en_name : "Lucas", position : "Senior", email : "theinhtike.lucas@gmail.com", phone : "+959407216800", facebook : "Thein Htike Aung"}];
let input_office = document.querySelector('input'),
office_btn = document.querySelector("button");
office_btn.addEventListener("click",()=>{
    let office_show = document.getElementById("all-result");
    if((input_office.value).toLocaleLowerCase() == (all_office[0].name).toLowerCase() || (input_office.value).toLocaleLowerCase() == (all_office[0].en_name).toLowerCase()){
        office_show.innerHTML =`<div>
        <img class="profile-img" src="${all_office[0].img}" alt="all Profile">
        </div>
        <div id="details-div">
            <ul>
            <h3 style="text-align: center;color:aqua">${input_office.value}'s Result!</h3>
                <li>Name : <i>${all_office[0].name}</i></li>
                <li>English Name : <i>${all_office[0].en_name}</i></li>
                <li>Position : <i>${all_office[0].position}</i></li>
                <li>Email : <i>${all_office[0].email}</i></li>
                <li>Phone : <i>${all_office[0].phone}</i></li>
                <li>FaceBook : <i>${all_office[0].facebook}</i></li>
            </ul>
        </div> `;
    }else if((input_office.value).toLocaleLowerCase() == (all_office[1].name).toLowerCase() || (input_office.value).toLocaleLowerCase() == (all_office[1].en_name).toLowerCase()){
        office_show.innerHTML =`<div>
        <img class="profile-img" src="${all_office[1].img}" alt="all Profile">
        </div>
        <div id="details-div">
            <ul>
            <h3 style="text-align: center;color:aqua">${input_office.value}'s Result!</h3>
                <li>Name : <i>${all_office[1].name}</i></li>
                <li>English Name : <i>${all_office[1].en_name}</i></li>
                <li>Position : <i>${all_office[1].position}</i></li>
                <li>Email : <i>${all_office[1].email}</i></li>
                <li>Phone : <i>${all_office[1].phone}</i></li>
                <li>FaceBook : <i>${all_office[1].facebook}</i></li>
            </ul>
        </div> `;
    }else if((input_office.value).toLocaleLowerCase() == (all_office[2].name).toLowerCase() || (input_office.value).toLocaleLowerCase() == (all_office[2].en_name).toLowerCase()){
        office_show.innerHTML =`<div>
        <img class="profile-img" src="${all_office[2].img}" alt="all Profile">
        </div>
        <div id="details-div">
            <ul>
            <h3 style="text-align: center;color:aqua">${input_office.value}'s Result!</h3>
                <li>Name : <i>${all_office[2].name}</i></li>
                <li>English Name : <i>${all_office[2].en_name}</i></li>
                <li>Position : <i>${all_office[2].position}</i></li>
                <li>Email : <i>${all_office[2].email}</i></li>
                <li>Phone : <i>${all_office[2].phone}</i></li>
                <li>FaceBook : <i>${all_office[2].facebook}</i></li>
            </ul>
        </div> `
    }else if((input_office.value).toLocaleLowerCase() == (all_office[3].name).toLowerCase() || (input_office.value).toLocaleLowerCase() == (all_office[3].en_name).toLowerCase()){
        office_show.innerHTML =`<div>
        <img class="profile-img" src="${all_office[3].img}" alt="all Profile">
        </div>
        <div id="details-div">
            <ul>
            <h3 style="text-align: center;color:aqua">${input_office.value}'s Result!</h3>
                <li>Name : <i>${all_office[3].name}</i></li>
                <li>English Name : <i>${all_office[3].en_name}</i></li>
                <li>Position : <i>${all_office[3].position}</i></li>
                <li>Email : <i>${all_office[3].email}</i></li>
                <li>Phone : <i>${all_office[3].phone}</i></li>
                <li>FaceBook : <i>${all_office[3].facebook}</i></li>
            </ul>
        </div> `
    }else if((input_office.value).toLocaleLowerCase() == (all_office[4].name).toLowerCase() || (input_office.value).toLocaleLowerCase() == (all_office[4].en_name).toLowerCase()){
        office_show.innerHTML =`<div>
        <img class="profile-img" src="${all_office[4].img}" alt="all Profile">
        </div>
        <div id="details-div">
            <ul>
            <h3 style="text-align: center;color:aqua">${input_office.value}'s Result!</h3>
                <li>Name : <i>${all_office[4].name}</i></li>
                <li>English Name : <i>${all_office[4].en_name}</i></li>
                <li>Position : <i>${all_office[4].position}</i></li>
                <li>Email : <i>${all_office[4].email}</i></li>
                <li>Phone : <i>${all_office[4].phone}</i></li>
                <li>FaceBook : <i>${all_office[4].facebook}</i></li>
            </ul>
        </div> `
    }else if((input_office.value).toLocaleLowerCase() == (all_office[5].name).toLowerCase() || (input_office.value).toLocaleLowerCase() == (all_office[5].en_name).toLowerCase()){
        office_show.innerHTML =`<div>
        <img class="profile-img" src="${all_office[5].img}" alt="all Profile">
        </div>
        <div id="details-div">
            <ul>
            <h3 style="text-align: center;color:aqua">${input_office.value}'s Result!</h3>
                <li>Name : <i>${all_office[5].name}</i></li>
                <li>English Name : <i>${all_office[5].en_name}</i></li>
                <li>Position : <i>${all_office[5].position}</i></li>
                <li>Email : <i>${all_office[5].email}</i></li>
                <li>Phone : <i>${all_office[5].phone}</i></li>
                <li>FaceBook : <i>${all_office[5].facebook}</i></li>
            </ul>
        </div> `
    }else{
        office_show.innerHTML = `<h3 style="color:aqua;text-align: center;text-shadow:1px 1px red">Sorry, ${input_office.value} doesn't exit in this list!</h3>`;
    }
});
