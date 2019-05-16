<template>
    <div class="wrapper">
        
        <b2></b2>

				<div class="next">
            <section>
							Next Project: <span class="next_project"> <router-link :to="`/${next_item.url}`">{{next_item.title}}</router-link></span>
						</section>	
        </div>
    
    </div>
</template>

<style scoped>
   @import '../assets/styles/project_style.css';
</style>

<script>
import b2 from './encrypted/b2'
export default{
  name: 'bixby2',
  components: {
    b2
  },
  data () {
    return {
      currentUrl: 'bixby2'
    }
  },
  computed: {
    next_item: function () {
      let  current = this.currentUrl
      var current_index = this.$projects.findIndex(function (project) {
        return project.url === current
      })
      if(current_index!=this.$projects.length-1){
        return this.$projects[current_index+1]
      }
      
    }
  }
}
</script>