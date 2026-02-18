#  My Semester Abroad Travel Map

> *"I can't draw, but I can code."* - A digital alternative to a traditional travel scrapbook

##  The Story

After spending an incredible semester abroad exploring Europe, I wanted a way to preserve and share my memories. While others might create beautiful hand-drawn scrapbooks, I decided to build something that matched my skills - an interactive travel map that brings my journey to life through code.

This full-stack application transforms my travel experiences into an interactive visual story, plotting each destination on a map with photos, memories, and ratings.

##  Features

- ** Interactive Map**: Click on any pin to explore memories from that location
- ** Photo Integration**: Each location includes photos from the trip
- ** Personal Ratings**: Rate each destination (1-10 scale)
- ** Travel Notes**: Add comments and descriptions for each place
- ** Visit Dates**: Track when each adventure happened
- ** Add New Memories**: Double-click anywhere on the map to add a new entry
- ** Visual Design**: Clean, modern interface with custom markers

##  Demo

[Watch the demo video](./EdenMap-compressed.mp4) to see the app in action and hear about my semester abroad journey!

##  Built With

### Frontend
- **React** - UI framework
- **Mapbox GL** / **React Map GL** - Interactive mapping
- **React Hook Form** - Form handling

### Backend
- **Node.js** + **Express** - REST API server
- **MongoDB** + **Mongoose** - Database for storing travel memories
- **CORS** - Cross-origin resource sharing

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Mapbox account for API token (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eden-byte/travel-log.git
   cd travel-map
   ```

2. **Set up the backend**
   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the server directory:
   ```env
   DATABASE_URL=mongodb://localhost:27017/travel-log
   CORS_ORIGIN=http://localhost:3000
   PORT=1337
   NODE_ENV=development
   ```

   Start the backend server:
   ```bash
   npm start
   ```

3. **Set up the frontend**
   
   In a new terminal:
   ```bash
   cd client
   npm install
   ```

   Create a `.env` file in the client directory:
   ```env
   REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here
   ```

   Start the React app:
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to see the map!

## How to Use

### Adding a New Location
1. **Double-click** anywhere on the map
2. Fill in the details:
   - Title (e.g., "Weekend in Barcelona")
   - Rating (1-10)
   - Comments & Description
   - Visit Date
   - Image URL (use [Imgur](https://imgur.com) for easy image hosting)
3. Click "Create Entry"

### Viewing Memories
- **Click** on any marker to see details
- Photos, ratings, and notes will appear in a popup
- **Close** the popup by clicking the X

### Image Hosting Tips
For best results, use [Imgur](https://imgur.com):
1. Upload your photo to Imgur (no account needed)
2. Right-click the image → "Copy image address"
3. Paste the direct link in the Image URL field

## Project Structure

```
travel-map/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.js         # Main map component
│   │   ├── LogEntryForm.js # Form for new entries
│   │   ├── Api.js         # API communication
│   │   └── index.css      # Styling
│   └── package.json
│
├── server/                 # Express backend
│   ├── api/
│   │   └── logs.js        # API routes
│   ├── models/
│   │   └── LogEntry.js    # MongoDB schema
│   ├── src/
│   │   ├── index.js       # Server entry point
│   │   └── middlewares.js # Express middleware
│   └── package.json
│
└── README.md
```

## Future Enhancements

- [ ] Photo galleries (multiple photos per location)
- [ ] Trip statistics (total countries, cities, distance traveled)
- [ ] Share specific trips via public links
- [ ] Search and filter functionality
- [ ] Trip route visualization (connect the dots)
- [ ] Export memories as PDF/photo book
- [ ] Categories/tags for different types of activities

## Why This Project?

As someone who loves to travel but lacks artistic talent for traditional scrapbooking, I wanted to create something that:
- Preserves memories in a interactive, modern way
- Allows me to share my experiences with friends and family
- Combines my passion for coding with my travel experiences
- Creates something unique that reflects my skills and journey

This project is more than just a map - it's my digital story of an unforgettable semester abroad.

## Contributing

While this is a personal project documenting my travels, I'd love to hear your ideas! Feel free to:
- Fork the project for your own travel map
- Suggest features via issues
- Share how you've customized it for your journey

## License

MIT License - feel free to use this for your own travel memories!

## Acknowledgments

- Thanks to my study abroad program for the incredible opportunity
- All the friends who made these memories worth documenting
- The open-source community for the amazing tools that made this possible

---

**[Live Demo](#)** | **[Watch Video Demo](./EdenMap-compressed.mp4)** | **[Connect on LinkedIn](#)**
