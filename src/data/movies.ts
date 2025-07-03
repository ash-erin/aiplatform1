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
    backdrop: '/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 456
  }
];

// Bolt.new specific content
const boltNewMovies: Movie[] = [
  {
    id: 'bolt-1',
    title: 'Building with Bolt.new',
    description: 'Learn how to rapidly prototype and deploy web applications using Bolt.new\'s AI-powered development environment.',
    genre: ['Development', 'AI', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: '/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1234
  },
  {
    id: 'bolt-2',
    title: 'AI-Powered Code Generation',
    description: 'Discover how Bolt.new uses artificial intelligence to generate clean, production-ready code.',
    genre: ['AI', 'Development', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png',
    backdrop: '/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 987
  },
  {
    id: 'bolt-3',
    title: 'From Idea to Deployment',
    description: 'Complete walkthrough of taking a project from concept to live deployment using Bolt.new.',
    genre: ['Development', 'Tutorial', 'Deployment'],
    year: 2024,
    rating: 'PG',
    duration: '3h 15m',
    thumbnail: '/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png',
    backdrop: '/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 756
  },
  {
    id: 'bolt-4',
    title: 'Advanced Bolt.new Features',
    description: 'Explore advanced features and best practices for maximizing productivity with Bolt.new.',
    genre: ['Development', 'Advanced', 'Tips'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 543
  }
];

// Expo specific content
const expoMovies: Movie[] = [
  {
    id: 'expo-1',
    title: 'React Native with Expo',
    description: 'Build cross-platform mobile applications using React Native and the Expo development platform.',
    genre: ['Mobile', 'React Native', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '2h 30m',
    thumbnail: '/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    backdrop: '/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1456
  },
  {
    id: 'expo-2',
    title: 'Expo Router Deep Dive',
    description: 'Master navigation in React Native apps using Expo Router for seamless user experiences.',
    genre: ['Mobile', 'Navigation', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '1h 20m',
    thumbnail: '/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
    backdrop: '/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 892
  },
  {
    id: 'expo-3',
    title: 'Publishing to App Stores',
    description: 'Learn how to build and publish your Expo app to both iOS App Store and Google Play Store.',
    genre: ['Mobile', 'Publishing', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/assets/ChatGPT Image 17 giu 2025, 12_26_12.png',
    backdrop: '/assets/ChatGPT Image 17 giu 2025, 12_26_12.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 734
  },
  {
    id: 'expo-4',
    title: 'Expo SDK Features',
    description: 'Explore the powerful features available in the Expo SDK for enhanced mobile development.',
    genre: ['Mobile', 'SDK', 'Features'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: '/assets/ChatGPT Image 17 giu 2025, 13_38_06.png',
    backdrop: '/assets/ChatGPT Image 17 giu 2025, 13_38_06.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 623
  }
];

// Revenue Cat specific content
const revenueCatMovies: Movie[] = [
  {
    id: 'revenuecat-1',
    title: 'Subscription Management with RevenueCat',
    description: 'Implement robust subscription management and in-app purchases using RevenueCat\'s powerful platform.',
    genre: ['Business', 'Subscriptions', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: '/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    backdrop: '/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1123
  },
  {
    id: 'revenuecat-2',
    title: 'Analytics and Revenue Insights',
    description: 'Leverage RevenueCat\'s analytics to understand your subscription business and optimize revenue.',
    genre: ['Analytics', 'Business', 'Revenue'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 856
  },
  {
    id: 'revenuecat-3',
    title: 'Cross-Platform Subscriptions',
    description: 'Build subscription systems that work seamlessly across iOS, Android, and web platforms.',
    genre: ['Cross-Platform', 'Subscriptions', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: '/assets/ChatGPT Image 17 giu 2025, 13_43_45.png',
    backdrop: '/assets/ChatGPT Image 17 giu 2025, 13_43_45.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 692
  },
  {
    id: 'revenuecat-4',
    title: 'Advanced Pricing Strategies',
    description: 'Implement sophisticated pricing models and A/B testing for subscription optimization.',
    genre: ['Business', 'Pricing', 'Strategy'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/assets/on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/assets/on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 445
  }
];

// Tavus specific content
const tavusMovies: Movie[] = [
  {
    id: 'tavus-1',
    title: 'AI Video Generation with Tavus',
    description: 'Create personalized AI-generated videos at scale using Tavus\'s cutting-edge technology.',
    genre: ['AI', 'Video', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    backdrop: '/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 1234
  },
  {
    id: 'tavus-2',
    title: 'Personalized Video Marketing',
    description: 'Transform your marketing campaigns with personalized AI-generated video content.',
    genre: ['Marketing', 'AI', 'Video'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: '/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    backdrop: '/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 987
  },
  {
    id: 'tavus-3',
    title: 'Training Video Automation',
    description: 'Automate the creation of training videos with AI avatars and personalized content delivery.',
    genre: ['Training', 'AI', 'Automation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    backdrop: '/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 756
  },
  {
    id: 'tavus-4',
    title: 'API Integration Guide',
    description: 'Learn how to integrate Tavus API into your applications for seamless video generation.',
    genre: ['API', 'Integration', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: '/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    backdrop: '/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    videoUrl: '/videos/sample-video.mp4',
    trailerUrl: '/videos/sample-trailer.mp4',
    likes: 543
  }
];

// Content rows configuration with original titles
export const contentRows: ContentRow[] = [
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically
  },
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: boltNewMovies
  },
  {
    id: 'expo',
    title: 'Expo',
    movies: expoMovies
  },
  {
    id: 'revenue-cat',
    title: 'Revenue Cat',
    movies: revenueCatMovies
  },
  {
    id: 'tavus',
    title: 'Tavus',
    movies: tavusMovies
  }
];

// Helper function to get most liked movies
export const getMostLikedMovies = (allMovies: Movie[], count: number = 8): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};