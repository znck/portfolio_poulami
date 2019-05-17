<template>
  <div id="wrapper">
    <div class="intro">
      <div class="description">
        <section class="intro_title">
          <h1>Poulami Chakraborty</h1>
        </section>
        <section class="intro_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Currently working as a <span class="bold">{{ jobTitle }}</span> at
            <a
              href="https://www.samsung.com/in/aboutsamsung/home/"
              class="linking"
              target="_blank"
            >
              {{ company }}</a
            >. I got initiated into design and earned my Bachelor's degree in
            Design at
            <a
              href="https://www.iitg.ac.in/design/"
              class="linking"
              target="_blank"
              >Indian Institute of Technology, Guwahati.</a
            >
          </p>
          <br />
          <p class="links">
            <a href="mailto:poulamichakraborty11@gmail.com">E-mail</a>&#8226;
            <a href="https://www.linkedin.com/in/poulamichakraborty/"
              >LinkedIn</a
            >.
          </p>
        </section>
      </div>
    </div>

    <div class="body">
      <section id="projects">
        <article v-for="project in projects" :key="project.title">
          <a
            v-bind:href="project.url"
            v-on:click.stop.prevent="goToProject(project.url)"
          >
            <img :src="project.image" />
            <div class="project_description">
              <h2>{{ project.title }}</h2>
              <p class="secondary">{{ project.subtitle }}</p>
            </div>
          </a>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      jobTitle: 'Voice UX Designer',
      company: 'Samsung Research Institute, Bengaluru',
      projects: [
        {
          title: 'Creating a Voice Assistant platform',
          subtitle: 'Bixby 2.0, Samsung',
          image: require('../assets/thumbnails/bixby2.jpeg'),
          url: 'bixby2',
          locked: true,
        },
        {
          title: 'Voice Interaction Modality',
          subtitle: 'Bixby Voice, Samsung',
          image: require('../assets/thumbnails/bixby1.jpg'),
          url: 'bixby1',
          locked: true,
        },
        {
          title: 'Digital Modelling of Health Information',
          subtitle: 'A user-centered design of Electronic Health Record',
          image: require('../assets/thumbnails/ehr.jpg'),
          url: 'ehr',
          locked: false,
        },
        {
          title: 'Visualizing Social Interactions at an Art Festival',
          subtitle: 'Central Pennsylvania Arts Fest App',
          image: require('../assets/thumbnails/cpaf.jpg'),
          url: 'cpaf',
          locked: false,
        },
        {
          title: 'Tangible Learning Toolkit for Children with IDs',
          subtitle: 'Tangify, Academic Project',
          image: require('../assets/thumbnails/tangify.png'),
          url: 'tangify',
          locked: false,
        },
      ],
    }
  },
  methods: {
    goToProject(purl) {
      this.$router.push({ name: purl, params: { PId: purl } })
      //console.log(purl)
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 250%;
}
@import '../assets/styles/style.css';
</style>
