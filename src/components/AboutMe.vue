<template>
  <div class="about">
    <h2>About Me</h2>
    <p>
      I am an international student who came to Australia with a deep passion for technology and a keen interest in the IT industry. Pursuing a Bachelor of Information Technology has been a dream come true for me, as it allows me to delve into the technical aspects of the ever-evolving world of IT. My journey to this vibrant and diverse country has not only expanded my horizons but has also given me the opportunity to immerse myself in a culture that embraces innovation and knowledge. I am driven by a strong desire to learn and explore the limitless possibilities that the IT industry has to offer, and I am excited to contribute my skills and knowledge to this dynamic field.
    </p>

    <h2>Skills</h2>
    <ul class="skills-list">
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Web Development</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">MySQL, Oracle</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Python, C++, C, JavaScript, Vue3</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Problem Solving</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Critical Thinking</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Customer Service</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Team Work</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Adaptability</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Attention to Detail</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Verbal Communication</span>
      </li>
      <li class="skill-item">
        <i class="fas fa-check-circle"></i>
        <span class="skill-text">Leadership</span>
      </li>
    </ul>

    <h2>My Hobbies</h2>
    <table class="hobbies-table">
      <thead>
        <tr>
          <th>Hobby</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Reading Books</td>
          <td>Exploring various genres of books and gaining knowledge.</td>
        </tr>
        <tr>
          <td>Exploring the Internet</td>
          <td>Discovering new information, trends, and interesting websites online.</td>
        </tr>
        <tr>
          <td>Going for a Walk</td>
          <td>Taking leisurely walks to relax and clear the mind.</td>
        </tr>
        <tr>
          <td>Spending Time in Nature</td>
          <td>Connecting with nature by spending time outdoors and appreciating the beauty of the natural world.</td>
        </tr>
      </tbody>
    </table>
    
    <h2>Additional Information</h2>
    <p v-if="showAdditionalInfo">
      My Vue.js project is a testament to my proficiency in front-end web development and showcases my ability to create complex, interactive web applications. This project is built using Vue.js, a powerful JavaScript framework that allows for the creation of modular and reusable components. Each component serves a specific purpose, contributing to the overall functionality and user experience of the application. The use of Vue Router enables seamless navigation between different sections of the website, ensuring a smooth and intuitive user journey. With the incorporation of Vue's state management, data is efficiently managed and synchronized across components, enhancing the project's performance. This project reflects my dedication to clean and maintainable code, as well as my commitment to delivering user-friendly and visually appealing web solutions. It's a testament to my skills as a web developer and my passion for creating exceptional online experiences.    
    </p>

    <button @click="showAdditionalInfo = !showAdditionalInfo">
      Toggle Additional Info
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAdditionalInfo: false,
    };
  },
};
</script>

<style scoped>
/* AboutMe.vue styles */
.about {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}

h2{
  font-size: 30px;
}

p {
  font-size: 22px;
  color: #555;
  line-height: 1.6;
}

.hobbies-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 22px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 26px;
}

.skills-list {
  list-style: none;
  padding-left: 0;
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 30px;
}

.skill-text {
  font-size: 22px;
  color: #555;
}

/* Additional Info Button Styles */
button {
  background-color: #007bff; /* Blue button color */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 22px;
  margin-top: 15px;
}

button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>