// Start JS Header Page
let header_menu_span = document.getElementById("header_span"),
header_menu = document.getElementById("header_menu"),
header_home_btn = document.getElementById("header_home_btn"),
header_about_btn = document.getElementById("header_about_btn"),
header_blogs_btn = document.getElementById("header_blogs_btn"),
header_contact_btn = document.getElementById("header_contact_btn"),
header_projects_btn = document.getElementById("header_projects_btn"),
header_mamber_btn = document.getElementById("header_member_btn"),
section_mamber = document.querySelector("section#mamber");

class Header{
    header_block(){
        header_menu.style.display = "block";
        header_menu_span.style.display = "none";
    };
    header_none(){
        header_menu.style.display = "none";
        header_menu_span.style.display = "block";
    };
}
let header = new Header();
header_menu_span.addEventListener("click",()=>{
    header.header_block();
    header_home_btn.addEventListener("click",()=>{
        header.header_none();
    });
    header_about_btn.addEventListener("click",()=>{
        header.header_none();
    });
    header_blogs_btn.addEventListener("click",()=>{
        header.header_none();
        alert("Sorry, This Blog Page Can't Load For Now!");
    });
    header_member_btn.addEventListener("click",()=>{
        header.header_none();
        alert("Sorry, This Member Page Can't Load For Now!");
    });
    header_projects_btn.addEventListener("click",()=>{
        header.header_none();
        alert("Sorry, This Projects Page Can't Load For Now!");
    });
    header_contact_btn.addEventListener("click",()=>{
        header.header_none();
    });
});

// End JS Header Page

// Start JS About Page

let about_span = document.getElementById("about_span");
let about_more_btn = document.getElementById("about_more_btn");
let about_more_text = `<p>&nbsp;&nbsp;&nbsp;&nbsp;After that, I taught "Conputer" to the children in PDO. I also leart about "Web Design" from "MMS IT" as an online course when it gave almost 70% discount. Tr.Hein Htet Zan has been teaching us since 2021 untill now. I had learnt a little bit of "Web Design Basic" such as HTML5, CSS & JavaScript" form Tr.Waifer Kolar and other trainers in YouTube before I have leant form "MMS IT". I knew a lot of new knowledge due to "MMS IT".</p><h3>2018(Oct)- 2018 (Dec)</h3><p>&nbsp;&nbsp;&nbsp;&nbsp;In that time, I studied about "Hotel Dual Vocational Training Management 2018" for 3 months at Marfels that is also a part of PDO school. In this course, there are three main subjects such as "Front Office", "Food & Beverage" & "Housekeeping". Others are "Intermediate English" & "Computer Basic". It is so nice for "Hotel Life".</p>`;
class About{
    about_more_text(){
        about_span.innerHTML = about_more_text;
    }
    about_less_text(){
        about_span.innerHTML = "";
    }
}
let about = new About();
about_more_btn.addEventListener("click",()=>{
    if(about_more_btn.value == "More"){
        about.about_more_text();
        about_more_btn.value = "Less";
    }else{
        about_more_btn.value = "More";
        about.about_less_text();
    }
});

// End JS About Page

// Start Projects Page
let first = document.getElementById("first");
let second = document.getElementById("second");
let result = document.getElementById("result");
let sign = ()=>{
    result.innerText = `Fisrt Result : ${Math.sign(first.value)} & Second Result : ${Math.sign(second.value)}`
}
let pow = ()=>{
    result.innerText = Math.pow(first.value,second.value)
}
let sqrt = ()=>{
    result.innerText = `First Result : ${Math.sqrt(first.value)} & Second Result : ${Math.sqrt(second.value)}!`
}
let round = ()=>{
    result.innerText = `First Result : ${Math.round(first.value)} & Second Result : ${Math.round(second.value)}!`
};
let input = document.getElementById("tdl_input");
let tdl_btn = document.getElementById("tdl_button");
let ordl = document.querySelector("ol");
tdl_btn.addEventListener("click",()=>{
    let li = document.createElement("li");
    let text_node = document.createTextNode(input.value);
    let edit = document.createElement("button");
    let del = document.createElement("button");
    let br = document.createElement("hr");
    edit.innerText = "Edit"; del.innerText = "Delete"
    edit.style.color = "green"; del.style.color = "red";
    edit.style.border = "0.3px solid green"; del.style.border = "0.3px solid red";
    li.appendChild(text_node);
    ordl.appendChild(li);
    ordl.appendChild(edit);
    ordl.appendChild(del)
    ordl.appendChild(br);
    edit.addEventListener("click",()=>{
        li.innerText = prompt("Write You Wanna Change List!");
        input.value = li.innerText;
    })
    del.addEventListener("click",()=>{
        let condition = confirm("Are You Sure?");
        if(!condition == true){
            return false;
        }else{
            ordl.removeChild(li);
            ordl.removeChild(edit);
            ordl.removeChild(del);
            ordl.removeChild(br);
        }

    })
});
// End Projects Page

// Start => Introduction My Self With Text Animation
// let h3_animation = document.querySelector("#h3_animation");
// let text_list = ["C|","Co|","Cod|","Code|","Coder|","Y|","Yo|","You|","YouT|","YouTu|","YouTube|","YouTuber|", "S|","St|","Stu|","Stud|","Stude|","Studen|","Student|"];
// let colors = ["cyan","red","blue","yellow","green","purple","black","white","gold","red","cyan","red","blue","yellow","green","purple","black","white","gold"]
// let i = 0;
// setInterval(()=>{
//     if(i == text_list.length){
//         i = 0;
//     }else{
//         h3_animation.innerText = text_list[i];
//         h3_animation.style.color = colors[i];
//         i++;
//     }
// },200)

/* End => Introduction My Self With Text Animation */