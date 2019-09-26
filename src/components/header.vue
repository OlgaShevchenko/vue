<template>
	<header class="header">
	<div class="wrapper">
		<nav>
			<div class="menu-icon" v-on:click="showmenu"></div>
			<div class="logo">
				<a></a>
			</div>
			<ul class="nav-list">
				<li class="nav-item active">
					<a href="">Главная</a>
				</li>
				<li class="nav-item">
					<a href="">Магазин</a>
				</li>
				<li class="nav-item">
					<a href="">Преимущества</a>
				</li>
				<li class="nav-item">
					<a href="">Контакты</a>
				</li>
				<li class="nav-item">
					<a href="">FAQ</a>
				</li>
				<li class="nav-item">
					<a href="">Доставка и оплата</a>
				</li>
			</ul>
			<a class="basket-link" href="">
                <img src="src/assets/img/cart.svg" class="basket-link__desctop" alt="" />
				<img src="src/assets/img/cart-mob.svg" class="basket-link__mobile" alt=""/>                           
                <span class="nav-item__num">4</span>
            </a>
		</nav>
	</div>
</header>
</template>
<script>
	export default {	
		data: function () {				
		  return {
			count: 0
		  }
		},
		methods: {
			showmenu: function () {					
				var nav = document.querySelector('.nav-list');
				nav.classList.toggle('visible');
				var icon = document.querySelector('.menu-icon');
				icon.classList.toggle('visible');
			}				
		}	
	}
</script>


