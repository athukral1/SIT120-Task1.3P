<template>
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <h1 class="logo-text">AYUSHI THUKRAL</h1>
        </div>
        <nav class="nav-menu">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/about" class="nav-item">About</router-link>
          <router-link to="/resume" class="nav-item">Resume</router-link>
          <router-link to="/projects" class="nav-item">Projects</router-link>
          <router-link to="/contact" class="nav-item">Contact</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  /* PageHeader.vue styles */
  .header {
    background-color: #f54c4c;
    color: #fff;
    padding: 50px 0;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .logo-text {
    font-size: 36px;
    margin: 0;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .nav-menu {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  
  .nav-item {
    text-decoration: none;
    color: #fff;
    margin: 0 20px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 0.3s ease;
    letter-spacing: 1px;
  }
  
  .nav-item:hover {
    color: #1dfffb;
    transform: scale(1.1);
  }
  
  /* Media Query for Responsiveness */
  @media screen and (max-width: 768px) {
    .header-content {
      flex-direction: column;
    }
    .nav-menu {
      margin-top: 20px;
      display: block;
    }
    .nav-item {
      margin: 10px 0;
    }
  }
  </style>
  
  