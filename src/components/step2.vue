<template>
	<div class="step step2 hidden">
		<div class="progress-block">
			<div class="progress-block__item current">ВАШИ ДАННЫЕ</div>
			<div class="progress-block__item current">ДОСТАВКА</div>
			<div class="progress-block__item">ОПЛАТА</div>
		</div>					
		<div class="step-container__header step-container__header2">АДРЕС И ДОСТАВКА</div>
		<div class="step-container__input-container step-container__input-container2">
			<div class="step-container__input-block">
				<div class="step-container__label"><label>Город*</label></div>
				<div class="step-container__error">Поле не заполнено.</div>
				<input class="step-container__input city" v-model="city" type="text" placeholder="Москва" />
			</div>
			<div class="step-container__input-block">
				<div class="step-container__label"><label >Улица*</label></div>
				<div class="step-container__error">Поле не заполнено.</div>
				<input class="step-container__input street" v-model="street" type="text" placeholder="Ленина" />
			</div>							
		</div>
		<div class="step-container__input-container">
			<div class="step-container__input-block">
				<div class="step-container__label"><label>Дом* </label></div>
				<div class="step-container__error">Поле не заполнено.</div>
				<input class="step-container__input house" v-model="house" type="text" placeholder="1" />
			</div>
			<div class="step-container__input-block">
				<div class="step-container__label"><label>Корпус</label></div>								
				<input class="step-container__input corpus"  v-model="corpus" type="text" placeholder="B" />
			</div>
			<div class="step-container__input-block">
				<div class="step-container__label"><label>Квартира*</label></div>
				<div class="step-container__error">Поле не заполнено.</div>
				<input class="step-container__input apartment" v-model="apartment" type="text" placeholder="345" />
			</div>
		</div>
		<div class="step-container__delivery-block">
			<div class="step-container__delivery-header">Способ доставки*</div>
			<div class="step-container__radio">
				<input class="radio" id="payment-method1" name="payment-method" type="radio" value="0" checked> 
				<label for="payment-method1">Курьером Boxberry (только онлайн оплата)</label>
				<div class="step-container__radio-info">
					Доставка курьером Boxberry от 2 до 4 дней
				</div>
				<div class="step-container__delivery-price">+ 300 ₽</div>
			</div>
			<div class="step-container__radio">
				<input class="radio" id="payment-method2" name="payment-method" type="radio" value="1"> 
				<label for="payment-method2"><span>Онлайн</span></label>
				<div class="step-container__radio-info">
					На пункте выдачи Boxberry от 2 до 4 дней
				</div>
				<div class="step-container__pvz">Выбрать ПВЗ на карте </div>
				<div class="step-container__delivery-price">+ 0 ₽</div>
			</div>
		</div>		
`		<div v-on:click="back" class="back-button"><img src="src/assets/img/arrow.svg" alt=""/></div>	
		<button class="step-container__button button2" v-on:click="check2">далее</button>
	</div>
</template>
<script>
	export default {
	props: ['city', 'street', 'house', 'corpus', 'apartment' ],
		data: function () {
  return {
    count: 0
  }
},
 
		methods: {
		check2: function () {
			var cityError = true;
			var streetError = true;
			var houseError = true;
			var apartmentError = true;
			if(!this.city) {
				document.querySelector('.city').closest('.step-container__input-block').classList.add('error');
				 cityError = true;
			  } 
			  else {
			  if(!this.validText(this.city)) {
				document.querySelector('.city').closest('.step-container__input-block').classList.add('error');	
				 cityError = true;
			  }
			  else {
				document.querySelector('.city').closest('.step-container__input-block').classList.remove('error');
				 cityError = false;
			  }
			  }
			  if(!this.street) {				
				document.querySelector('.street').closest('.step-container__input-block').classList.add('error');	
				streetError = true;
			  } 
			  else {
			  if(!this.validText(this.street)) {
				document.querySelector('.street').closest('.step-container__input-block').classList.add('error');
				streetError = true;
			  }
			  else {
				document.querySelector('.street').closest('.step-container__input-block').classList.remove('error');;
				streetError = false;
			  }
			  }
			  
			   if(!this.house) {
				document.querySelector('.house').closest('.step-container__input-block').classList.add('error');	
				houseError = true;
			  } 
			  else {
			  if(!this.validNum(this.house)) {
				document.querySelector('.house').closest('.step-container__input-block').classList.add('error');
				houseError = true;
			  }
			  else {
				document.querySelector('.house').closest('.step-container__input-block').classList.remove('error');
				houseError = false;
			  }
			  }
			  
			   if(!this.apartment) {
				document.querySelector('.apartment').closest('.step-container__input-block').classList.add('error');
				apartmentError = true;
			  } 
			  else {
			  if(!this.validNum(this.apartment)) {
				document.querySelector('.apartment').closest('.step-container__input-block').classList.add('error');  
				apartmentError = true;
			  }
			  else {
				document.querySelector('.apartment').closest('.step-container__input-block').classList.remove('error');
				apartmentError = false;
			  }
			  }
			if (!cityError && !streetError && !houseError && !apartmentError) {			
				document.querySelector('.step2').classList.add('hidden');				
				document.querySelector('.step3').classList.remove('hidden');
			} 
			},			
			validText:function(txt) {
				var re =  /^[а-яё -]+$/i;
				return re.test(txt);
			},
			validNum:function(nm) {
				var re = /^\d+$/;
				return re.test(nm);
			},
			back: function () {
				document.querySelector('.step2').classList.add('hidden');				
				document.querySelector('.step1').classList.remove('hidden');			
			},
			
		}	
				
	}
</script>


