<template>
<div  class="page_content">
	<div class="wrapper">
		<div class="step-container">
			<div class="content-block">
				<step1></step1>
				<step2></step2>
				<step3></step3>
			</div>					
			<info></info>
		</div>
	</div>
</div>	
</template>
<script>	
	import st1 from './step1.vue'
	import st2 from './step2.vue'
	import st3 from './step3.vue'
	import img from './image.vue'
	export default {	
		data: function () {
	  return {
		count: 0
	  }
	},	
	components: {
		'step1': st1,
		'step2': st2,
		'step3': st3,
		'info': img
	}		  
	}	  
</script>



