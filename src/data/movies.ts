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

export interface ContentRow {
  id: string;
  title: string;
  movies: Movie[];
}

// Featured movie for hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in artificial intelligence, hackathons, and cutting-edge technology innovations.',
  genre: ['Technology', 'AI', 'News'],
  year: 2024,
  rating: 'PG',
  duration: '45m',
  thumbnail: '/assets/ChatGPT Image 26 giu 2025, 11_48_17.png',
  backdrop: '/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: '/videos/header.mp4',
  trailerUrl: '/videos/header.mp4',
  isFeatured: true,
  likes: 1250
};

// Sample movies data using existing assets
export const movies: Movie[] = [
  {
    id: '1',
    title: 'Content 1',
    description: 'Description for content 1',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: '/assets/1.jpg',
    backdrop: '/assets/1.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Content 2',
    description: 'Description for content 2',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '3h 30m',
    thumbnail: '/assets/2.jpg',
    backdrop: '/assets/2.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1456
  },
  {
    id: '3',
    title: 'Content 3',
    description: 'Description for content 3',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/assets/3.jpg',
    backdrop: '/assets/3.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 734
  },
  {
    id: '4',
    title: 'Content 4',
    description: 'Description for content 4',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/assets/4.jpg',
    backdrop: '/assets/4.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 623
  },
  {
    id: '5',
    title: 'Content 5',
    description: 'Description for content 5',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '4h 0m',
    thumbnail: '/assets/5.jpg',
    backdrop: '/assets/5.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 987
  },
  {
    id: '11',
    title: 'Content 11',
    description: 'Description for content 11',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '6h 0m',
    thumbnail: '/assets/11.jpg',
    backdrop: '/assets/11.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1123
  },
  {
    id: '12',
    title: 'Content 12',
    description: 'Description for content 12',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '3h 15m',
    thumbnail: '/assets/12.jpg',
    backdrop: '/assets/12.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 856
  },
  {
    id: '13',
    title: 'Content 13',
    description: 'Description for content 13',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 30m',
    thumbnail: '/assets/13.jpg',
    backdrop: '/assets/13.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 692
  },
  {
    id: '14',
    title: 'Content 14',
    description: 'Description for content 14',
    genre: ['Design'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/assets/14.jpg',
    backdrop: '/assets/14.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 445
  },
  {
    id: '15',
    title: 'Content 15',
    description: 'Description for content 15',
    genre: ['Business'],
    year: 2024,
    rating: 'PG',
    duration: '2h 45m',
    thumbnail: '/assets/15.jpg',
    backdrop: '/assets/15.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 778
  },
  {
    id: '31',
    title: 'Content 31',
    description: 'Description for content 31',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/assets/31.png',
    backdrop: '/assets/31.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 567
  },
  {
    id: '32',
    title: 'Content 32',
    description: 'Description for content 32',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: '/assets/32.png',
    backdrop: '/assets/32.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 834
  },
  {
    id: '33',
    title: 'Content 33',
    description: 'Description for content 33',
    genre: ['Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/assets/33.png',
    backdrop: '/assets/33.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 456
  }
];

// Content rows configuration - keeping original structure
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [movies[0], movies[1], movies[2], movies[3], movies[4]]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [movies[5], movies[6], movies[7], movies[8]]
  },
  {
    id: 'popular',
    title: 'Popular',
    movies: [movies[1], movies[4], movies[9], movies[0]]
  },
  {
    id: 'recommended',
    title: 'Recommended for You',
    movies: [movies[2], movies[5], movies[7], movies[8], movies[3]]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

// Helper function to get most liked movies
export const getMostLikedMovies = (allMovies: Movie[], count: number = 8): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};