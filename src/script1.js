$(document).ready(function () {
    
    const main1 = document.getElementById('main');
    const main2 = document.getElementById('main2');
    $("#cover2").click(function () {

        main.style.display = 'none';
        main2.style.display = 'block';


    });
    $("#cover1").click(function () {
        main.style.display = 'block';
        main2.style.display = 'none';
    });
});