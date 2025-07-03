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
import aiImg1 from '../assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png';
import aiImg2 from '../assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png';
import aiImg3 from '../assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png';
import aiImg4 from '../assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png';
import aiImg5 from '../assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png';
import aiImg6 from '../assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png';
import aiImg7 from '../assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png';
import aiImg8 from '../assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png';
import aiImg9 from '../assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png';
import aiImg10 from '../assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png';
import aiImg11 from '../assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png';
import aiImg12 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png';
import aiImg13 from '../assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png';
import aiImg14 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png';
import aiImg15 from '../assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png';
import aiImg16 from '../assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png';
import aiImg17 from '../assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png';

import { Movie, ContentRow } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Revolution 2024',
    description: 'Explore the latest breakthroughs in artificial intelligence and machine learning that are reshaping our world.',
    genre: ['Technology', 'AI', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '45 min',
    thumbnail: img1,
    backdrop: img1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1250
  },
  {
    id: '2',
    title: 'Hackathon Chronicles',
    description: 'Follow teams as they compete in the world\'s most prestigious coding competitions and hackathons.',
    genre: ['Competition', 'Programming', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '38 min',
    thumbnail: img2,
    backdrop: img2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 890
  },
  {
    id: '3',
    title: 'Future of Work',
    description: 'How artificial intelligence and automation are transforming the workplace and creating new opportunities.',
    genre: ['Future', 'Work', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '52 min',
    thumbnail: img3,
    backdrop: img3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 2100
  },
  {
    id: '4',
    title: 'Startup Stories',
    description: 'Behind-the-scenes look at the most innovative tech startups disrupting traditional industries.',
    genre: ['Business', 'Startup', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '41 min',
    thumbnail: img4,
    backdrop: img4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 1560
  },
  {
    id: '5',
    title: 'Code Masters',
    description: 'Meet the programming legends who created the technologies we use every day.',
    genre: ['Biography', 'Programming', 'History'],
    year: 2024,
    rating: 'PG',
    duration: '47 min',
    thumbnail: img5,
    backdrop: img5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 1890
  }
];

// AI-focused content using the AI-generated images
export const aiMovies: Movie[] = [
  {
    id: 'ai-1',
    title: 'Prompt Engineering Mastery',
    description: 'Learn advanced techniques for crafting effective prompts and building AI-powered applications.',
    genre: ['AI', 'Education', 'Programming'],
    year: 2024,
    rating: 'PG',
    duration: '35 min',
    thumbnail: aiImg1,
    backdrop: aiImg1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 2340
  },
  {
    id: 'ai-2',
    title: 'Mobile AI Revolution',
    description: 'Discover how AI is transforming mobile applications and user experiences.',
    genre: ['Mobile', 'AI', 'UX'],
    year: 2024,
    rating: 'PG',
    duration: '42 min',
    thumbnail: aiImg2,
    backdrop: aiImg2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 1780
  },
  {
    id: 'ai-3',
    title: 'Email Automation Future',
    description: 'The next generation of intelligent email systems powered by artificial intelligence.',
    genre: ['Automation', 'AI', 'Productivity'],
    year: 2024,
    rating: 'PG',
    duration: '28 min',
    thumbnail: aiImg3,
    backdrop: aiImg3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1450
  },
  {
    id: 'ai-4',
    title: 'Hack It: AI Edition',
    description: 'Competitive programming meets artificial intelligence in this thrilling hackathon series.',
    genre: ['Competition', 'AI', 'Programming'],
    year: 2024,
    rating: 'PG',
    duration: '55 min',
    thumbnail: aiImg4,
    backdrop: aiImg4,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 2890
  },
  {
    id: 'ai-5',
    title: 'Revenue Intelligence',
    description: 'How AI-powered analytics are revolutionizing business revenue optimization.',
    genre: ['Business', 'AI', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '39 min',
    thumbnail: aiImg5,
    backdrop: aiImg5,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 1670
  },
  {
    id: 'ai-6',
    title: 'AI Avatar Training',
    description: 'The future of personalized learning with AI-generated instructors and custom content.',
    genre: ['Education', 'AI', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '44 min',
    thumbnail: aiImg6,
    backdrop: aiImg6,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 2120
  }
];

// Tech talks using numbered images
export const techTalkMovies: Movie[] = [
  {
    id: 'tech-1',
    title: 'Quantum Computing Breakthrough',
    description: 'Latest developments in quantum computing and their implications for the future.',
    genre: ['Quantum', 'Computing', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '48 min',
    thumbnail: img11,
    backdrop: img11,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 1920
  },
  {
    id: 'tech-2',
    title: 'Blockchain Revolution',
    description: 'Understanding the technology behind cryptocurrencies and decentralized systems.',
    genre: ['Blockchain', 'Cryptocurrency', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '36 min',
    thumbnail: img12,
    backdrop: img12,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1540
  },
  {
    id: 'tech-3',
    title: 'Cybersecurity Frontlines',
    description: 'Inside the world of ethical hacking and digital security professionals.',
    genre: ['Security', 'Hacking', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '51 min',
    thumbnail: img13,
    backdrop: img13,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 2450
  },
  {
    id: 'tech-4',
    title: 'Cloud Computing Evolution',
    description: 'How cloud technologies are enabling the next generation of applications.',
    genre: ['Cloud', 'Infrastructure', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '43 min',
    thumbnail: img14,
    backdrop: img14,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 1830
  },
  {
    id: 'tech-5',
    title: 'IoT Connected World',
    description: 'Exploring the Internet of Things and its impact on smart cities and homes.',
    genre: ['IoT', 'Smart Cities', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '40 min',
    thumbnail: img15,
    backdrop: img15,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1690
  }
];

// Innovation series using PNG images
export const innovationMovies: Movie[] = [
  {
    id: 'innovation-1',
    title: 'Design Thinking Revolution',
    description: 'How design thinking is transforming product development and user experience.',
    genre: ['Design', 'Innovation', 'UX'],
    year: 2024,
    rating: 'PG',
    duration: '37 min',
    thumbnail: img31,
    backdrop: img31,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 1340
  },
  {
    id: 'innovation-2',
    title: 'Sustainable Tech Solutions',
    description: 'Green technology innovations addressing climate change and environmental challenges.',
    genre: ['Sustainability', 'Environment', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '46 min',
    thumbnail: img32,
    backdrop: img32,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 2180
  },
  {
    id: 'innovation-3',
    title: 'Space Tech Pioneers',
    description: 'The latest innovations in space technology and commercial space exploration.',
    genre: ['Space', 'Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '49 min',
    thumbnail: img33,
    backdrop: img33,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 2760
  }
];

// Advanced AI content using more AI images
export const advancedAiMovies: Movie[] = [
  {
    id: 'advanced-ai-1',
    title: 'Visual AI Builder',
    description: 'Building sophisticated AI applications with visual programming interfaces.',
    genre: ['AI', 'Visual Programming', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '33 min',
    thumbnail: aiImg7,
    backdrop: aiImg7,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 1580
  },
  {
    id: 'advanced-ai-2',
    title: 'Collaborative AI Workspace',
    description: 'The future of team collaboration with AI-powered digital whiteboards and tools.',
    genre: ['Collaboration', 'AI', 'Productivity'],
    year: 2024,
    rating: 'PG',
    duration: '41 min',
    thumbnail: aiImg8,
    backdrop: aiImg8,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1920
  },
  {
    id: 'advanced-ai-3',
    title: 'AI Flow Architecture',
    description: 'Designing and implementing complex AI workflows for enterprise applications.',
    genre: ['AI', 'Architecture', 'Enterprise'],
    year: 2024,
    rating: 'PG',
    duration: '38 min',
    thumbnail: aiImg9,
    backdrop: aiImg9,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 1450
  },
  {
    id: 'advanced-ai-4',
    title: 'AI Economics Dashboard',
    description: 'Understanding the economic impact of AI through advanced analytics and visualization.',
    genre: ['Economics', 'AI', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '45 min',
    thumbnail: aiImg10,
    backdrop: aiImg10,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1760
  },
  {
    id: 'advanced-ai-5',
    title: 'AI Import Systems',
    description: 'Advanced techniques for importing and processing data in AI applications.',
    genre: ['AI', 'Data Processing', 'Systems'],
    year: 2024,
    rating: 'PG',
    duration: '42 min',
    thumbnail: aiImg11,
    backdrop: aiImg11,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 1380
  },
  {
    id: 'advanced-ai-6',
    title: 'Connected AI Workflows',
    description: 'Building interconnected AI systems that work together seamlessly.',
    genre: ['AI', 'Workflows', 'Integration'],
    year: 2024,
    rating: 'PG',
    duration: '39 min',
    thumbnail: aiImg12,
    backdrop: aiImg12,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 1620
  }
];

// Automation content
export const automationMovies: Movie[] = [
  {
    id: 'automation-1',
    title: 'Smart Automation Networks',
    description: 'Building intelligent automation systems with advanced node-based architectures.',
    genre: ['Automation', 'Networks', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '44 min',
    thumbnail: aiImg17,
    backdrop: aiImg17,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 2340
  },
  {
    id: 'automation-2',
    title: 'Video Sales Revolution',
    description: 'How personalized video content is transforming sales and marketing strategies.',
    genre: ['Sales', 'Video', 'Marketing'],
    year: 2024,
    rating: 'PG',
    duration: '36 min',
    thumbnail: aiImg16,
    backdrop: aiImg16,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 1890
  }
];

export const featuredMovie: Movie = movies[0];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [...movies, ...aiMovies.slice(0, 3)]
  },
  {
    id: 'ai-series',
    title: 'AI & Machine Learning',
    movies: aiMovies
  },
  {
    id: 'tech-talks',
    title: 'Tech Talks',
    movies: techTalkMovies
  },
  {
    id: 'innovation',
    title: 'Innovation Spotlight',
    movies: innovationMovies
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI Concepts',
    movies: advancedAiMovies
  },
  {
    id: 'automation',
    title: 'Automation Future',
    movies: automationMovies
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 8): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};