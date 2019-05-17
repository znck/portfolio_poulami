<template>
  <div>
    <div class="intro">
      <div class="description">
        <section class="intro_title">
          <h1>Visualizing Social Interactions at an Art Festival</h1>
          <h1 class="soft">Central Pennsylvania Arts Fest App</h1>
        </section>
        <section class="intro_text">
          <p>
            There is, at present, a widespread adoption of social media and
            smartphones for interacting with trending events as well as sharing
            and connecting with friends. This produces a wealth of social media
            content. These data and technology opens up opportunities to enhance
            community life.
          </p>
          <p>
            This project was an attempt to use this data from users to
            understand user behavior to enhance social interactions.
          </p>
        </section>
      </div>
      <img class="intro_visual" src="../assets/cpaf/banner_img.jpg" />
    </div>

    <div class="project_body">
      <section>
        <p>
          There is, at present, a widespread adoption of social media and
          smartphones for interacting with trending events as well as sharing
          and connecting with friends. This produces a wealth of social media
          content. These data and technology opens up opportunities to enhance
          community life.
        </p>
        <p>
          This project was an attempt to use this data from users to understand
          user behavior to enhance social interactions.
        </p>
        <p>
          <span class="bold">Project Mentors:</span>
          <br />Dr. John M. Carrol, Institute of Science and
          Technology,Pennsylvania State University <br />Prof. Jessica
          Kropczynski, Institute of Science and Technology, Pennsylvania State
          University
        </p>
        <p><span class="bold">Duration:</span>May 2015 - July 2015</p>
        <p>
          <span class="bold">Team:</span>Worked with a diverse team of
          researchers, interns, designers and developers
        </p>
        <p>
          <span class="bold">Role and contribution:</span> Research, Data
          Visualization
        </p>
      </section>
      <section>
        <h1>Project Overview</h1>
        <p>
          IST’s Center for Human-Computer Interaction has been working with the
          Central Pennsylvania Arts Festival for some time to develop a mobile
          application. Each year the application retains core features, such as
          a schedule and program of events, location data, and profiles of the
          visiting artists and performers, while experimenting with various
          social interactions.
        </p>
        <p>
          This year (2015), it was
          <a
            href="https://news.psu.edu/story/362339/2015/07/06/science-and-technology/new-version-arts-festival-app-enables-users-create"
            >redesigned</a
          >
          to allow users design their own experiences within the festival.
        </p>
        <p>
          The research objective was to study the use and impact of computing
          and communications infrastructures on community networks.
        </p>
        <img src="../assets/cpaf/app.jpg" />
      </section>
      <section>
        <h1>Features</h1>
        <p>
          Attendees of this year’s festival will have an opportunity to use the
          app as a platform to create their own activities and connect with
          other festival goers through a “meetup” format. The meetup gives
          attendees a chance to create a part of their experience and thus, be
          more involved and engaged with the festival & other festival-goers.
        </p>
        <p>
          People could post their own events such as games, cooking classes or
          yoga sessions, and others could join in.
        </p>
        <p>
          Another feature introduced to increase interactions is “Wave”. A wave
          is similar to a "poke" on Facebook and is intended as a way of getting
          someone’s attention or an easy way to start conversations.
        </p>
      </section>
      <section>
        <h1>Research: Notification Prompt</h1>
        <p>
          More features means more push notifications.Apart from the event
          notifications, the app would push survey questions from time-to-time
          to complete the study. As the questions were time &amp; location
          sensitive, the requirement was to maximize prompt response.
        </p>
        <p>
          Due to limitation of time, I chose review-based research as my
          methodology to find the best times & contexts to push the questioning,
          without it negatively affecting the user experience.
        </p>
        <img src="../assets/cpaf/impact_model.png" />
      </section>
      <section>
        <h1>Data Visualization: Social Networks</h1>
        <p>
          Once the festival was over, the data gathered through the app about
          the users (likes, waves, comments) could be analyzed to determine the
          success of the redesign.
        </p>
        <p>
          The aim of the analysis was to get an overview of the interactions,
          and then zoom into individual networks for further insights. With the
          that being the primary objective, I delved into understanding
          visualization social connections. Current visualizations of social
          media are mostly some sort of node-link diagram. Based on the type of
          data, it can be hierarchical or a network. Network characteristics
          (like degree, closeness, type, etc.) are depicted by varying color of
          nodes, and length and thickness of links.
        </p>
        <p>
          As these have been a proven effective visualization for such networks,
          I decided to go ahead with an organic node-link graph.
        </p>
        <p>
          The festival network is displayed as a node-link graph, with a center
          node representing the social network of a user being examined, and
          secondary nodes representing anyone primary user interacted with
          during the festival. Lines represent links (likes/comments and waves)
          between the primary user and others, while various line thickness is
          used to easily identify the degree of interaction between users.
        </p>
        <p>
          We also shared the visualizations with the users to them a further
          remember of their app archives and social networks.
        </p>
        <p>
          The users were presented with both their own (ego) network and the
          overall festival (whole) interactions. Users could access their own
          data through an website, where they could log in with their app
          credentials
        </p>
        <p>
          They were also given a few prompts to react to the visualizations,
          which could add to our insights in the network analysis, and
          characterize people's social practices in community events.
        </p>
        <img src="../assets/cpaf/website.jpg" />
      </section>
      <section>
        <h1>Key Learnings</h1>
        <ul>
          <li>
            Being involved in many aspects of the project exposed me to several
            HCI avenues: social computing, empirical evaluation, social behavior
            science, interaction space design, handling quantitative data
          </li>
          <li>
            The informal interactions with the users at the taught me to pick up
            insights from the casual comments
          </li>
          <li>
            Working with data taught me about handling data and how to analyze
            them. To create the visualization, I also taught myself the
            fundamentals of data visualization as well as d3.js
          </li>
          <li>
            Working with a diverse team of researchers, developers and fellow
            interns from other student exchange programs taught me how to
            collaborate
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
