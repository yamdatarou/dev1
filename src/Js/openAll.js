console.log('GitHubのPR　File changed 一括操作');
var targetList = document.querySelector('#files').children.item(0),
    openClass1 = 'open',
    openClass2 = 'Details--on';
    console.log('----');
targetList.childNodes.forEach(function(val){
  if (val.classList) {
  	val.classList.toggle(openClass1);
    val.classList.toggle(openClass2);
  }
});
