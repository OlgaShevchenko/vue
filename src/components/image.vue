<template>
	<div class="image-block">
		<div class="image-block__img-container">
			<img src="src/assets/img/product.png" alt=""/>
			<div class="image-block__label">
				<span>ВЫГОДА</span>
				ДО 30%
			</div>
		</div>
		<div class="image-block__text-container">
			<div class="image-block__header">IMBA ORIGINAL ПОДПИСКА</div>
			<div class="image-block__info">
				<div class="image-block__info-item">
					 Подписка: 
					 <span>1 МЕСЯЦ </span>
				</div>
				<div class="image-block__info-item">
					Дата подписки: 
					<span>10.09.2019</span>
				</div>
				<div class="image-block__info-item">
					Дата списания: 
					<span>10.10.2019</span>
				</div>
			</div>
			<div class="image-block__summa">Итог: <span>1350р</span></div>
		</div>
		<div class="show-more" v-on:click="showpane">Данные заказа </div>
	</div>	
</template>
<script>
	export default {
		data: function () {		
		  return {
			count: 0
		  }
		},
		methods: {
			showpane: function () {					
				var imgblock = document.querySelector('.image-block');
				imgblock.classList.toggle('visible');
				var paneimg = document.querySelector('.show-more');
				paneimg.classList.toggle('visible');
			}
				
		}
	}	
</script>


