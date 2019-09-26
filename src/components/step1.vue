<template>
	<div class="step step1">
		<div class="progress-block">
			<div class="progress-block__item current">ВАШИ ДАННЫЕ</div>
			<div class="progress-block__item">ДОСТАВКА</div>
			<div class="progress-block__item">ОПЛАТА</div>
		</div>					
		<div class="step-container__header step-container__header1">ВАШИ ДАННЫЕ</div>
		<div class="step-container__input-block">
			<div class="step-container__label"><label>Ф.И.О.*</label></div>
			<div class="step-container__error">Поле не заполнено.</div>
			<input class="step-container__input name" type="text" v-model="name" placeholder="Андреев Андрей Андреевич " />
		</div>
		<div class="step-container__input-block">
			<div class="step-container__label"><label>Телефон*</label></div>
			<div class="step-container__error">Поле не заполнено.</div>
			<input class="step-container__input phone" type="text" v-model="phone" placeholder="89527778889" />
		</div>
		<div class="step-container__input-block">
			<div class="step-container__label"><label>Email*</label></div>
			<div class="step-container__error">Поле не заполнено.</div>
			<input class="step-container__input email" v-model="email" type="text" placeholder="efege@gmail.com" />
		</div>
		<div v-on:click="back" class="back-button"><img src="src/assets/img/arrow.svg" alt=""/></div>
		<button class="step-container__button button1" v-on:click="check1">далее</button>
	</div>
</template>
<script>
	export default {
	 props: ['name', 'phone', 'email'],
		data: function () {		
		
  return {
    count: 0
  }
},

		methods: {
		
		check1: function () {
		
			var nameError = true;
			var phoneError = true;
			var mailError = true;			
			if (!this.name) {
				document.querySelector('.name').closest('.step-container__input-block').classList.add('error');
				 nameError = true;					
			} else {
				if (!this.validName(this.name)) {
					document.querySelector('.name').closest('.step-container__input-block').classList.add('error');
					 nameError = true;	
				} else {
					document.querySelector('.name').closest('.step-container__input-block').classList.remove('error');
					 nameError = false;						  
				}
			}			
			if (!this.phone) {
				document.querySelector('.phone').closest('.step-container__input-block').classList.add('error');
				 phoneError = true;
			} else {
				if (!this.validPhone(this.phone)) {
					document.querySelector('.phone').closest('.step-container__input-block').classList.add('error');
					 phoneError = true;
				} else {
					document.querySelector('.phone').closest('.step-container__input-block').classList.remove('error');
					 phoneError = false;
				}
			}
			if (!this.email) {				
				document.querySelector('.email').closest('.step-container__input-block').classList.add('error');
				mailError = true;
				
			} else {
				if (!this.validEmail(this.email)) {
					document.querySelector('.email').closest('.step-container__input-block').classList.add('error');
					mailError = true;
				} else {
					document.querySelector('.email').closest('.step-container__input-block').classList.remove('error');
					mailError = false;
				}
			}
			if ( !nameError && !phoneError && !mailError) {							
				document.querySelector('.step1').classList.add('hidden');				
				document.querySelector('.step2').classList.remove('hidden');				
			}
			
			},
			back: function () {
				history.back();				
			},
			validEmail:function(email) {
			  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
			return re.test(email);
			},
			validName:function(name) {
				var re =  /^[а-яё -]+$/i;
				return re.test(name);
			},
			validPhone:function(phone) {
				var re =  /(8|\+7)910[0-9]{7}/ ;
				return re.test(phone);
			}
			
		}	
				
	}
</script>


