let upload =document.querySelector(".fa-cloud-upload-alt"),
    dropArea=document.getElementById("dropArea");
upload.addEventListener("click",function(){
    this.nextElementSibling.click();
})

dropArea.ondragover=(ev)=>ev.preventDefault();
dropArea.ondrop=(ev)=>{
    ev.preventDefault();
    readFile(ev.dataTransfer.files)
}
upload.nextElementSibling.addEventListener("change",ev=>{
    readFile(ev.target.files);
    setting();
})
function readFile(files){
    [...files].forEach(file=>{
        let reader=new FileReader();
        reader.onload=function(ev){
            table(this.result,file.type,file.size)
            // console.log(this.result);
        }
        reader.readAsText(file);
    });
}

function setting(){
    upload.nextElementSibling.value="";
    document.querySelector(".table-dark").classList.remove("d-none")
}
let count=1;
function table(text,type,size){
    // console.log(text);
       let tr=`<tr>
                    <th scope="row">${count}</th>
                    <td>
                        <div class=content>
                            <p>
                                ${text}
                            </p>
                        </div
                    </td>
                    <td>${type}</td>
                    <td>${size}</td>
               </tr>`

document.querySelector(".table-dark").lastElementChild.innerHTML+=tr;
count++;
}