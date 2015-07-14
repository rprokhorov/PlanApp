/*
Общие сокращения:
WP = WorkPlace (Рабочее место)
MP = MeetingRoom (Переговорные комнаты)
SP = SilentRoom (Комнаты индивидуальной работы)
PR = PrintingRoom (Комнаты печати)
P  = Printer (Принтер)
D  = Department (Подразделения)
 */


/*
Объявляем паблик переменные
 */
var $searchSurName = $('.search_SurName'); //объект с классом .SurName
var $searchName = $('.search_Name'); //объект с классом .SurName
var $searchfield = $('.searchfield'); //объект с классом .searchfield
var allUsers = null; //массив данных пользователей

// var searchSurNameText = $searchSurName.val().toLowerCase(); // строка поиска по фамилии
var SearchCount = 0; // счётчик количесва найденных совпадений в строке поиска
var $chk_mp1 = $(".chk_mp1"); // переменная чекбокса для  переговорной №1
var $chk_mp2 = $(".chk_mp2"); // переменная чекбокса для переговорной №2
var $chk_mp3 = $(".chk_mp3"); // переменная чекбокса для переговорной №3
var $chk_mp4 = $(".chk_mp4"); // переменная чекбокса для переговорной №4
var $chk_mp5 = $(".chk_mp5"); // переменная чекбокса для переговорной №5
var $chk_mp5_mp6 = $(".chk_mp5_mp6"); // переменная чекбокса для переговорной №5+6
var $chk_mp6 = $(".chk_mp6"); // переменная чекбокса для переговорной №6
var $chk_mp7 = $(".chk_mp7"); // переменная чекбокса для переговорной №7
var $chk_mp8 = $(".chk_mp8"); // переменная чекбокса для переговорной №8
var $chk_mp9 = $(".chk_mp9"); // переменная чекбокса для переговорной №9
var $chk_mp10 = $(".chk_mp10"); // переменная чекбокса для переговорной №10
var $chk_Department_of_Information_Technology = $(".chk_Department_of_Information_Technology"); // переменная чекбокса для департамента "Департамент по информационным технологиям"
var $chk_Administrative_Directorate = $(".chk_Administrative_Directorate");                     // переменная чекбокса для департамента "Административная дирекция"
var $chk_Project_Office = $(".chk_Project_Office");                                             // переменная чекбокса для департамента "Проектный офис"
var $chk_Financial_Management = $(".chk_Financial_Management");                                 // переменная чекбокса для департамента "Финансовая дирекция"
var $chk_Directorate_of_Human_Resources = $(".chk_Directorate_of_Human_Resources");             // переменная чекбокса для департамента "Дирекция по работе с персоналом"
var $chk_Production_Directorate = $(".chk_Production_Directorate");                             // переменная чекбокса для департамента "Производственная дирекция"
var $chk_Commercial_Directorate = $(".chk_Commercial_Directorate");                             // переменная чекбокса для департамента "Коммерческая дирекция"
var $chk_KRU = $(".chk_KRU");                                                                   // переменная чекбокса для департамента "Контрольно-ревизионное управление"
var $chk_Department_of_Public_Relations = $(".chk_Department_of_Public_Relations");             // переменная чекбокса для департамента "Департамент по связям с общественностью"
var $chk_Directorate_of_Business_Development = $(".chk_Directorate_of_Business_Development");   // переменная чекбокса для департамента "Дирекция по развитию бизнеса"
var $chk_Law_Directorate = $(".chk_Law_Directorate");                                           // переменная чекбокса для департамента "Юридическая дирекция"
var $MP1 = $(".MP1")
var $MP2 = $(".MP2")
var $MP3 = $(".MP3")
var $MP4 = $(".MP4")
var $MP5 = $(".MP5")
var $MP5_MP6 = $(".MP5_MP6")
var $MP6 = $(".MP6")
var $MP7 = $(".MP7")  //переменная выделения области переговорной №7
var $MP8 = $(".MP8")
var $MP9 = $(".MP9")
var $MP10 = $(".MP10")
var $AllMeatingRoom = $(".MP")

// Рисуем переговорную №1
var c=document.getElementById("MP1");
 ctx=c.getContext('2d');
 ctx.strokeStyle = "#0f5d33";
 ctx.fillStyle = "rgba(15, 93, 51, 0.6)";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(298, 0);
ctx.lineTo(298, 205);
ctx.lineTo(0, 205);
ctx.lineTo(0, 0);
ctx.stroke();
ctx.clip();
ctx.fillRect(0, 0, 400, 300)

// Рисуем переговорную №2
var c=document.getElementById("MP2");
 ctx=c.getContext('2d');
 ctx.strokeStyle = "#0f5d33";
 ctx.fillStyle = "rgba(15, 93, 51, 0.6)";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(305, 0);
ctx.lineTo(305, 178);
ctx.lineTo(0, 178);
ctx.lineTo(0, 0);
ctx.stroke();
ctx.clip();
ctx.fillRect(0, 0, 400, 300)

/*
Создаём jQuery переменную, в которую кладём объект .plan
когда наводится мышка на объект .WP внутри .plan, то срабатывает действие
this = это как раз и есть наше кресло, но в виде строки. что бы с ним можно было работать как с объектом
то нужно обернуть его в переменную jQuery, то есть написать не this, а $(this) 
Дальше в объекте $(this) ищем класс .bubble, stop() - останавливает всю анимацию, которая была до этого. и делаем появление.
 */

function ShowBubble(evt)
{
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    var x = evt.clientX
    if (WIDTH-380 > x)
    {
        var bub = '.bubble'    
    }
    else
    {
     var bub = '.bubble_left'  
    }
    return bub
}


//*****************************************//
// Действия при наведении мышкой на объект //
//*****************************************//
//
/*
Наведение мышки на рабочее место
 */
var $plan = $('.plan')
$plan.on('mouseover', '.WP', function(event) 
{

    // searchfieldText = $searchfield.val().toLowerCase();
    // if (searchfieldText != '')
    // {
        // $(this).find(ShowBubble(event)).stop().fadeIn();
    // }
    //else
    // {
        // прописать логику проведения мышкой по баблу
        $(this).find(ShowBubble(event)).stop().fadeIn();
        $(this).addClass('highlighted_WP')
        console.log($(this).find('.bubble').visible())

    // }
})

/*
наведение мышки на переговорную 
 */
var $plan = $('.plan')
$plan.on('mouseover', '.MP', function(event) {
    searchfieldText = $searchfield.val().toLowerCase();
    if (searchfieldText != '')
    {
        $(this).find(ShowBubble(event)).stop().fadeIn();
    }
    else
    {
        $(this).find(ShowBubble(event)).stop().fadeIn();
        $(this).addClass('highlighted_MP')
    }
  })



/*
Действия при покидании мышки с объекта "рабочее место (WP)"
 */  
$plan.on('mouseleave', '.WP', function(event) {
    searchfieldText = $searchfield.val().toLowerCase();
    if (searchfieldText != '')
    {
        $(this).find('.bubble').stop().fadeOut();
        $(this).find('.bubble_left').stop().fadeOut();
        
    }
    else
    {
        $(this).find('.bubble').stop().fadeOut();
        $(this).find('.bubble_left').stop().fadeOut();
        $(this).removeClass('highlighted_WP')
    }
});

/*
Действия при покидания мышки с объекта с классом MP

$plan.on('mouseleave', '.MP', function(event) {
    searchSurNameText = $searchSurName.val().toLowerCase();
    if (searchSurNameText != '')
    {
        $(this).find('.bubble').stop().fadeOut();
        
    }
    else
    {
        $(this).find('.bubble').stop().fadeOut();
        $(this).removeClass('highlighted_MP')
    }
});
 */











//********************************//
// Получение данных из JSON файла //
//********************************//
$.getJSON('json/users.json', function(json, textStatus) {
        allUsers = json;
        console.log("getjson")
        // сделать иконку, что данные получены с сервера
        gen(allUsers);
});










//*************//
// Поля поиска //
//*************//

// Поиск по фамилии
$searchSurName.on('keyup', function(event) 
{
    SearchCount = 0;
    searchSurNameText = $searchSurName.val().toLowerCase();
    
    if (searchSurNameText != '')
    {
        for (var i in allUsers)
        {
            console.log(allUsers[i].surname.toLowerCase().substr(0, searchSurNameText.length))
            console.log(searchSurNameText)
            if (allUsers[i].surname.toLowerCase().substr(0, searchSurNameText.length) == searchSurNameText)
            {
                SearchCount = SearchCount + 1;
                var id = i;
                $('#WP'+allUsers[i].id).addClass('highlighted_WP');
                console.log(allUsers[i]);
                console.log(searchSurNameText);
            }
            else
            {
                $('#WP'+allUsers[i].id).removeClass('highlighted_WP')
            } 
        }
        // Подсвечиваем результат поиска, если он только 1.
        if (SearchCount == 1)
        {
            $('#WP'+allUsers[id].id).find('.bubble').stop().fadeIn();
        }
    }
    else
    {
        $('.WP').removeClass('highlighted_WP')
        $('.WP').find('.bubble').stop().fadeOut();
    }
});

// Поиск по имени
$searchName.on('keyup', function(event) 
{
    SearchCount = 0;
    searchNameText = $searchName.val().toLowerCase();
    
    if (searchNameText != '')
    {
        for (var i in allUsers)
        {
            console.log(allUsers[i].name.toLowerCase().substr(0, searchNameText.length))
            console.log(searchNameText)
            if (allUsers[i].name.toLowerCase().substr(0, searchNameText.length) == searchNameText)
            {
                SearchCount = SearchCount + 1;
                var id = i;
                $('#WP'+allUsers[i].id).addClass('highlighted_WP');
                console.log(allUsers[i]);
                console.log(searchNameText);
            }
            else
            {
                $('#WP'+allUsers[i].id).removeClass('highlighted_WP')
            } 
        }
        // Подсвечиваем результат поиска, если он только 1.
        if (SearchCount == 1)
        {

            $('#WP'+allUsers[id].id).find('.bubble').stop().fadeIn();
        }
    }
    else
    {
        $('.WP').removeClass('highlighted_WP')
        $('.WP').find('.bubble').stop().fadeOut();
    }
});


// Поиск по всем полям

$searchfield.on('keyup', function(event) 
{
    SearchCount = 0;
    searchfieldText = $searchfield.val().toLowerCase();


    if (searchfieldText != '')
    {
        for (var i in allUsers)
        {
            if ((allUsers[i].surname.toLowerCase().substr(0, searchfieldText.length) == searchfieldText)||(allUsers[i].tel.toLowerCase().substr(0, searchfieldText.length) == searchfieldText)||(allUsers[i].mail.toLowerCase().substr(0, searchfieldText.length) == searchfieldText)||(allUsers[i].name.toLowerCase().substr(0, searchfieldText.length) == searchfieldText)||(allUsers[i].id.toLowerCase().substr(0, searchfieldText.length) == searchfieldText)||((allUsers[i].surname.toLowerCase()+' '+allUsers[i].name.toLowerCase()).substr(0, searchfieldText.length) == searchfieldText)||((allUsers[i].name.toLowerCase()+' '+allUsers[i].surname.toLowerCase()).substr(0, searchfieldText.length) == searchfieldText))
            {
                SearchCount = SearchCount + 1;
                var id = i;
                $('#WP'+allUsers[i].id).addClass('highlighted_WP');
            }
            else
            {
                $('#WP'+allUsers[i].id).removeClass('highlighted_WP')
            } 
        }
        // Подсвечиваем результат поиска, если он только 1.
        if (SearchCount == 1)
        {
            $('#WP'+allUsers[id].id).find(ShowBubble(event)).stop().fadeIn();
            console.log(SearchCount)
        }
        else
        {
            console.log(SearchCount)
            $('.WP').find('.bubble').stop().fadeOut();
            $('.WP').find('.bubble_left').stop().fadeOut();

        }
    }
    else
    {
        $('.WP').removeClass('highlighted_WP')
        $('.WP').find('.bubble_left').stop().fadeOut();
    }
});







//****************************************************************//
// Действия на изменения состояния checkbox в меню "Переговорные" //
//****************************************************************//

//Подсвечиваем переговорную 1
$chk_mp1.on('change', function(event)
{
    if (this.checked)
    {
        $MP1.addClass('highlighted_MP')
    }
    else
    {
        $MP1.removeClass('highlighted_MP')
    }
});
//Подсвечиваем переговорную 2
$chk_mp2.on('change', function(event)
{
    if (this.checked)
    {
        $MP2.addClass('highlighted_MP')
    }
    else
    {
        $MP2.removeClass('highlighted_MP')
    }
});
//Подсвечиваем переговорную 3
$chk_mp3.on('change', function(event)
{
    if (this.checked)
    {
        $MP3.addClass('highlighted_MP')
    }
    else
    {
        $MP3.removeClass('highlighted_MP')
    }
});
//Подсвечиваем переговорную 4
$chk_mp4.on('change', function(event)
{
    if (this.checked)
    {
        $MP4.addClass('highlighted_MP')
    }
    else
    {
        $MP4.removeClass('highlighted_MP')
    }
});
//Подсвечиваем переговорную 5
$chk_mp5.on('change', function(event)
{
    if (this.checked)
    {
        $MP5.addClass('highlighted_MP')
    }
    else
    {
        $MP5.removeClass('highlighted_MP')
    }
});
//Подсвечиваем переговорную 5+6
// $chk_mp75_MP6.on('change', function(event)
// {
//     if (this.checked)
//     {
//         $MP5_MP6.addClass('highlighted_MP5_MP6')
//         console.log("checked5+6")
//     }
//     else
//     {
//         $MP5_MP6.removeClass('highlighted_MP5_MP6')
//         console.log("unchecked5+6")
//     }
// });
//Подсвечиваем переговорную 6
$chk_mp6.on('change', function(event)
{
    if (this.checked)
    {
        $MP6.addClass('highlighted_MP')
    }
    else
    {
        $MP6.removeClass('highlighted_MP')
    }
});
//Подсвечиваем переговорную 7
$chk_mp7.on('change', function(event)
{
    if (this.checked)
    {
        $MP7.addClass('highlighted_MP')
    }
    else
    {
        $MP7.removeClass('highlighted_MP')
    }
});

$chk_mp7.on('change', function(event)
{
    if (this.checked)
    {
        $MP7.addClass('highlighted_MP')
    }
    else
    {
        $MP7.removeClass('highlighted_MP')
    }
});

//Подсвечиваем переговорную 8
$chk_mp8.on('change', function(event)
{
    if (this.checked)
    {
        $MP8.addClass('highlighted_MP')
    }
    else
    {
        $MP8.removeClass('highlighted_MP')
    }
});

//Подсвечиваем переговорную 9
$chk_mp9.on('change', function(event)
{
    if (this.checked)
    {
        $MP9.addClass('highlighted_MP')
    }
    else
    {
        $MP9.removeClass('highlighted_MP')
    }
});

//Подсвечиваем переговорную 10
$chk_mp10.on('change', function(event)
{
    if (this.checked)
    {
        $MP10.addClass('highlighted_MP')
    }
    else
    {
        $MP10.removeClass('highlighted_MP')
    }
});








//*************************//
// Выделение департаментов //
//*************************//

// Выделяем все места Административная дирекция
$chk_Administrative_Directorate.on('change', function(event)
{
    if (this.checked)
    {
        $('.Administrative_Directorate').addClass('highlighted_WP')
    }
    else
    {
        $('.Administrative_Directorate').removeClass('highlighted_WP')
    }
});

// Выделяем все места Департамент по информационным технологиям
$chk_Department_of_Information_Technology.on('change', function(event)
{
    if (this.checked)
    {
        $('.Department_of_Information_Technology').addClass('highlighted_WP')
    }
    else
    {
        $('.Department_of_Information_Technology').removeClass('highlighted_WP')
    }
});

// Выделяем все места Департамент по связям с общественностью
$chk_Department_of_Public_Relations.on('change', function(event)
{
    if (this.checked)
    {
        $('.Department_of_Public_Relations').addClass('highlighted_WP')
    }
    else
    {
        $('.Department_of_Public_Relations').removeClass('highlighted_WP')
    }
});

// Выделяем все места Дирекция по работе с персоналом
$chk_Directorate_of_Human_Resources.on('change', function(event)
{
    if (this.checked)
    {
        $('.Directorate_of_Human_Resources').addClass('highlighted_WP')
    }
    else
    {
        $('.Directorate_of_Human_Resources').removeClass('highlighted_WP')
    }
});

// Выделяем все места Дирекция по развитию бизнеса
$chk_Directorate_of_Business_Development.on('change', function(event)
{
    if (this.checked)
    {
        $('.Directorate_of_Business_Development').addClass('highlighted_WP')
    }
    else
    {
        $('.Directorate_of_Business_Development').removeClass('highlighted_WP')
    }
});

// Выделяем все места Коммерческая дирекция
$chk_Commercial_Directorate.on('change', function(event)
{
    if (this.checked)
    {
        $('.Commercial_Directorate').addClass('highlighted_WP')
    }
    else
    {
        $('.Commercial_Directorate').removeClass('highlighted_WP')
    }
});

// Выделяем все места Контрольно-ревизионное управление
$chk_KRU.on('change', function(event)
{
    if (this.checked)
    {
        $('.KRU').addClass('highlighted_WP')
    }
    else
    {
        $('.KRU').removeClass('highlighted_WP')
    }
});

// Выделяем все места Проектный офис
$chk_Project_Office.on('change', function(event)
{
    if (this.checked)
    {
        $('.Project_Office').addClass('highlighted_WP')
    }
    else
    {
        $('.Project_Office').removeClass('highlighted_WP')
    }
});

// Выделяем все места Производственная дирекция
$chk_Production_Directorate.on('change', function(event)
{
    if (this.checked)
    {
        $('.Production_Directorate').addClass('highlighted_WP')
    }
    else
    {
        $('.Production_Directorate').removeClass('highlighted_WP')
    }
});

// Выделяем все места Финансовая дирекция
$chk_Financial_Management.on('change', function(event)
{
    if (this.checked)
    {
        $('.Financial_Management').addClass('highlighted_WP')
    }
    else
    {
        $('.Financial_Management').removeClass('highlighted_WP')
    }
});

// Выделяем все места Юридическая дирекция
$chk_Law_Directorate.on('change', function(event)
{
    if (this.checked)
    {
        $('.Law_Directorate').addClass('highlighted_WP')
    }
    else
    {
        $('.Law_Directorate').removeClass('highlighted_WP')
    }
});


//***************************************************//
// Генерим html код для рабочих мест пользователей   //
// Знак \ позволяет переносить код на новую строчку  //
//***************************************************//

function gen(allUsers) 
{
    console.log("Начали генерацию")
    for (var i in allUsers)
    {
        console.log("элемент")
        $plan.append('\
            <div class="WP '+allUsers[i].Podrazdelenie+" "+allUsers[i].Company+'" id="WP'+allUsers[i].id+'" data-id="WP'+allUsers[i].id+'">\
                        <div class="bubble">'+'<div class="Bubble_office-position_text">рабочее место</div><div class="Bubble_office-position">'+allUsers[i].id+'</div>'
                        +'<div class="Bubble_Name">'+allUsers[i].name+' '+allUsers[i].surname+'</div>'
                        +'<div class="bubble_job">'+allUsers[i].Job+'</div>'
                        +'<div class="bubble_department">'+allUsers[i].department+'</div>'
                        +'<div class="bubble_teltehone">'+allUsers[i].tel+'</div>'
                        +'<div class="bubble_email"><a href="mailto:'+allUsers[i].mail+'">'+allUsers[i].mail+'</a></div>\
                        </div>\
                        <div class="bubble_left">'+'<div class="Bubble_office-position_text">рабочее место</div><div class="Bubble_office-position">'+allUsers[i].id+'</div>'
                        +'<div class="Bubble_Name">'+allUsers[i].name+' '+allUsers[i].surname+'</div>'
                        +'<div class="bubble_job">'+allUsers[i].Job+'</div>'
                        +'<div class="bubble_department">'+allUsers[i].department+'</div>'
                        +'<div class="bubble_teltehone">'+allUsers[i].tel+'</div>'
                        +'<div class="bubble_email"><a href="mailto:'+allUsers[i].mail+'">'+allUsers[i].mail+'</a></div>\
                        </div>\
                    </div>')
        
    }
}
$('#search-form').submit(function() {return false;})






//***************//
// Работа с меню //
//***************//
//
$(function() {
    $(".mini-menu > ul > li > a").click(function() {
        var ul = $(this).next(),
                clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
                height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
        clone.remove();
        ul.animate({"height":height});
        return false;
    });
});






