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

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Revolution',
  description: 'Explore the cutting-edge world of artificial intelligence and its impact on modern society.',
  genre: ['Technology', 'Documentary'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: '/assets/1.jpg',
  backdrop: '/assets/1.jpg',
  videoUrl: '/videos/sample-video.mp4',
  trailerUrl: '/videos/sample-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Neural Networks Unleashed',
    description: 'Deep dive into the world of neural networks and machine learning algorithms.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/assets/1.jpg',
    backdrop: '/assets/1.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Quantum Computing Breakthrough',
    description: 'Witness the latest breakthroughs in quantum computing technology.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 10m',
    thumbnail: '/assets/2.jpg',
    backdrop: '/assets/2.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1456
  },
  {
    id: '3',
    title: 'Blockchain Revolution',
    description: 'Understanding the transformative power of blockchain technology.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/assets/3.jpg',
    backdrop: '/assets/3.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 743
  },
  {
    id: '4',
    title: 'Cybersecurity Frontlines',
    description: 'Exploring the latest in cybersecurity threats and defenses.',
    genre: ['Technology', 'Security'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: '/assets/4.jpg',
    backdrop: '/assets/4.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1089
  },
  {
    id: '5',
    title: 'IoT Connected World',
    description: 'How the Internet of Things is reshaping our daily lives.',
    genre: ['Technology', 'Lifestyle'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/assets/5.jpg',
    backdrop: '/assets/5.jpg',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 567
  }
];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'AI-Powered Automation',
        description: 'Discover how AI is revolutionizing business automation.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/assets/11.jpg',
        backdrop: '/assets/11.jpg',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 2341
      },
      {
        id: 'trending-2',
        title: 'Machine Learning Mastery',
        description: 'Advanced techniques in machine learning and data science.',
        genre: ['Technology', 'Education'],
        year: 2024,
        rating: 'PG-13',
        duration: '2h 20m',
        thumbnail: '/assets/12.jpg',
        backdrop: '/assets/12.jpg',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1876
      },
      {
        id: 'trending-3',
        title: 'Cloud Computing Evolution',
        description: 'The future of cloud infrastructure and services.',
        genre: ['Technology', 'Infrastructure'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: '/assets/13.jpg',
        backdrop: '/assets/13.jpg',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1234
      },
      {
        id: 'trending-4',
        title: 'Data Analytics Deep Dive',
        description: 'Comprehensive guide to modern data analytics.',
        genre: ['Technology', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: '/assets/14.jpg',
        backdrop: '/assets/14.jpg',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 987
      },
      {
        id: 'trending-5',
        title: 'DevOps Best Practices',
        description: 'Essential DevOps practices for modern development.',
        genre: ['Technology', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/assets/15.jpg',
        backdrop: '/assets/15.jpg',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1567
      }
    ]
  },
  {
    id: 'hackathons',
    title: 'Latest Hackathons',
    movies: [
      {
        id: 'hack-1',
        title: 'Global AI Challenge',
        description: 'Join the world\'s largest AI hackathon competition.',
        genre: ['Competition', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '48h Event',
        thumbnail: '/assets/31.png',
        backdrop: '/assets/31.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 3456
      },
      {
        id: 'hack-2',
        title: 'Blockchain Builders',
        description: 'Build the next generation of blockchain applications.',
        genre: ['Competition', 'Blockchain'],
        year: 2024,
        rating: 'PG',
        duration: '72h Event',
        thumbnail: '/assets/32.png',
        backdrop: '/assets/32.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 2789
      },
      {
        id: 'hack-3',
        title: 'Green Tech Innovation',
        description: 'Sustainable technology solutions for the future.',
        genre: ['Competition', 'Sustainability'],
        year: 2024,
        rating: 'PG',
        duration: '36h Event',
        thumbnail: '/assets/33.png',
        backdrop: '/assets/33.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1923
      }
    ]
  },
  {
    id: 'tech-talks',
    title: 'Tech Talks & Conferences',
    movies: [
      {
        id: 'talk-1',
        title: 'Future of AI Development',
        description: 'Leading experts discuss the future of artificial intelligence.',
        genre: ['Conference', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '3h 15m',
        thumbnail: '/assets/ChatGPT Image 17 giu 2025, 12_26_12.png',
        backdrop: '/assets/ChatGPT Image 17 giu 2025, 12_26_12.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 4567
      },
      {
        id: 'talk-2',
        title: 'Startup Pitch Competition',
        description: 'Watch innovative startups pitch their groundbreaking ideas.',
        genre: ['Competition', 'Startup'],
        year: 2024,
        rating: 'PG',
        duration: '2h 30m',
        thumbnail: '/assets/ChatGPT Image 17 giu 2025, 13_38_06.png',
        backdrop: '/assets/ChatGPT Image 17 giu 2025, 13_38_06.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 3234
      },
      {
        id: 'talk-3',
        title: 'Innovation Showcase',
        description: 'Showcase of the most innovative tech solutions.',
        genre: ['Conference', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '4h 0m',
        thumbnail: '/assets/ChatGPT Image 17 giu 2025, 13_43_45.png',
        backdrop: '/assets/ChatGPT Image 17 giu 2025, 13_43_45.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 2876
      }
    ]
  },
  {
    id: 'tutorials',
    title: 'Learning & Tutorials',
    movies: [
      {
        id: 'tutorial-1',
        title: 'Prompt Engineering Mastery',
        description: 'Master the art of prompt engineering for AI systems.',
        genre: ['Education', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '2h 45m',
        thumbnail: '/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1654
      },
      {
        id: 'tutorial-2',
        title: 'Mobile App Development',
        description: 'Complete guide to modern mobile app development.',
        genre: ['Education', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '3h 30m',
        thumbnail: '/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
        backdrop: '/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 2345
      },
      {
        id: 'tutorial-3',
        title: 'Email Automation Systems',
        description: 'Build sophisticated email automation workflows.',
        genre: ['Education', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: '/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
        backdrop: '/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1876
      },
      {
        id: 'tutorial-4',
        title: 'Hack It Mobile Framework',
        description: 'Learn to build apps with the Hack It framework.',
        genre: ['Education', 'Framework'],
        year: 2024,
        rating: 'PG',
        duration: '4h 0m',
        thumbnail: '/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
        backdrop: '/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 3456
      },
      {
        id: 'tutorial-5',
        title: 'RevenueCat Integration',
        description: 'Implement subscription management with RevenueCat.',
        genre: ['Education', 'Monetization'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
        backdrop: '/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 987
      },
      {
        id: 'tutorial-6',
        title: 'AI Avatar Training',
        description: 'Create and train AI avatars for business applications.',
        genre: ['Education', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '2h 30m',
        thumbnail: '/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
        backdrop: '/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 2134
      },
      {
        id: 'tutorial-7',
        title: 'Funnel Builder Mastery',
        description: 'Build high-converting sales funnels with drag-and-drop tools.',
        genre: ['Education', 'Marketing'],
        year: 2024,
        rating: 'PG',
        duration: '3h 15m',
        thumbnail: '/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
        backdrop: '/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1765
      },
      {
        id: 'tutorial-8',
        title: 'Workflow Automation',
        description: 'Design complex automation workflows with visual tools.',
        genre: ['Education', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '2h 45m',
        thumbnail: '/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
        backdrop: '/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1432
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
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