export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  thumbnail: string;
  backdrop: string;
  videoUrl: string;
  trailerUrl: string;
  isFeatured?: boolean;
  isInMyList?: boolean;
  likes?: number;
}

// Using placeholder images from a reliable CDN for production
const getImageUrl = (filename: string) => {
  // For production, use placeholder images
  const imageMap: Record<string, string> = {
    '1.jpg': 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    '2.jpg': 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
    '3.jpg': 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400',
    '4.jpg': 'https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=400',
    '5.jpg': 'https://images.pexels.com/photos/3861456/pexels-photo-3861456.jpeg?auto=compress&cs=tinysrgb&w=400',
    '11.jpg': 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=400',
    '12.jpg': 'https://images.pexels.com/photos/3861971/pexels-photo-3861971.jpeg?auto=compress&cs=tinysrgb&w=400',
    '13.jpg': 'https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=400',
    '14.jpg': 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg?auto=compress&cs=tinysrgb&w=400',
    '15.jpg': 'https://images.pexels.com/photos/3861975/pexels-photo-3861975.jpeg?auto=compress&cs=tinysrgb&w=400',
    '31.png': 'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=400',
    '32.png': 'https://images.pexels.com/photos/3861977/pexels-photo-3861977.jpeg?auto=compress&cs=tinysrgb&w=400',
    '33.png': 'https://images.pexels.com/photos/3861978/pexels-photo-3861978.jpeg?auto=compress&cs=tinysrgb&w=400',
  };
  
  return imageMap[filename] || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400';
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Ethical Deepfakes',
    description: 'Exploring the ethical implications and potential positive applications of deepfake technology in education and entertainment.',
    genre: ['AI Ethics', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '45 min',
    thumbnail: getImageUrl('1.jpg'),
    backdrop: getImageUrl('1.jpg'),
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1250
  },
  {
    id: '2',
    title: 'Automation Future',
    description: 'A comprehensive look at how automation and AI will reshape industries and the future of work.',
    genre: ['Future Tech', 'Automation'],
    year: 2024,
    rating: 'PG',
    duration: '38 min',
    thumbnail: getImageUrl('2.jpg'),
    backdrop: getImageUrl('2.jpg'),
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 980
  },
  {
    id: '3',
    title: 'Boosted Conversions',
    description: 'How AI-powered marketing tools are revolutionizing customer engagement and conversion rates.',
    genre: ['Marketing Tech', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '32 min',
    thumbnail: getImageUrl('3.jpg'),
    backdrop: getImageUrl('3.jpg'),
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 756
  },
  {
    id: '4',
    title: 'Smart Inbox',
    description: 'Revolutionary email management using AI to prioritize, categorize, and respond to messages intelligently.',
    genre: ['Productivity', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '28 min',
    thumbnail: getImageUrl('4.jpg'),
    backdrop: getImageUrl('4.jpg'),
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 642
  },
  {
    id: '5',
    title: 'Connected Flows',
    description: 'Building seamless workflows that connect different AI tools and platforms for maximum efficiency.',
    genre: ['Workflow', 'Integration'],
    year: 2024,
    rating: 'PG',
    duration: '41 min',
    thumbnail: getImageUrl('5.jpg'),
    backdrop: getImageUrl('5.jpg'),
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 523
  }
];

export const featuredMovie: Movie = movies[0];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'AI Hackathon 2024',
        description: 'The biggest AI hackathon of the year featuring groundbreaking innovations and creative solutions.',
        genre: ['Hackathon', 'Competition'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15min',
        thumbnail: getImageUrl('11.jpg'),
        backdrop: getImageUrl('11.jpg'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 2100
      },
      {
        id: 'trending-2',
        title: 'Machine Learning Mastery',
        description: 'Advanced techniques and strategies for mastering machine learning algorithms and applications.',
        genre: ['Education', 'ML'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45min',
        thumbnail: getImageUrl('12.jpg'),
        backdrop: getImageUrl('12.jpg'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1850
      },
      {
        id: 'trending-3',
        title: 'Neural Network Deep Dive',
        description: 'An in-depth exploration of neural network architectures and their real-world applications.',
        genre: ['Deep Learning', 'Neural Networks'],
        year: 2024,
        rating: 'PG-13',
        duration: '1h 30min',
        thumbnail: getImageUrl('13.jpg'),
        backdrop: getImageUrl('13.jpg'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1650
      },
      {
        id: 'trending-4',
        title: 'Data Science Revolution',
        description: 'How data science is transforming industries and creating new opportunities for innovation.',
        genre: ['Data Science', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20min',
        thumbnail: getImageUrl('14.jpg'),
        backdrop: getImageUrl('14.jpg'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1420
      },
      {
        id: 'trending-5',
        title: 'Quantum Computing Basics',
        description: 'Understanding the fundamentals of quantum computing and its potential impact on technology.',
        genre: ['Quantum', 'Computing'],
        year: 2024,
        rating: 'PG-13',
        duration: '1h 55min',
        thumbnail: getImageUrl('15.jpg'),
        backdrop: getImageUrl('15.jpg'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1320
      }
    ]
  },
  {
    id: 'tech-talks',
    title: 'Tech Talks',
    movies: [
      {
        id: 'tech-1',
        title: 'Future of AI',
        description: 'Leading experts discuss the future directions of artificial intelligence and its societal impact.',
        genre: ['AI', 'Future Tech'],
        year: 2024,
        rating: 'PG',
        duration: '50min',
        thumbnail: getImageUrl('31.png'),
        backdrop: getImageUrl('31.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 890
      },
      {
        id: 'tech-2',
        title: 'Blockchain Innovation',
        description: 'Exploring the latest innovations in blockchain technology and decentralized applications.',
        genre: ['Blockchain', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '42min',
        thumbnail: getImageUrl('32.png'),
        backdrop: getImageUrl('32.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 720
      },
      {
        id: 'tech-3',
        title: 'Cybersecurity Trends',
        description: 'Current trends and future challenges in cybersecurity and digital privacy protection.',
        genre: ['Security', 'Privacy'],
        year: 2024,
        rating: 'PG-13',
        duration: '38min',
        thumbnail: getImageUrl('33.png'),
        backdrop: getImageUrl('33.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 650
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

export const getMostLikedMovies = () => {
  const allMovies = [...movies];
  contentRows.forEach(row => {
    if (row.id !== 'most-liked') {
      allMovies.push(...row.movies);
    }
  });
  
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 8);
};