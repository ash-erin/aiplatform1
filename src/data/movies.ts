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

// Sample movies data
export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Revolution Summit',
    description: 'Explore the cutting-edge developments in artificial intelligence and machine learning at this groundbreaking summit.',
    genre: ['Technology', 'AI', 'Conference'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: '/assets/1.jpg',
    backdrop: '/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Blockchain Hackathon 2024',
    description: 'Join developers worldwide in building the future of decentralized applications and blockchain technology.',
    genre: ['Technology', 'Blockchain', 'Hackathon'],
    year: 2024,
    rating: 'PG',
    duration: '3h 30m',
    thumbnail: '/assets/2.jpg',
    backdrop: '/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1456
  },
  {
    id: '3',
    title: 'Web3 Developer Workshop',
    description: 'Learn to build decentralized applications with hands-on tutorials and expert guidance.',
    genre: ['Technology', 'Web3', 'Workshop'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/assets/3.jpg',
    backdrop: '/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 734
  },
  {
    id: '4',
    title: 'Mobile App Innovation Lab',
    description: 'Discover the latest trends in mobile development and create innovative applications.',
    genre: ['Technology', 'Mobile', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/assets/4.jpg',
    backdrop: '/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 623
  },
  {
    id: '5',
    title: 'Cybersecurity Challenge',
    description: 'Test your skills in ethical hacking and cybersecurity defense mechanisms.',
    genre: ['Technology', 'Security', 'Challenge'],
    year: 2024,
    rating: 'PG-13',
    duration: '4h 0m',
    thumbnail: '/assets/5.jpg',
    backdrop: '/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 987
  },
  {
    id: '11',
    title: 'Data Science Bootcamp',
    description: 'Master data analysis, machine learning, and statistical modeling in this intensive bootcamp.',
    genre: ['Technology', 'Data Science', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '6h 0m',
    thumbnail: '/assets/11.jpg',
    backdrop: '/assets/on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1123
  },
  {
    id: '12',
    title: 'Cloud Computing Masterclass',
    description: 'Learn to architect and deploy scalable cloud solutions with industry experts.',
    genre: ['Technology', 'Cloud', 'Masterclass'],
    year: 2024,
    rating: 'PG',
    duration: '3h 15m',
    thumbnail: '/assets/12.jpg',
    backdrop: '/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 856
  },
  {
    id: '13',
    title: 'DevOps Pipeline Workshop',
    description: 'Build efficient CI/CD pipelines and automate your development workflow.',
    genre: ['Technology', 'DevOps', 'Workshop'],
    year: 2024,
    rating: 'PG',
    duration: '2h 30m',
    thumbnail: '/assets/13.jpg',
    backdrop: '/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 692
  },
  {
    id: '14',
    title: 'UI/UX Design Sprint',
    description: 'Create stunning user interfaces and experiences through rapid prototyping and testing.',
    genre: ['Design', 'UI/UX', 'Sprint'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/assets/14.jpg',
    backdrop: '/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 445
  },
  {
    id: '15',
    title: 'Startup Pitch Competition',
    description: 'Present your innovative ideas to investors and industry leaders in this exciting competition.',
    genre: ['Business', 'Startup', 'Competition'],
    year: 2024,
    rating: 'PG',
    duration: '2h 45m',
    thumbnail: '/assets/15.jpg',
    backdrop: '/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 778
  },
  {
    id: '31',
    title: 'AI Ethics Symposium',
    description: 'Explore the ethical implications of artificial intelligence and responsible AI development.',
    genre: ['Technology', 'AI', 'Ethics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/assets/31.png',
    backdrop: '/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 567
  },
  {
    id: '32',
    title: 'Quantum Computing Basics',
    description: 'Introduction to quantum computing principles and their potential applications.',
    genre: ['Technology', 'Quantum', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: '/assets/32.png',
    backdrop: '/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 834
  },
  {
    id: '33',
    title: 'Green Tech Innovation',
    description: 'Sustainable technology solutions for environmental challenges and climate change.',
    genre: ['Technology', 'Environment', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/assets/33.png',
    backdrop: '/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 456
  }
];

// Content rows configuration - Fixed to use correct array indices
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [movies[0], movies[1], movies[2], movies[3], movies[4]]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    movies: [movies[1], movies[4], movies[9], movies[0]]
  },
  {
    id: 'workshops',
    title: 'Workshops & Tutorials',
    movies: [movies[2], movies[5], movies[7], movies[8], movies[3]]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    movies: [movies[0], movies[5], movies[10], movies[11]]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    movies: [movies[2], movies[7], movies[1], movies[6]]
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