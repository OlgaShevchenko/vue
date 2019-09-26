<template>
	<div class="step step3 hidden">
		<div class="progress-block">
			<div class="progress-block__item current">ВАШИ ДАННЫЕ</div>
			<div class="progress-block__item current">ДОСТАВКА</div>
			<div class="progress-block__item current">ОПЛАТА</div>
		</div>					
		<div class="step-container__header step-container__header3">ОПЛАТА</div>
		<div class="cart-block">
			<div class="cart cart-front">
				<div class="cart-front__cards">
					<div><img src="src/assets/img/mir2.svg" alt=""/></div>
					<div><img src="src/assets/img/master2.svg" alt=""/></div>
					<div><img src="src/assets/img/visa2.svg" alt=""/></div>
					<div><img src="src/assets/img/google.svg" alt=""/></div>
					<div><img src="src/assets/img/apple.svg" alt=""/></div>
				</div>
				<div class="num-input"><input type="text" v-model="cartname" class="cart-input" placeholder="Номер карты" /></div>	
				<div class="date-input">
					<input type="text" v-model="month" class="cart-input" placeholder="MM"  />
					<input type="text" v-model="year" class="cart-input" placeholder="ГГ" />
				</div>
			</div>
			<div class="cart cart-back">														
				<div class="cvc-input">
					<div class="cvc-input__block"><input type="text" v-model="cvc" class="cart-input" placeholder="CVC"  /></div>
					<div class="cvc-input__text">Три цифры с оборотной стороны карты</div>		
				</div>
			</div>
		</div>
		<div v-on:click="back" class="back-button"><img src="src/assets/img/arrow.svg" alt=""/></div>	
		<button class="step-container__button button3" v-on:click="check3">оплатить</button>	
	</div>
</template>
<script>
	export default {
	props: ['cartname', 'month', 'year', 'cvc' ],
	data: function () {
	return {
		count: 0
	  }
	},
	methods: {
		check3: function () {				
			document.querySelector('.page_content').classList.add('hidden');
			document.querySelector('.res-block').classList.add('visible');
			document.querySelector('body').classList.add('green');
			}				
		},
		back: function () {
			document.querySelector('.step3').classList.add('hidden');				
			document.querySelector('.step2').classList.remove('hidden');					
		},
	}
</script>


