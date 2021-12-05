var img1 = new Image();
img1.src = "1z.png";

let img2 = new Image();
img2.src = "2z.png";

let img3 = new Image();
img3.src = "3z.png";

let img4 = new Image();
img4.src = "4z.png";

let img5 = new Image();
img5.src = "5z.png";

let quest = [img1, img2, img3, img4, img5];
let right_answer = [В, А, Д, Г, Г]

let num_img = 0;
let num_ans = 0;
let sum = 0;

document.body.appendChild(quest[num_img]);
btn.addEventListener("click", fnc);
        function fnc(){
            document.body.removeChild(quest[num_img]);
            num_img++;
            document.body.appendChild(quest[num_img]);
        }

btn.addEventListener("click", fnc1);
function fnc1(){
    console.log(А.checked);
    console.log(Б.checked);
    console.log(В.checked);
    console.log(Г.checked);
    console.log(Д.checked);

if (right_answer[num_ans].checked){
    alert("Правильна відповідь");
    sum++;
    } 
else {
    alert("Неправильна відповідь");
    }
    num_ans++;

if (num_ans == right_answer.length){
    document.body.remove(table);
    alert("Правильних відповідей: " + sum);
    }
}