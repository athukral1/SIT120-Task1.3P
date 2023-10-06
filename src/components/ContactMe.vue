<template>
  <div class="contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>

      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="subject" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>

      <div class="form-group">
        <label for="areaOfInterest">Area of Interest:</label>
        <ul>
          <li v-for="(interest, index) in areaOfInterest" :key="index">{{ interest }}</li>
        </ul>
        <input type="text" id="areaOfInterest" v-model="newInterest" @keyup.enter="addInterest" />
      </div>

      <button type="submit">Submit</button>
    </form>

    <div class="form-alert" v-if="formSubmitted">
      Your form has been submitted successfully.
    </div>
    
    <div class="form-error" v-if="formError">
      There was an error submitting the form. Please try again later.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      areaOfInterest: [],
      newInterest: '',
      formSubmitted: false,
      formError: false,
    };
  },
  methods: {
    submitForm() {
      // Simulating a form submission for demonstration purposes
      if (this.name && this.email && this.phone && this.subject && this.message) {
        // Form submission successful
        this.formSubmitted = true;
        this.formError = false;
      } else {
        // Form submission failed
        this.formSubmitted = false;
        this.formError = true;
      }
    },
    addInterest() {
      if (this.newInterest.trim() !== '') {
        this.areaOfInterest.push(this.newInterest);
        this.newInterest = '';
      }
    },
  },
};
</script>

<style scoped>
/* ContactMe.vue styles */
.contact {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 18px;
  color: #555;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #ff4500;
}

.form-alert, .form-error {
  font-size: 18px;
  margin-top: 15px;
  color: #009900; /* Green for success, or color of your choice */
}

.form-error {
  color: #ff0000; /* Red for error */
}

/* Add additional styles as needed for specific elements */
</style>
