const addBtn = document.getElementById('add');

var count = 0;
const Increment = () => {
  count++;
};
const Decrement = () => {
  count--;
};
addBtn.addEventListener("click", Increment);

//......................................
addBtn.addEventListener('click', ()=>{
  addNewNote();
});
function addNewNote() {
  var note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML =  
  `<div class="tools"> 
  <div class="cnt">count</div>
    <button class="edit"><i class="fa-solid fa-floppy-disk"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
  </div>
  <div class="main hidden"></div>
  <textarea > </textarea>`;
  
  const total = note.querySelector(".cnt");
    
   total.innerHTML = count; 
  
   //thiisssssssss toggle   
  const toy = note.querySelector('textarea');
  toy.addEventListener('dblclick', () => { 
		let x = toy; 
    note.classList.toggle('styleTwo');  
	});
  
const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete'); 
  

const main = note.querySelector('.main');
const textArea = note.querySelector("textarea");
  
  main.addEventListener("click", ()=>{
    note.classList.toggle('styleTwo');

  })


editBtn.addEventListener('click', ()=>{ 
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
  
});
  
deleteBtn.addEventListener('click', ()=>{
  console.log(--count);
  note.remove();
  if(count==0){
    alert("No More Notes")
  } 
});  

textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);  
      
}); 
  document.body.appendChild(note);
}
 

