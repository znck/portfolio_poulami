<template>
  <div id="container">
    <router-view />
    <footer>
      <p>@Poulami2019</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'container',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700');
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800|Merriweather:300,300i,400,700');

:root {
  --body-font: 'Merriweather', serif;
  --heading-font: 'Montserrat', sans-serif;
  --dark-color: #191919;
  --light-color: #f6f4f2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--body-font);
  line-height: 150%;
}
.intro {
  color: var(--light-color);
}

.body,
.project_body {
  color: var(--dark-color);
}

h1 {
  font-size: 150%;
  font-weight: 600;
  font-family: var(--heading-font);
}

h2 {
  font-size: 110%;
  font-weight: 500;
  font-family: var(--heading-font);
  margin-top: 2.5vh;
}

p,
li {
  font-weight: 300;
  margin-top: 2.5vh;
  line-height: 180%;
}

ul,
ol {
  list-style-position: outside;
  padding-left: 1.2em;
}

li {
  padding-left: 1.2em;
}

a {
  color: var(--dark-color);
  text-decoration-style: dotted;
}

.bold {
  font-weight: 700;
}

.italics {
  font-style: italic;
}

.soft {
  opacity: 0.6;
}

section {
  width: 80%;
  margin: auto;
  margin-top: 10vh;
}

.description {
  background-color: var(--dark-color);
  padding: 6vh 0 8vh 0;
}

footer {
  font-size: 60%;
  text-align: center;
  padding: 0.5%;
  background-color: var(--dark-color);
  color: var(--light-color);
}

footer > p {
  margin-top: 0;
}

.loading{
  height: 98vh;
  background-color: var(--light-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading>form{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
 }
input, input:focus {
  background-color: transparent;
  border-radius: 0;
  border: none;
  border: 1px solid var(--dark-color);
  padding: 0.5% 0.5%;
  opacity: 0.6;
  width: 80%;
  font-size: 100%;
}
input:focus{
  outline: none;
}
button{
  border: none;
  background-color: var(--dark-color);
  color: var(--light-color);
  padding: 1% 3%;
  margin-left: 0.5%;
  width: 18%;
}
@media only screen and (min-width: 768px) {
  section {
    width: 72%;
  }
}
</style>
