/**
 * ブラウザのお気に入りに追加したをURLに貼り付け
 * javascript: var targetList = document.querySelector('#files').children.item(0),%20%20%20%20%20openClass1%20=%20'open',%20%20%20%20%20openClass2%20=%20'Details--on';%20%20%20%20%20console.log('----');%20targetList.childNodes.forEach(function(val){%20%20%20if%20(val.classList)%20{%20%20%20val.classList.toggle(openClass1);%20%20%20%20%20val.classList.toggle(openClass2);%20%20%20}%20});
 */
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
