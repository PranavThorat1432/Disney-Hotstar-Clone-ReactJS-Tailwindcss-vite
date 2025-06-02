# 🎬 Disney+ UI Clone

<p align="center">
  ![disney+ ](https://github.com/user-attachments/assets/3ca39687-1d0b-45a5-879a-757d04fb6341)
</p>

<p align="center">
  <b>A sleek, responsive Disney+ UI clone built using ReactJS and Tailwind CSS.</b><br/>
  Powered by TMDB API for fetching real-time movie data. Styled with responsiveness and interactivity in mind.
</p>

<p align="center">
  <a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-v18-blue?logo=react" alt="React Badge"/></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/TailwindCSS-v3-blueviolet?logo=tailwindcss" alt="TailwindCSS Badge"/></a>
  <a href="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-Client-lightgrey?logo=axios" alt="Axios Badge"/></a>
  <a href="https://www.themoviedb.org/"><img src="https://img.shields.io/badge/TMDB-API-orange?logo=themoviedatabase" alt="TMDB Badge"/></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/Vite-Bundler-yellow?logo=vite" alt="Vite Badge"/></a>
  <a href="#"><img src="https://img.shields.io/github/license/your-username/disneyplus-clone" alt="License Badge"/></a>
</p>

----

## 🧭 Table of Contents

- [📸 Preview](#-preview)
- [🚀 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🔌 APIs Used](#-apis-used)
- [📦 Installation & Setup](#-installation--setup)
- [🧩 Component Overview](#-component-overview)
- [🌐 Deployment](#-deployment)
- [🧠 Learnings](#-learnings)
- [📜 License](#-license)
- [👨‍💻 Author](#-author)


----

## 📸 Preview

> Responsive and interactive UI inspired by the Disney+ web platform.

| Desktop View | Mobile View |
|--------------|-------------|
| ![desktop-1](https://github.com/user-attachments/assets/ad2fc4f4-eae9-454f-b459-c6d25077beec)
 | ![mob-1](https://github.com/user-attachments/assets/78ce1f04-1181-41ab-af99-4d5fe476534c)
 |
| ![desktop-2](https://github.com/user-attachments/assets/d555fdab-c3ff-489b-a63d-56c17941ff2d)
 | ![mob-2](https://github.com/user-attachments/assets/419ab93f-2741-4fed-9725-7d3aa18af726)


----

## 🚀 Features

- 🔹 Trending Movies Banner Slider
- 🔹 Genre-wise movie categories (action, comedy, etc.)
- 🔹 Production House cards with animated background videos
- 🔹 Mobile-first responsive layout
- 🔹 Hover effects & smooth transitions
- 🔹 Dynamic data rendering from TMDB API
- 🔹 Clean, modular, reusable React components

----

## 📁 Project Structure

```

src/
│
├── assets/
│   ├── img/                  # Static image assets
│   └── vid/                  # Background hover videos
│
├── Constant/
│   └── GenresList.jsx        # Static genre list
│
├── MyComponents/
│   ├── Header.jsx            # Top navigation bar
│   ├── HeaderItem.jsx        # Icon + text button
│   ├── Slider.jsx            # Trending movie slider
│   ├── GenreMovieList.jsx    # Full genre list component
│   ├── MovieList.jsx         # Scrollable movie lists
│   ├── MovieCard.jsx         # Poster card (vertical)
│   ├── HrMovieCard.jsx       # Wide card (horizontal)
│   └── ProductionHouse.jsx   # Logo cards with videos
│
├── Services/
│   └── GlobalAPI.jsx         # TMDB API call functions
│
├── App.jsx                   # Main app layout
└── index.js                  # Entry point

````

----

## 🔌 APIs Used

Powered by [TMDB](https://www.themoviedb.org/documentation/api):

- `GET /trending/all/week`
- `GET /discover/movie?with_genres=ID`
- Image Base URL: `https://image.tmdb.org/t/p/original/`

> 💡 API Keys must be stored securely (use `.env` in production).

----

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/disneyplus-clone.git
   cd disneyplus-clone


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

> Project will be live at: `http://localhost:3000`

----

## 🧩 Component Overview

| Component             | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `Header.jsx`          | Top navbar with responsive mobile toggle               |
| `HeaderItem.jsx`      | Individual nav item (icon + label)                     |
| `Slider.jsx`          | Horizontal trending movie scroll                       |
| `GenreMovieList.jsx`  | Section-wise movie rows by genre                       |
| `MovieList.jsx`       | Calls API, renders either `MovieCard` or `HrMovieCard` |
| `MovieCard.jsx`       | Simple poster card for movies                          |
| `HrMovieCard.jsx`     | Featured wider card for highlighted movies             |
| `ProductionHouse.jsx` | Animated Disney/Marvel/etc. cards                      |
| `GlobalAPI.jsx`       | All TMDB API communication logic                       |


----

## 🧠 Learnings

* 🔰 Hands-on experience with ReactJS component hierarchy
* 🎨 Styling with TailwindCSS and media responsiveness
* 🔁 API data handling using Axios and hooks (`useEffect`, `useState`)
* 🧠 React best practices: keys, modularization, props-driven UI

----

## 📈 Future Improvements

* 🔐 **Login & Authentication** (Firebase/Auth0)
* 💾 **Favorites or Watchlist** using localStorage or backend
* 🔍 **Movie Search Functionality**
* 🎬 **Movie Details Page** on card click
* 🔄 **Infinite Scroll or Load More** for long movie lists
* 📱 **Improved Accessibility & SEO**
* 🌙 **Dark/Light Mode Toggle**
* 🚀 **PWA support for mobile app-like experience**

----

## 📜 License

This project is licensed under the **MIT License**.

----

## 👨‍💻 Author

> Developed with ❤️ by **Pranav Thorat**

* 📧 Email: [Click Here](mailto:pranavthorat95@gmail.com)
* 🔗 LinkedIn: [Click Here](https://www.linkedin.com/in/curiouspranavthorat/)
* 🐱 GitHub: [Click Here](https://github.com/PranavThorat1432)

----

## 🤝 Contributing

<p>
  If you'd like to contribute to this project, feel free to fork and submit a pull request.
</p>



> ⭐ If you found this project helpful, please consider starring the repo!

