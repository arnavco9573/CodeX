export const PROJECT_TEMPLATES = [
  {
    emoji: "🎬",
    title: "Build a Netflix clone",
    prompt:
      "Build a modern, dark-mode Netflix-style application using Tailwind CSS. Implement a cinematic hero section with a full-width background image and gradient overlay. Create horizontal scrolling movie rows with hover scale effects on thumbnails. Include a 'More Info' modal that opens on click, displaying movie details, cast, and a 'Play' button. Use mock data for categories (Trending, New Releases, Action, etc.) and manage state for the modal and active movie selection. Ensure a responsive layout that looks great on all devices.",
  },
  {
    emoji: "📦",
    title: "Build an admin dashboard",
    prompt:
      "Create a modern, responsive admin dashboard using Tailwind CSS and Lucide React icons. Include a collapsible sidebar with navigation links (Dashboard, Analytics, Users, Settings) and a top header with search and user profile. The main content should feature a grid of 4 summary stat cards with trend indicators, followed by a data visualization section using Recharts (line chart for revenue, bar chart for user activity). Below the charts, implement a detailed data table for 'Recent Orders' with sortable columns, status badges, and pagination using local state. Ensure a clean, professional aesthetic with subtle shadows, rounded corners, and a consistent color palette.",
  },
  {
    emoji: "📋",
    title: "Build a kanban board",
    prompt:
      "Create a fully functional Kanban board using Tailwind CSS and React Beautiful DND (or similar). The board should feature multiple columns (To Do, In Progress, Done) with the ability to drag and drop tasks between them. Each task card should display a title, priority tag (High/Medium/Low), and assignee avatar. Implement 'Add Task' functionality for each column and a modal for editing task details. Use a clean, light background with distinct column styling and smooth drag animations.",
  },
  {
    emoji: "🗂️",
    title: "Build a file manager",
    prompt:
      "Develop a sleek file manager interface using Tailwind CSS and Lucide React icons. The layout should include a sidebar for directory navigation (Home, Documents, Images, etc.) and a main area displaying files in a grid or list view. Implement breadcrumb navigation, file selection (single and multi-select), and a context menu for actions like Rename, Delete, and Share. Use distinct icons for different file types (PDF, Image, Folder) and ensure a responsive design that adapts to sidebar toggling.",
  },
  {
    emoji: "📺",
    title: "Build a YouTube clone",
    prompt:
      "Build a YouTube-inspired video platform using Tailwind CSS. Create a responsive layout with a fixed sidebar (collapsible on mobile), a top search bar, and a main video grid. Each video card should show a thumbnail, duration, title, channel name, and view count. Implement a 'Watch' page view with a video player placeholder, description, and a 'Up Next' video list. Use mock data for videos and comments, and ensure a polished dark mode implementation.",
  },
  {
    emoji: "🛍️",
    title: "Build a store page",
    prompt:
      "Design a premium e-commerce store page using Tailwind CSS. The layout should feature a sticky sidebar for filters (Price, Category, Color) and a responsive product grid. Each product card should display an image, title, price, and an 'Add to Cart' button with hover effects. Implement a slide-out shopping cart drawer that updates in real-time as items are added. Include a 'Featured' carousel at the top and ensure typography and spacing convey a high-end brand feel.",
  },
  {
    emoji: "🏡",
    title: "Build an Airbnb clone",
    prompt:
      "Create a travel booking interface inspired by Airbnb using Tailwind CSS. The main view should be a responsive grid of property cards, each featuring an image carousel, location, rating, and price per night. Implement a robust search bar with date pickers and guest count selection. Add a map view toggle (using a placeholder or map library) and detailed filter options. Ensure the design is clean, trustworthy, and uses soft shadows and rounded corners.",
  },
  {
    emoji: "🎵",
    title: "Build a Spotify clone",
    prompt:
      "Build a music streaming web player inspired by Spotify using Tailwind CSS. The app should feature a persistent playback bar at the bottom with controls and progress bar. The main layout includes a sidebar for library/playlists and a main content area with a gradient background that adapts to the album art. Implement a song list view with hover states, duration, and 'Like' button. Use local state to simulate playback and track selection, ensuring a seamless, app-like experience in dark mode.",
  },
] as const;
