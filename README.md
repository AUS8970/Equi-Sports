<img src="https://github.com/AUS8970/Equi-Sports/blob/main/Screenshot%202025-02-05%2017415.jpg" alt="Web Image" border="0">

# 🏆 **Equi Sports Website**  

A modern, responsive **sports equipment e-commerce platform** that allows users to explore, purchase, and review various sports accessories. The website features category-based navigation, interactive sliders, user authentication, and dynamic product details.

## 📌 **Table of Contents**  
- [🌟 Features](#-features)  
- [🚀 Tech Stack](#-tech-stack)  
- [🛠️ Installation](#️-installation)  
- [🔧 Configuration](#-configuration)  
- [📜 License](#-license)  
- [🤝 Contributing](#-contributing)  

## 🌟 **Features**  
✅ **Explore Sports Equipment** – View all sports accessories in a user-friendly table format.  
✅ **Category Navigation** – Browse items by categories like Football, Basketball, Tennis, etc.  
✅ **Interactive Sliders** – Animated banners showcasing latest deals and features.  
✅ **User Authentication** – Secure login, register, and authentication via Firebase.  
✅ **Dynamic Product Views** – Detailed information on each product, including images and reviews.  

## 🚀 **Tech Stack**  

### 🖥️ Frontend  
- **React** – UI framework for dynamic components  
- **React Router** – Handles navigation between pages  
- **Tailwind CSS & DaisyUI** – Styling and responsive design  
- **React Icons** – Customizable icons  
- **React Toastify** – User-friendly notifications  
- **React Responsive Carousel & Swiper** – Interactive carousels  
- **Firebase** – Authentication and user management  

### 🔗 Backend  
- **Node.js & Express.js** – Server-side framework  
- **MongoDB** – NoSQL database for product and user data  
- **CRUD Operations** – Basic product and user management  
- **CORS & dotenv** – API security and environment variable management  

## 🛠️ **Installation**  

### 🖥️ **Frontend Setup**  
1. Clone the repository:  
   ```sh
   git clone https://github.com/AUS8970/Equi-Sports.git
   cd Equi-Sports
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Start the development server:  
   ```sh
   npm run dev
   ```
3. Create a `.env.local` file in the client directory and add:  
   ```env
   VITE_apiKey=your_apiKey
   VITE_authDomain=your_authDomain
   VITE_projectId=your_projectId
   VITE_storageBucket=your_storageBucket
   VITE_messagingSenderId=your_messagingSenderId
   VITE_appId=your_appId
   VITE_WEB_HOST_LINK=your_host_link
   ```

### 🌍 **Backend Setup**  
1. Navigate to the server folder:  
   ```sh
   cd server
   ```
2. Install backend dependencies:  
   ```sh
   npm install
   ```
3. Create a `.env` file in the server directory and add:  
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:  
   ```sh
   npm start
   ```

## 🔧 **Configuration**  
- Firebase authentication requires setup in the **Firebase Console**.  
- The database uses **MongoDB Atlas** (or local MongoDB setup).  

## 📜 **License**  
This project is licensed under the **MIT License**.  

## 🤝 **Contributing**  
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request. 
