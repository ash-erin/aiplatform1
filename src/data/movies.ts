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

// Import all images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';

// AI/Tech themed images
import aiDashboard from '../assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png';
import mobileApp from '../assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png';
import emailInterface from '../assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png';
import hackItPhone from '../assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png';
import revenueCatUI from '../assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png';
import aiAvatar from '../assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png';
import digitalDashboard from '../assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png';
import futuristicWorkspace from '../assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png';
import promptCanvas from '../assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png';
import uiPanel from '../assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png';
import importModal from '../assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png';
import flowBlocks1 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png';
import flowBlocks2 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png';
import uiCanvas1 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png';
import uiCanvas2 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png';
import splitScreen from '../assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png';
import automationDashboard from '../assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Prompt Engineering Masterclass',
    description: 'Learn advanced prompt engineering techniques to maximize AI model performance and create sophisticated AI applications.',
    genre: ['AI', 'Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: aiDashboard,
    backdrop: aiDashboard,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1247
  },
  {
    id: '2',
    title: 'Mobile App Development Revolution',
    description: 'Discover the latest trends in mobile app development, from React Native to Flutter and beyond.',
    genre: ['Mobile', 'Development', 'Tutorial'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: mobileApp,
    backdrop: mobileApp,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 892
  },
  {
    id: '3',
    title: 'Email Automation with AI',
    description: 'Build intelligent email automation systems using cutting-edge AI technologies and machine learning.',
    genre: ['AI', 'Automation', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: emailInterface,
    backdrop: emailInterface,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1156
  },
  {
    id: '4',
    title: 'Hack It: Cybersecurity Fundamentals',
    description: 'Essential cybersecurity concepts and ethical hacking techniques for modern developers and security professionals.',
    genre: ['Cybersecurity', 'Hacking', 'Security'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 30m',
    thumbnail: hackItPhone,
    backdrop: hackItPhone,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 2103
  },
  {
    id: '5',
    title: 'RevenueCat UI: Subscription Management',
    description: 'Master subscription management and monetization strategies using RevenueCat and modern payment systems.',
    genre: ['Business', 'SaaS', 'Monetization'],
    year: 2024,
    rating: 'PG',
    duration: '1h 20m',
    thumbnail: revenueCatUI,
    backdrop: revenueCatUI,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 743
  },
  {
    id: '6',
    title: 'AI Avatar Training Systems',
    description: 'Create personalized AI avatars for training and education using the latest machine learning techniques.',
    genre: ['AI', 'Training', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: aiAvatar,
    backdrop: aiAvatar,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    likes: 1389
  },
  {
    id: '7',
    title: 'Drag & Drop Funnel Builder',
    description: 'Build sophisticated marketing funnels with drag-and-drop interfaces and advanced automation features.',
    genre: ['Marketing', 'Automation', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: digitalDashboard,
    backdrop: digitalDashboard,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 967
  },
  {
    id: '8',
    title: 'Futuristic Workspace Design',
    description: 'Design and implement next-generation digital workspaces with collaborative tools and AI integration.',
    genre: ['Design', 'Workspace', 'Collaboration'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: futuristicWorkspace,
    backdrop: futuristicWorkspace,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    likes: 1521
  },
  {
    id: '9',
    title: 'Advanced Prompt Canvas Techniques',
    description: 'Master advanced prompt engineering using visual canvas interfaces and structured prompt design.',
    genre: ['AI', 'Prompt Engineering', 'Design'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: promptCanvas,
    backdrop: promptCanvas,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    likes: 834
  },
  {
    id: '10',
    title: 'Dynamic UI Panel Systems',
    description: 'Create responsive and dynamic user interface panels with modern web technologies and design patterns.',
    genre: ['UI/UX', 'Web Development', 'Design'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: uiPanel,
    backdrop: uiPanel,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1092
  },
  {
    id: '11',
    title: 'Visual Builder Import Systems',
    description: 'Implement sophisticated import and export systems for visual builders and no-code platforms.',
    genre: ['No-Code', 'Development', 'Tools'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: importModal,
    backdrop: importModal,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    likes: 756
  },
  {
    id: '12',
    title: 'Flow Block Architecture',
    description: 'Design and implement modular flow-based architectures for complex application workflows.',
    genre: ['Architecture', 'Development', 'Workflow'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: flowBlocks1,
    backdrop: flowBlocks1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    likes: 1278
  },
  {
    id: '13',
    title: 'Advanced Flow Connections',
    description: 'Master complex flow connections and data routing in visual programming environments.',
    genre: ['Visual Programming', 'Data Flow', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: flowBlocks2,
    backdrop: flowBlocks2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    likes: 923
  },
  {
    id: '14',
    title: 'Interactive UI Canvas Design',
    description: 'Create interactive and responsive UI canvases with modern design principles and user experience best practices.',
    genre: ['UI/UX', 'Interactive Design', 'Canvas'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: uiCanvas1,
    backdrop: uiCanvas1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1445
  },
  {
    id: '15',
    title: 'Canvas Block Interactions',
    description: 'Implement sophisticated block-based interactions and animations in canvas environments.',
    genre: ['Animation', 'Interaction', 'Canvas'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: uiCanvas2,
    backdrop: uiCanvas2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 1167
  },
  {
    id: '16',
    title: 'Video Sales Automation',
    description: 'Automate your sales process with personalized video content and AI-driven customer engagement.',
    genre: ['Sales', 'Automation', 'Video'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: splitScreen,
    backdrop: splitScreen,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1834
  },
  {
    id: '17',
    title: 'Automation Dashboard Mastery',
    description: 'Build comprehensive automation dashboards with real-time monitoring and intelligent workflow management.',
    genre: ['Automation', 'Dashboard', 'Monitoring'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: automationDashboard,
    backdrop: automationDashboard,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 2156
  },
  {
    id: '18',
    title: 'Machine Learning Fundamentals',
    description: 'Comprehensive introduction to machine learning concepts, algorithms, and practical applications.',
    genre: ['Machine Learning', 'AI', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '3h 10m',
    thumbnail: img1,
    backdrop: img1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 2847
  },
  {
    id: '19',
    title: 'Blockchain Development Workshop',
    description: 'Hands-on workshop covering smart contract development, DeFi protocols, and blockchain architecture.',
    genre: ['Blockchain', 'Cryptocurrency', 'Development'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 45m',
    thumbnail: img2,
    backdrop: img2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    likes: 1923
  },
  {
    id: '20',
    title: 'Cloud Architecture Patterns',
    description: 'Learn scalable cloud architecture patterns and best practices for modern distributed systems.',
    genre: ['Cloud Computing', 'Architecture', 'DevOps'],
    year: 2024,
    rating: 'PG',
    duration: '2h 30m',
    thumbnail: img3,
    backdrop: img3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 1654
  }
];

export const featuredMovie = movies[0];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [movies[3], movies[17], movies[0], movies[5], movies[11], movies[15]]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    movies: [movies[0], movies[5], movies[8], movies[17], movies[2]]
  },
  {
    id: 'development',
    title: 'Development & Programming',
    movies: [movies[1], movies[6], movies[10], movies[11], movies[12], movies[13]]
  },
  {
    id: 'business',
    title: 'Business & Automation',
    movies: [movies[4], movies[6], movies[15], movies[16], movies[2]]
  },
  {
    id: 'design',
    title: 'Design & UI/UX',
    movies: [movies[7], movies[9], movies[13], movies[14], movies[10]]
  },
  {
    id: 'security',
    title: 'Cybersecurity & Hacking',
    movies: [movies[3], movies[18], movies[19]]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 8): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};