<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <div class="contact-item">
            <a href="mailto:ayushithural1134@gmail.com" class="contact-link">
              <img src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-mail-icon-vector-illustration-in-line-style-for-any-purpose-png-image_996816.jpg" alt="Email Icon" class="contact-icon">
              ayushithukral1134@gmail.com
            </a>
          </div>
          <div class="contact-item">
            <a href="tel:+61468482434" class="contact-link">
              <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW91dGxpbmUtMjJfMS5wbmc.png" alt="Phone Icon" class="contact-icon">
              +61 468 482 434
            </a>
          </div>
          <div class="contact-item">
            <a href="https://www.linkedin.com/in/ayushi-thukral1" target="_blank" class="contact-link">
              <img src="https://img.freepik.com/premium-vector/linkedin-icon_488108-5.jpg?w=2000" alt="LinkedIn Icon" class="contact-icon">
              linkedin.com/in/ayushi-thukral1
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>

<style scoped>
/* PageFooter.vue styles */
.footer {
  background-color: #f54c4c;
  color: #fff;
  padding: 15px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.contact-info {
  flex-grow: 1;
  text-align: left;
  padding-left: 15px;
}

.contact-item {
  margin-bottom: 15px;
  font-size: 18px;
}

.contact-link {
  color: #000000;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
}

.contact-icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  vertical-align: middle;
}

/* Add social media icon styles here */
.social-icons a {
  color: #ff6600;
  font-size: 30px;
  margin-right: 20px;
  text-decoration: none;
}

/* Add hover effect to social media icons */
.social-icons a:hover {
  transform: scale(1.1);
  color: #fff;
}
</style>

