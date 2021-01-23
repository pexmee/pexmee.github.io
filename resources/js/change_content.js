let mainContainers = document.getElementById('mainParent').children;
let navButtons = document.getElementById('navID').children;

const hideAll = function(){
  for(let i = 0; i < mainContainers.length; ++i){
    mainContainers[i].children[0].style.display = 'none';
  }
};

const setNavListeners = () => {
  for(let i = 0; i < navButtons.length; ++i){
    navButtons[i].children[0].addEventListener('click',function(){
      hideAll();
      mainContainers[i].children[0].style.display = 'block';
    });
  }
}

setNavListeners();