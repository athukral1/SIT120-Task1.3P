<template>
  <div class="projects">
    <h2>My Projects</h2>
    <transition-group name="fade" tag="div">
      <div class="project" v-for="project in projects" :key="project.id">
        <div class="project-header" @click="toggleDetails(project.id)">
          <h3>{{ project.title }}</h3>
          <span class="expand-icon" v-if="!project.showDetails">▼</span>
          <span class="expand-icon" v-else>▲</span>
        </div>
        <transition name="slide-fade" mode="out-in">
          <div v-if="project.showDetails" class="project-details">
            <p><strong>Overview:</strong> {{ project.description }}</p>
            <div class="key-learning">
              <h4>Key Learning Objectives:</h4>
              <ul>
                <li v-for="(objective, index) in project.objectives" :key="index">{{ objective }}</li>
              </ul>
            </div>
            <div class="project-highlights">
              <h4>Project Highlights:</h4>
              <p>{{ project.highlights }}</p>
            </div>
            <div class="skills-gained">
              <h4>Skills Gained:</h4>
              <ul>
                <li v-for="(skill, index) in project.skills" :key="index">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        // Project 1
        {
          id: 1,
          title: 'SIT102 Introduction to Programming',
          description: 'Game Project\n\nThis endeavor involves expanding an existing game framework by incorporating dynamic arrays and advanced data structures for the management of multiple power-ups. The primary objective is to craft an engaging and interactive program that necessitates a blend of problem-solving, critical thinking, and programming prowess.',
          showDetails: false,
          objectives: [
            'Modular Game Framework: Devised and executed a pliable game framework with a pronounced emphasis on modular design and structured architecture.',
            'Dynamic Array Administration: Employed the C++ vector class adeptly to handle dynamic arrays, enhancing program adaptability and efficiency.',
            'Power-Up Data Organization: Established resilient data structures for proficiently overseeing a variety of power-ups, ensuring seamless scalability and methodical processing.',
            'Incorporation of Intricate Functionalities: Demonstrated advanced programming expertise by seamlessly integrating intricate functionalities within the game framework.',
            'Exemplary Problem-Solving Prowess: Applied astute problem-solving skills to surmount challenges encountered during the implementation phase, highlighting adaptability and resourcefulness.',
            'Methodical Program Development: Successfully engineered a meticulously organized and structured program, reflecting a profound comprehension of programming principles and best practices.'
          ],
          highlights: 'Noteworthy Milestones:\n\n- Modular Game Framework\n- Dynamic Array Administration\n- Power-Up Data Organization\n- Incorporation of Intricate Functionalities\n- Exemplary Problem-Solving Prowess\n- Methodical Program Development',
          skills: [
            'C++ programming',
            'Data structures',
            'Problem-solving',
            'Modular design'
          ],
        },
        // Project 2
        {
          id: 2,
          title: 'MIS201 Business Requirement Analysis',
          description: 'Glamify Project\n\nGlamify stands as a groundbreaking online fashion platform envisioned by Mia Anderson and Ethan Parker. This innovative venture seamlessly combines state-of-the-art technology with deep-rooted fashion knowledge, promising users an immersive and individualized shopping venture.',
          showDetails: false,
          objectives: [
            'Thoroughly scrutinized the challenges faced by the fashion industry in the digital age.',
            'Identified the shortcomings of existing online fashion retail platforms.',
            'Engineered Glamify as a revolutionary resolution, harnessing both technological prowess and fashion acumen.',
            'Effectively conveyed the vision and objectives of Glamify to stakeholders.',
            'Validated the incorporation of cutting-edge technologies, including AI algorithms and virtual fitting features, in crafting a customized shopping experience.',
            'Articulated the advantages of Glamify in reshaping the landscape of online fashion retail to potential investors and collaborators.'
          ],
          highlights: 'Noteworthy Milestones:\n\n- Scrutinized Fashion Industry Challenges\n- Identified Online Retail Platform Shortcomings\n- Engineered Glamify as a Revolutionary Solution\n- Conveyed Vision to Stakeholders\n- Validated Cutting-edge Technologies\n- Articulated Glamify Advantages',
          skills: [
            'Business requirement analysis',
            'Stakeholder communication',
            'Technology integration',
            'Problem-solving'
          ],
        },
        // Project 3
        {
          id: 3,
          title: 'SIT103 Database Fundamentals',
          description: 'Mini Project\n\nThe project centered on crafting and executing a relational database for Spotify, a data-centric music streaming platform. The primary objective was to adeptly oversee user accounts, monitor playlists, and organize music metadata.',
          showDetails: false,
          objectives: [
            'Proficiently devised a normalized database structure tailored to meet Spotify\'s unique data prerequisites.',
            'Executed SQL commands for table creation, record insertion, and data manipulation.',
            'Ensured data integrity and reduced redundancy through the application of normalization techniques.',
            'Seamless monitoring of user interactions, playlists, and song details for an enriched user experience.',
            'Streamlined information retrieval, bolstering platform efficiency.'
          ],
          highlights: 'Noteworthy Milestones:\n\n- Devised a Normalized Database Structure\n- Executed SQL Commands\n- Ensured Data Integrity\n- Seamless Monitoring of User Interactions\n- Streamlined Information Retrieval',
          skills: [
            'Database design',
            'SQL',
            'Data normalization',
            'Database management'
          ],
        },
        // Add more project objects here
      ],
    };
  },
  methods: {
    toggleDetails(projectId) {
      const project = this.projects.find((p) => p.id === projectId);
      if (project) {
        project.showDetails = !project.showDetails;
      }
    },
  },
};
</script>


<style scoped>
/* MyProjects.vue styles */
.projects {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.project {
  margin-bottom: 30px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s ease;
}

.project:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.expand-icon {
  font-size: 20px;
  margin-left: 10px;
  transition: transform 0.3s ease;
}

.project-details {
  margin-top: 15px;
}

.project-details p {
  font-size: 18px;
  color: #555;
  margin-bottom: 15px;
}

.key-learning h4,
.project-highlights h4,
.skills-gained h4 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

ul {
  list-style: disc;
  margin-left: 20px;
  font-size: 18px;
  color: #555;
}

/* Add additional styles as needed for specific elements */
</style>
