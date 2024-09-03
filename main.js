const inpt = document.getElementById('inpt');

let outpt = document.querySelector('.output');


let arr = [];
function additem() {

    let taskobj = {
        tasknm:inpt.value,
    }
    if ( inpt.value != '') {
        arr.push(taskobj)
        inpt.value= '';
        document.querySelector('.inptbox').classList.remove('error')
    } else {
        document.querySelector('.inptbox').classList.toggle('error')
    }



    showdata()
    
}

function showdata() {
    let objecttable= '';
    for(let i = 0; i< arr.length;i++) {
        objecttable += `
         <div class="taskadd" id="aaa" onclick="linethrough(event)">
         <h2>${arr[i].tasknm}</h2> 
         <div class="red" onclick="deleteobj(${i})"></div>
                    </div>
                    
                        `
    }
    document.querySelector('.output').innerHTML = objecttable
}

 function linethrough(event) {
    let x = event.target;
    x.classList.toggle('done');
}

function deleteobj(i) {
    arr.splice(i,1);
    showdata();
}


