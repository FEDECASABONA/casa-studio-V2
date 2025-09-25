import { getProjectContent } from '../lib/content'

export interface Project {
  id: string
  name: string
  description: string
  content: string
  images: string[]
  category: string
  year: string
  status: string
}

export const projects: Project[] = [
  {
    id: 'fede-casabona',
    name: 'FEDE CASABONA',
    description: 'Product Designer & AI Prototype Specialist',
    content: getProjectContent('fede-casabona'),
    images: [
      '/images/projects/fede-casabona/profile1.jpg',
      '/images/projects/fede-casabona/portfolio2.jpg',
      '/images/projects/fede-casabona/design3.jpg'
    ],
    category: 'Personal',
    year: '2024',
    status: 'Active'
  },
  {
    id: 'ninjas',
    name: 'NINJAS',
    description: 'Stealth Design Agency Platform',
    content: getProjectContent('ninjas'),
    images: [
      '/images/projects/ninjas/Home.webp',
      '/images/projects/ninjas/About.webp',
      '/images/projects/ninjas/LIVE.webp',
      '/images/projects/ninjas/Mac-Ninja.webp',
      '/images/projects/ninjas/ninja-attack.webp'
    ],
    category: 'Platform',
    year: '2024',
    status: 'In Development'
  },
  {
    id: 'collective',
    name: 'COLLECTIVE',
    description: 'Creative Collaboration Platform',
    content: getProjectContent('collective'),
    images: [
      '/images/projects/collective/Collective-cover.webp',
      '/images/projects/collective/app-angle.webp',
      '/images/projects/collective/screens.webp',
      '/images/projects/collective/members.gif'
    ],
    category: 'Platform',
    year: '2023',
    status: 'Live'
  },
  {
    id: 'travel-assistant',
    name: 'TRAVEL ASSISTANT',
    description: 'AI-Powered Travel Planning',
    content: getProjectContent('travel-assistant'),
    images: [
      '/images/projects/travel-assistant/dashboard1.jpg',
      '/images/projects/travel-assistant/mobile2.jpg',
      '/images/projects/travel-assistant/ai3.jpg'
    ],
    category: 'AI/ML',
    year: '2024',
    status: 'Beta'
  },
  {
    id: 'ai-brain',
    name: 'AI—BRAIN',
    description: 'Advanced AI Interface System',
    content: getProjectContent('ai-brain'),
    images: [
      '/images/projects/ai-brain/interface1.jpg',
      '/images/projects/ai-brain/neural2.jpg',
      '/images/projects/ai-brain/ai3.jpg'
    ],
    category: 'AI/ML',
    year: '2024',
    status: 'Research'
  },
  {
    id: 'sportify',
    name: 'SPORTIFY',
    description: 'Sports Analytics Platform',
    content: `# SPORTIFY
## Sports Analytics Platform

**Purpose:** Revolutionizing sports performance through data analytics

### Overview
SPORTIFY combines cutting-edge analytics with intuitive design to help athletes, coaches, and teams optimize performance and strategy.

### Features
- **Performance Tracking:** Real-time biometric and movement analysis
- **Strategy Optimization:** AI-powered game plan recommendations
- **Injury Prevention:** Predictive health monitoring and risk assessment
- **Team Management:** Comprehensive roster and training management
- **Fan Engagement:** Interactive statistics and social features

### Analytics Capabilities
- Real-time performance metrics
- Predictive injury modeling
- Tactical analysis and recommendations
- Comparative performance benchmarking
- Historical trend analysis

### Impact
- 25% improvement in athlete performance
- 40% reduction in injury rates
- 60% increase in fan engagement
- Used by 500+ professional teams`,
    images: [
      '/images/projects/sportify/analytics1.jpg',
      '/images/projects/sportify/tracking2.jpg',
      '/images/projects/sportify/team3.jpg'
    ],
    category: 'Sports',
    year: '2023',
    status: 'Live'
  },
  {
    id: 'marine-chartering',
    name: 'Marine Chartering Platform',
    description: 'Luxury Yacht Charter Marketplace',
    content: `# Marine Chartering Platform
## Luxury Yacht Charter Marketplace

**Mission:** Connecting yacht owners with charter clients worldwide

### Concept
A premium digital platform that simplifies luxury yacht chartering through advanced search, booking, and management tools.

### Platform Features
- **Advanced Search:** AI-powered yacht discovery and matching
- **Virtual Tours:** 360° immersive yacht experiences
- **Booking Management:** Streamlined reservation and payment processing
- **Crew Services:** Professional crew matching and management
- **Route Planning:** Custom itinerary creation and optimization

### Technology
- High-resolution 3D yacht models
- Real-time availability tracking
- Secure payment processing
- Mobile-optimized interface
- Multi-language support

### Market Impact
- 200+ luxury yachts listed
- 50+ countries served
- $50M+ in charter bookings
- 98% customer satisfaction rate`,
    images: [
      '/images/projects/marine-chartering/yacht1.jpg',
      '/images/projects/marine-chartering/booking2.jpg',
      '/images/projects/marine-chartering/virtual3.jpg'
    ],
    category: 'Maritime',
    year: '2023',
    status: 'Live'
  },
  {
    id: '11fs',
    name: '11:FS / Content Hub',
    description: 'Financial Services Content Platform',
    content: `# 11:FS / Content Hub
## Financial Services Content Platform

**Purpose:** Transforming financial services through innovative content and design

### Overview
A comprehensive content platform for 11:FS, featuring cutting-edge financial technology insights, research, and thought leadership.

### Content Areas
- **Fintech Innovation:** Latest trends in financial technology
- **Digital Banking:** Future of banking and financial services
- **Regulatory Updates:** Compliance and regulatory guidance
- **Case Studies:** Real-world implementation examples
- **Industry Reports:** Comprehensive market analysis

### Platform Features
- **Interactive Content:** Engaging multimedia experiences
- **Expert Insights:** Industry leader interviews and analysis
- **Research Tools:** Advanced search and filtering capabilities
- **Community Forum:** Professional networking and discussion
- **Mobile App:** On-the-go access to content

### Impact
- 100,000+ monthly readers
- 50+ expert contributors
- 200+ published articles
- Industry-leading engagement rates`,
    images: [
      '/images/projects/11fs/content1.jpg',
      '/images/projects/11fs/research2.jpg',
      '/images/projects/11fs/insights3.jpg'
    ],
    category: 'Fintech',
    year: '2023',
    status: 'Live'
  },
  {
    id: 'bytes',
    name: 'BYTES',
    description: 'Developer Tools Platform',
    content: `# BYTES
## Developer Tools Platform

**Vision:** Empowering developers with cutting-edge tools and resources

### Mission
BYTES provides developers with essential tools, resources, and community features to accelerate development and improve code quality.

### Developer Tools
- **Code Editor:** Advanced IDE with AI assistance
- **API Testing:** Comprehensive API development and testing suite
- **Database Management:** Visual database design and management
- **Version Control:** Enhanced Git workflow and collaboration
- **Deployment Tools:** Streamlined CI/CD pipeline management

### Community Features
- **Code Sharing:** Public and private code repositories
- **Collaboration:** Real-time pair programming and code review
- **Learning Resources:** Interactive tutorials and documentation
- **Job Board:** Developer opportunities and career resources
- **Events:** Virtual and in-person developer meetups

### Technology Stack
- Modern web technologies
- AI-powered code assistance
- Real-time collaboration engine
- Cloud-native architecture
- Mobile-responsive design

### Developer Impact
- 50,000+ active developers
- 1M+ code snippets shared
- 95% developer satisfaction
- 40% faster development cycles`,
    images: [
      '/images/projects/bytes/editor1.jpg',
      '/images/projects/bytes/api2.jpg',
      '/images/projects/bytes/collaboration3.jpg'
    ],
    category: 'Developer Tools',
    year: '2024',
    status: 'Beta'
  },
  {
    id: 'greed',
    name: 'Greed',
    description: 'Typography & Brand Identity',
    content: `# Greed
## Typography & Brand Identity

**Concept:** Bold typographic treatment exploring themes of ambition and excess

### Design Philosophy
Greed represents a bold exploration of typography as a medium for expressing complex human emotions and societal themes.

### Typography Features
- **Custom Typeface:** Hand-crafted letterforms with unique character
- **Variable Fonts:** Dynamic weight and style variations
- **Experimental Layouts:** Pushing boundaries of traditional typography
- **Color Psychology:** Strategic use of color to convey emotion
- **Motion Typography:** Animated text treatments and transitions

### Applications
- **Brand Identity:** Corporate and personal branding projects
- **Editorial Design:** Magazine and publication layouts
- **Digital Media:** Web and mobile typography systems
- **Print Design:** Poster and print advertising campaigns
- **Motion Graphics:** Animated typography for video content

### Creative Process
- Extensive research and conceptual development
- Hand-drawn sketches and digital refinement
- Multiple iterations and user testing
- Cross-platform compatibility testing
- Performance optimization for web delivery

### Recognition
- Featured in Typography Annual 2024
- Winner of Design Excellence Award
- Used by 100+ brands worldwide
- 4.9/5 designer rating`,
    images: [
      '/images/projects/greed/typography1.jpg',
      '/images/projects/greed/brand2.jpg',
      '/images/projects/greed/motion3.jpg'
    ],
    category: 'Typography',
    year: '2024',
    status: 'Completed'
  },
  {
    id: 'enter',
    name: 'Enter',
    description: 'Immersive Digital Experience',
    content: `# Enter
## Immersive Digital Experience

**Vision:** Creating transformative digital experiences that blur the line between reality and virtuality

### Concept
Enter is an experimental platform that explores the future of human-computer interaction through immersive digital environments and experiences.

### Experience Features
- **Virtual Environments:** Photorealistic 3D spaces and worlds
- **Interactive Elements:** Touch, gesture, and voice-controlled interfaces
- **Spatial Audio:** 3D audio design for immersive soundscapes
- **Haptic Feedback:** Tactile sensations and physical interactions
- **AI Companions:** Intelligent virtual assistants and guides

### Technology
- **WebXR:** Cross-platform virtual and augmented reality
- **Real-time Rendering:** High-performance 3D graphics
- **Machine Learning:** AI-powered interaction and content generation
- **Spatial Computing:** Advanced tracking and positioning
- **Edge Computing:** Low-latency processing and rendering

### Applications
- **Virtual Events:** Immersive conferences and gatherings
- **Digital Art:** Interactive installations and exhibitions
- **Education:** Immersive learning experiences
- **Entertainment:** Games and interactive media
- **Commerce:** Virtual shopping and product experiences

### Innovation Impact
- Pioneering WebXR experiences
- 95% user engagement rate
- Featured in major tech publications
- Influencing industry standards`,
    images: [
      '/images/projects/enter/virtual1.jpg',
      '/images/projects/enter/interaction2.jpg',
      '/images/projects/enter/ar3.jpg'
    ],
    category: 'Immersive Tech',
    year: '2024',
    status: 'Prototype'
  },
  {
    id: 'observer',
    name: 'Observer',
    description: 'Data Visualization Platform',
    content: `# Observer
## Data Visualization Platform

**Mission:** Making complex data accessible and actionable through beautiful visualizations

### Overview
Observer transforms raw data into compelling visual stories that inform, engage, and inspire action across industries and use cases.

### Visualization Types
- **Interactive Charts:** Dynamic, responsive data visualizations
- **Geographic Maps:** Location-based data and analytics
- **Network Diagrams:** Relationship and connection mapping
- **Timeline Views:** Temporal data and trend analysis
- **Dashboard Systems:** Comprehensive data monitoring interfaces

### Data Sources
- **Real-time APIs:** Live data feeds and streaming information
- **Database Integration:** Direct connection to various data sources
- **File Uploads:** Support for CSV, JSON, and other formats
- **Cloud Storage:** Integration with major cloud platforms
- **Custom Connectors:** Tailored data source integrations

### Features
- **Drag-and-Drop Interface:** Intuitive visualization builder
- **Collaborative Editing:** Real-time team collaboration
- **Export Options:** Multiple format and sharing capabilities
- **Mobile Responsive:** Optimized for all device sizes
- **Accessibility:** WCAG compliant design and functionality

### Impact
- 10,000+ visualizations created
- 500+ enterprise clients
- 99.9% uptime reliability
- 4.8/5 user satisfaction rating`,
    images: [
      '/images/projects/observer/dashboard1.jpg',
      '/images/projects/observer/visualizations2.jpg',
      '/images/projects/observer/charts3.jpg'
    ],
    category: 'Data Viz',
    year: '2023',
    status: 'Live'
  },
  {
    id: 'casa',
    name: 'Casa',
    description: 'Architectural Visualization',
    content: `# Casa
## Architectural Visualization

**Purpose:** Bringing architectural designs to life through photorealistic visualization

### Vision
Casa specializes in creating stunning architectural visualizations that help architects, developers, and clients visualize projects before they're built.

### Services
- **3D Modeling:** Detailed architectural 3D models and environments
- **Rendering:** Photorealistic images and animations
- **Virtual Tours:** Interactive 360° property experiences
- **AR/VR Integration:** Augmented and virtual reality presentations
- **Animation:** Cinematic project walkthroughs and flyovers

### Technology
- **3D Software:** Industry-standard modeling and rendering tools
- **Real-time Rendering:** Interactive visualization engines
- **Photogrammetry:** 3D scanning and reconstruction
- **AI Enhancement:** Machine learning for realistic materials and lighting
- **Cloud Processing:** Scalable rendering infrastructure

### Project Types
- **Residential:** Single-family homes and luxury properties
- **Commercial:** Office buildings and retail spaces
- **Urban Planning:** Large-scale development projects
- **Interior Design:** Detailed interior visualizations
- **Landscape Architecture:** Outdoor space and garden design

### Client Impact
- 200+ completed projects
- 50+ architectural firms served
- 40% increase in client approval rates
- 95% project delivery on time`,
    images: [
      '/images/projects/casa/architectural1.jpg',
      '/images/projects/casa/virtual2.jpg',
      '/images/projects/casa/modeling3.jpg'
    ],
    category: 'Architecture',
    year: '2023',
    status: 'Live'
  },
  {
    id: 'magic-places',
    name: 'Magic Places',
    description: 'Location-Based Discovery App',
    content: `# Magic Places
## Location-Based Discovery App

**Concept:** Discovering hidden gems and magical places around the world

### Mission
Magic Places helps users discover extraordinary locations, hidden gems, and magical experiences through community-driven recommendations and AI-powered discovery.

### Discovery Features
- **AI Recommendations:** Personalized location suggestions based on preferences
- **Community Reviews:** User-generated content and authentic experiences
- **Augmented Reality:** AR overlays for enhanced exploration
- **Offline Maps:** Download maps for offline exploration
- **Social Sharing:** Share discoveries with friends and family

### Location Categories
- **Natural Wonders:** Breathtaking landscapes and natural phenomena
- **Urban Secrets:** Hidden spots in major cities
- **Cultural Sites:** Historical and cultural landmarks
- **Adventure Spots:** Thrilling outdoor activities and experiences
- **Photography Locations:** Instagram-worthy spots and viewpoints

### Technology
- **GPS Integration:** Precise location tracking and navigation
- **Machine Learning:** Smart recommendation algorithms
- **Computer Vision:** Image recognition for location identification
- **Social Features:** Community building and engagement tools
- **Offline Capability:** Full functionality without internet connection

### Community Impact
- 1M+ places discovered
- 500K+ active users
- 50+ countries covered
- 4.9/5 app store rating`,
    images: [
      '/images/projects/magic-places/app1.jpg',
      '/images/projects/magic-places/ar2.jpg',
      '/images/projects/magic-places/discovery3.jpg'
    ],
    category: 'Travel',
    year: '2024',
    status: 'Live'
  }
]
