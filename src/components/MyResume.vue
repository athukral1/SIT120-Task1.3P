<template>
  <div class="resume">
    <h2>My Resume</h2>

    <!-- Professional Summary Section -->
    <section class="section">
      <h3 class="section-heading">Professional Summary</h3>
      <p>
        Enthusiastic first-year Bachelor of Information Technology student with a passion for technology and problem-solving. Demonstrated customer service aptitude, backed by practical experience in the field. Adept at leveraging technical knowledge to provide comprehensive support. Effective communicator with a passion for enhancing customer experiences.
      </p>
    </section>

    <!-- Education Section -->
    <section class="section">
      <h3 class="section-heading">Education</h3>
      <div class="education-item">
        <h4 class="section-title">Bachelor of Information Technology</h4>
        <p>Deakin University, Waurn Ponds, Geelong</p>
        <p>Expected Completion Date: June 2025</p>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="section">
      <h3 class="section-heading">Work Experience</h3>

      <!-- Employment Item 1 -->
      <div class="employment-item">
        <h4 class="section-title">Team Member</h4>
        <p>Coles Express, Altona North</p>
        <p>March 2023 - Present</p>
        <ul class="employment-list">
          <li>Managed cash with precision and accuracy in each shift.</li>
          <li>Maintained a clean and hygienic workplace during shifts.</li>
          <li>Ensured product quality and customer satisfaction.</li>
        </ul>
      </div>

      <!-- Employment Item 2  -->
      <div class="employment-item">
        <h4 class="section-title">Student Ambassador, Futures</h4>
        <p>Deakin University, Waurn Ponds</p>
        <p>August 2023 - December 2023</p>
        <ul class="employment-list">
          <li>Guided campus tours for prospective students.</li>
          <li>Shared personal experiences and insights about university life.</li>
          <li>Assisted with information sessions and presentations.</li>
        </ul>
      </div>
    </section>

    <!-- Employment Related Skills and Strengths Section -->
    <section class="section">
      <h3 class="section-heading">Skills and Strengths</h3>
      <ul class="employment-list">
        <li>Loyal and Respectful individual with a desire to provide my employer with as much value as possible.</li>
        <li>Energetic presenter and confident communicator with an ability to circulate clear information.</li>
        <li>Strong leadership skills, enabling quick and effective relationship management.</li>
        <li>Proficient within a dynamic, fast-paced working environment through great problem-solving skills.</li>
        <li>Open to change, adaptable in new and varying circumstances.</li>
        <li>Strong abilities to work autonomously, with a desire to stay busy and keep achieving targets.</li>
      </ul>
    </section>

    <!-- Referees Section  -->
    <section class="section">
      <h3 class="section-heading">Referees</h3>
      <p>Available upon request</p>
    </section>
  </div>
</template>

<style scoped>
/* MyResume.vue styles */
.resume {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #333;
  font-size: 22px; 
  font-family: 'Arial', sans-serif; 
}

.resume h2 {
  font-size: 44px; 
  margin-bottom: 20px;
  text-align: center;
}

.resume .section {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.resume .section-heading {
  font-size: 30px; 
  color: #333;
  margin-bottom: 10px;
}

.resume .section-title {
  font-size: 40px; 
  color: #333;
  margin-bottom: 5px;
}

.resume .employment-details,
.resume .education-details {
  font-size: 22px; 
  color: #555;
  margin-bottom: 5px;
}

.resume .employment-list {
  list-style: disc;
  margin-left: 20px;
  font-size: 22px; 
  color: #555;
}

/* Additional Styling */
.resume p {
  margin: 10px 0;
}

.resume ul {
  margin-left: 20px;
}

.resume .section-title {
  font-size: 24px;
  font-weight: bold;
}
</style>