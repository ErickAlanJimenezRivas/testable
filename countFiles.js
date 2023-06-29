const selectedElm = document.getElementById('selected');

function showChecked(){
  selectedElm.innerHTML = document.querySelectorAll('input[name=files]:checked').length;
}

document.querySelectorAll("input[name=files]").forEach(i=>{
    i.onclick = () => showChecked()
   });

function checkUncheck(checkBox) {

    get = document.getElementsByName('files');
    
    for(var i=0; i<get.length; i++) {
    
    get[i].checked = checkBox.checked;

}
    
    }

    

    