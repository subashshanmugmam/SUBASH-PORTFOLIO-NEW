# 3D Portfolio

A modern, interactive 3D portfolio website built with React and Three.js, showcasing creativity and technical skills through immersive 3D experiences.



## 🚀 Features

- **Interactive 3D Environment**: Immersive 3D room with interactive elements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Performance Optimized**: Built with Vite for fast development and build times
- **GSAP Animations**: Smooth, professional animations and transitions
- **Three.js Integration**: Advanced 3D graphics and interactions

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Three.js** - 3D graphics library for the web
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Animations & Interactions
- **GSAP** - Professional-grade animation library
- **PostProcessing** - Advanced visual effects for Three.js

### Development Tools
- **ESLint** - Code linting and formatting
- **React Responsive** - Responsive design hooks for React

## 📁 Project Structure

```
3D-Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, models, and textures
│   │   ├── public/        # Public assets
│   │   │   ├── images/    # Image assets
│   │   │   ├── models/    # 3D models (.glb files)
│   │   │   └── textures/  # Texture files
│   ├── Components/        # Reusable React components
│   │   ├── Button.jsx     # Custom button component
│   │   └── Heromodals/    # 3D experience components
│   │       ├── HeroExperience.jsx
│   │       ├── Herolights.jsx
│   │       ├── Particles.jsx
│   │       └── Room.jsx
│   ├── Section/           # Page sections
│   │   └── Hero.jsx       # Hero section component
│   ├── constants/         # Application constants
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subashshanmugmam/3D-Portfolio.git
   cd 3D-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit** `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 🎮 Usage

The portfolio features an interactive 3D environment where visitors can:

- **Explore the 3D Room**: Navigate around the virtual space using mouse controls
- **View Portfolio Content**: Experience a unique presentation of skills and projects
- **Responsive Interaction**: Enjoy optimized controls for different devices
- **Smooth Animations**: Experience professional-grade animations and transitions

### Controls

- **Desktop**: Mouse to orbit, scroll to zoom
- **Tablet/Mobile**: Touch gestures for navigation (zoom disabled on tablets)

## 🎨 Customization

### Adding New 3D Models

1. Place your `.glb` files in `src/assets/public/models/`
2. Import and use them in the appropriate component files

### Modifying Colors and Styling

- Edit Tailwind classes in component files
- Modify global styles in `src/index.css`
- Adjust 3D scene lighting in `src/Components/Heromodals/Herolights.jsx`

### Adding New Sections

1. Create new section components in `src/Section/`
2. Import and add them to `src/App.jsx`
3. Update navigation constants in `src/constants/index.js`

## 📱 Responsive Design

The application is fully responsive with optimized experiences for:

- **Desktop**: Full 3D interactions with orbit controls and zoom
- **Tablet**: Touch-optimized navigation with zoom disabled
- **Mobile**: Simplified interactions for smaller screens

## 🔧 Configuration

### Vite Configuration

The project uses Vite for fast development and building. Configuration can be found in `vite.config.js`.

### ESLint Configuration

Code quality is maintained with ESLint. Rules are defined in `eslint.config.js`.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Subash Shanmugam**
- GitHub: [@subashshanmugmam](https://github.com/subashshanmugmam)

## 🙏 Acknowledgments

- Three.js community for excellent 3D web graphics
- React Three Fiber for seamless React integration
- GSAP for professional animations
- The open-source community for inspiration and resources

---

Made with ❤️ and lots of ☕ by Subash Shanmugam
