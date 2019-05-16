<template>
    <div class="wrapper">
        

				<div class="next">
            <section>
							Next Project: <span class="next_project"> <router-link :to="`/${next_item.url}`">{{next_item.title}}</router-link></span>
						</section>	
        </div>
    </div>
    </div>
</template>

<style scoped>
   @import '../assets/styles/project_style.css';
</style>

<script>
export default{
  name: 'bixby1',
  data () {
    return {
      currentUrl: 'bixby1'
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