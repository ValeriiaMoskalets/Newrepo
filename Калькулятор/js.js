send.addEventListener("click", fnc);
function fnc(){
    let val_P1 = P1.value;
    let val_P0 = P0.value;
    let val_r = 0;
	val_r = (parseInt(val_P1) - parseInt(val_P0)) / parseInt(val_P0) * 100;
    r.value = val_r;
}
