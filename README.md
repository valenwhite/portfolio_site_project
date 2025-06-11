# Developer Portfolio Site

<img width="1622" alt="cover" src="https://github.com/user-attachments/assets/9a053579-7c0c-4f2d-8c75-7c29823ce85b" />


This is my personal developer portfolio, built using **React**. It showcases my work, skills, and experience as a software developer. The site dynamically fetches data from my GitHub profile and incorporates various APIs to enhance the user experience.

---

## ⚙️ Features

- **About Me**: A brief overview of my background, skills, and tools I work with.
- **Projects Section**: Automatically pulls in my GitHub repositories and builds project cards dynamically.
- **Contact Page**: A working form for direct communication.
- **Responsive Design**: Mobile-friendly layout built with custom CSS.
- **API Integrations**:
  - GitHub REST API – for repository data
  - Unsplash API – for high-quality background images
  - Google Geocode API & TimeZoneDB – for UX enhancements

---

## 🛠️ Tech Stack

- **React.js**
- **CSS Modules**
- **GitHub API**
- **Unsplash API**
- **Google Timezone API**
- **Google Geocoding API**

---

## 📁 Folder Structure

```plaintext
portfolio/
  public/
  src/
    components/
      About/
      APIs/
      Contact/
      Footer/
      Functional/
      Home/
      Profile/
      Projects/
      Resume/
      SideBar/
  index.js
  App.js
```

---
## 🚀 Getting Started

To run this project locally:

```bash
git clone https://github.com/valenwhite/portfolio_site_project.git
cd portfolio
npm install
npm start
```

---

## ⚠️ Configuration

If you wish to reuse this portfolio:

- Go to `portfolio/src/components/Profile/Profile.js`
  - Update the `username` constant to match your GitHub username
- Go to `portfolio/src/components/Resume/Resume.js`
  - Replace hardcoded content with your own experience

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE.md).
