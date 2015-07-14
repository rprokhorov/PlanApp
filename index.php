<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>PlanApp</title>
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<h1><img src="img/bgr_005.gif" alt=""></h1>

<div class="AllContent">
	<div class="plan">
		<!--
		Код будет генериться из JS
		 -->
		<canvas class="MP MP1" id="MP1" data-id="MP1"></canvas>
 		<canvas class="MP MP2" id="MP2" data-id="MP2"></canvas>
        <canvas class="MP MP3" id="MP3" data-id="MP3"></canvas>
        <canvas class="MP MP4" id="MP4" data-id="MP4"></canvas>
        <canvas class="MP MP5" id="MP5" data-id="MP5"></canvas>
        <canvas class="MP MP5_MP6" id="MP5_MP6" data-id="MP5_MP6"></canvas>
        <canvas class="MP MP6" id="MP6" data-id="MP6"></canvas>
        <canvas class="MP MP7" id="MP7" data-id="MP7"></canvas>
        <canvas class="MP MP8" id="MP8" data-id="MP8"></canvas>
        <canvas class="MP MP9" id="MP9" data-id="MP9"></canvas>
        <canvas class="MP MP10" id="MP10" data-id="MP10"></canvas>
 		<div class="D D_IT" id="D_IT" data-id="D_IT"></div>
        <!-- <canvas id="Canvas_MP1" class="Canvas_MP1"></canvas>
        <canvas id="Canvas_MP3" class="Canvas_MP3"></canvas>
        <canvas id="Canvas_MP4" class="Canvas_MP4"></canvas>
        <canvas id="Canvas_MP5" class="Canvas_MP5"></canvas>
        <canvas id="Canvas_MP5_MP6" class="Canvas_MP5_MP6"></canvas>
        <canvas id="Canvas_MP6" class="Canvas_MP6"></canvas>
        <canvas id="Canvas_MP7" class="Canvas_MP7"></canvas>
        <canvas id="Canvas_MP8" class="Canvas_MP8"></canvas>
        <canvas id="Canvas_MP9" class="Canvas_MP9"></canvas>
        <canvas id="Canvas_MP10" class="Canvas_MP10"></canvas> -->
  	</div>
  	<!-- Меню поиска -->
  	<div class="mini-menu">
   <ul>
      <li><a href="#">Поиск сотрудника</a>
	<ul>
	   <li><input type="text" name="searchfield_all" placeholder="Поиск по всем полям" class="searchfield All"></li>
	   <!-- <li><input type="text" name="searchfield_SurName" placeholder="Поиск по фамилии" class="searchfield search_SurName"></li> -->
  </ul>
       </li>
       <li>
       <a href="#">Подразделения</a>
   <ul>
	   <li><input type="checkbox" class="chk_Department_of_Information_Technology" id="chk_Department_of_Information_Technology"><span>Департамент по информационным технологиям</span></li>
	   <li><input type="checkbox" class="chk_Financial_Management" id="chk_Financial_Management"><span>Финансовая дирекция</span></li>
	   <!-- </form> -->
	</ul>	 
    </li>
     <li>
	<a href="#">Переговорные</a>
	<ul>
       <li><input type="checkbox" class="chk_mp1" id="chk_mp1"><span>Переговорная №1</span></li>
	     <li><input type="checkbox" class="chk_mp2" id="chk_mp2"><span>Переговорная №2</span></li>
	</ul>
     </li>
    </ul>
  </div>
</div>
	<script src="js/jquery.js"></script>
	<script src="js/main.js"></script>
 
</div>
</body>
</html>