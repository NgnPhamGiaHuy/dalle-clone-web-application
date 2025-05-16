# 🎨 DALL·E Clone Web Application

![React](https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?logo=openai&logoColor=white)

## 📝 Description

A full-stack web application that clones the functionality of OpenAI's DALL·E, allowing users to generate images from text prompts using AI. This project implements a modern MERN stack architecture with a React frontend and Express.js backend, integrating the OpenAI API for image generation capabilities.

Users can create AI-generated images based on text prompts and save their creations to a community showcase. The application demonstrates implementation of API integration, image processing, and database operations in a real-world application context.

## ✨ Features

- **Generate images** from natural language descriptions using OpenAI's DALL·E model
- **Save and share** AI-generated images to a community showcase
- **Browse** all user-generated images in a responsive gallery
- **Search** for specific images using keywords
- **Download** generated images locally to your device
- **Responsive design** adapting to different screen sizes and devices

## 🖼️ Demo / Screenshots

![DALL·E Empty Post](https://github.com/HinhNhuLaHuy/Web-Application-Dalle-Clone/assets/84061230/ba32ea9f-f3c8-4379-ac10-b72bcf4f79de)  

![DALL·E Create Post](https://github.com/HinhNhuLaHuy/Web-Application-Dalle-Clone/assets/84061230/6c3ee097-9bda-464f-acc9-67f11ba43643)

## ⚙️ Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account
- OpenAI API key

### Setup

```bash
# Clone the repository
git clone https://github.com/ngnphamgiahuy/dalle-clone-web-application.git
cd dalle-clone-web-application

# Install dependencies for client
cd client
npm install

# Install dependencies for server
cd ../server
npm install
```

### Configuration

Create a `.env` file in the server directory:

```env
MONGODB_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🚀 Usage

### Starting the Development Server

```bash
# Start the backend server
cd server
npm start

# Start the frontend development server (in a new terminal)
cd client
npm run dev
```

### Using the Application

1. Navigate to `http://localhost:5173` in your web browser
2. Enter a text prompt in the input field to generate an image
3. Click the "Generate" button to create your AI image
4. Add your name and additional details
5. Share your creation to the community showcase

## 🗂️ Folder Structure

```
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── assets/         # Images and static assets
│   │   ├── components/     # Reusable UI components
│   │   ├── constants/      # Application constants
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Application entry point
│   ├── index.html          # HTML template
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Express application
│   ├── mongodb/            # Database models and connection
│   ├── routes/             # API routes
│   │   ├── dalleRoutes.js  # OpenAI image generation endpoints
│   │   └── postRoutes.js   # Image post CRUD operations
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
```

## 🔧 Technology Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI**: OpenAI DALL·E API
- **Image Storage**: Cloudinary
- **Deployment**: TBD

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

```bash
# Create a new branch for your feature
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m "Add some amazing feature"

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
```

## 🙏 Acknowledgements

- [OpenAI](https://openai.com/) for providing the DALL·E API
- [MongoDB](https://www.mongodb.com/) for the database solution
- [Cloudinary](https://cloudinary.com/) for image storage
- All open-source libraries used in this project

