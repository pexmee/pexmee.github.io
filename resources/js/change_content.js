let mainContainers = document.getElementById('mainParent').children;
let listChildren = document.getElementById('navID').children;

const hideAll = function(){
  for(let i = 0; i < mainContainers.length; ++i){
    mainContainers[i].children[0].style.display = 'none';
  }
}

for(let i = 0; i < listChildren.length; ++i){
  let child = listChildren[i];
  child.children[0].addEventListener('click',function(){
    hideAll();
    mainContainers[i].children[0].style.display = 'block';
  })
}