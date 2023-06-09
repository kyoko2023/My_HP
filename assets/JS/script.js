/*----------------------------
  ハンバーガーメニューのアニメ
*----------------------------*/
let btn = document.querySelector('.menu-btn')
btn.addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle('is-active');
 });




 /*----------------------------
  footer
*----------------------------*/
  var currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;


  


















