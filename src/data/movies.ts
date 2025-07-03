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

// Function to get image URLs from assets folder
const getImageUrl = (filename: string) => {
  return `/assets/${filename}`;
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
      },
      {
        id: 'trending-6',
        title: 'AI-Powered Automation',
        description: 'Discover how AI is revolutionizing business processes and workflow automation.',
        genre: ['AI', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35min',
        thumbnail: getImageUrl('a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png'),
        backdrop: getImageUrl('a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1180
      },
      {
        id: 'trending-7',
        title: 'Mobile Innovation Hub',
        description: 'Exploring the latest trends in mobile app development and user experience design.',
        genre: ['Mobile', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25min',
        thumbnail: getImageUrl('a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png'),
        backdrop: getImageUrl('a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 1050
      },
      {
        id: 'trending-8',
        title: 'Hackathon Success Stories',
        description: 'Real stories from successful hackathon participants and their journey to innovation.',
        genre: ['Hackathon', 'Success'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40min',
        thumbnail: getImageUrl('a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png'),
        backdrop: getImageUrl('a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 920
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
      },
      {
        id: 'tech-4',
        title: 'Revenue Optimization',
        description: 'Advanced strategies for optimizing revenue streams using data analytics and AI.',
        genre: ['Business', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '45min',
        thumbnail: getImageUrl('a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png'),
        backdrop: getImageUrl('a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 580
      },
      {
        id: 'tech-5',
        title: 'AI Training Revolution',
        description: 'How AI-generated avatars are transforming corporate training and employee onboarding.',
        genre: ['AI', 'Training'],
        year: 2024,
        rating: 'PG',
        duration: '35min',
        thumbnail: getImageUrl('ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png'),
        backdrop: getImageUrl('ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 510
      }
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    movies: [
      {
        id: 'workflow-1',
        title: 'Digital Funnel Builder',
        description: 'Master the art of building high-converting digital funnels with drag-and-drop interfaces.',
        genre: ['Marketing', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '52min',
        thumbnail: getImageUrl('digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png'),
        backdrop: getImageUrl('digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 780
      },
      {
        id: 'workflow-2',
        title: 'Connected Workspace',
        description: 'Creating seamless workflows that connect multiple tools and platforms for maximum productivity.',
        genre: ['Productivity', 'Integration'],
        year: 2024,
        rating: 'PG',
        duration: '48min',
        thumbnail: getImageUrl('futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png'),
        backdrop: getImageUrl('futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 690
      },
      {
        id: 'workflow-3',
        title: 'Automation Dashboard',
        description: 'Building comprehensive automation dashboards with advanced node connections and grouping.',
        genre: ['Automation', 'Dashboard'],
        year: 2024,
        rating: 'PG',
        duration: '44min',
        thumbnail: getImageUrl('futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png'),
        backdrop: getImageUrl('futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 620
      }
    ]
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    movies: [
      {
        id: 'ui-1',
        title: 'Prompt Chain Design',
        description: 'Designing intuitive interfaces for AI prompt chains and workflow automation.',
        genre: ['UI/UX', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '40min',
        thumbnail: getImageUrl('__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png'),
        backdrop: getImageUrl('__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 540
      },
      {
        id: 'ui-2',
        title: 'Visual Builder Interface',
        description: 'Creating user-friendly visual builders with import modals and drag-and-drop functionality.',
        genre: ['UI/UX', 'Tools'],
        year: 2024,
        rating: 'PG',
        duration: '36min',
        thumbnail: getImageUrl('on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png'),
        backdrop: getImageUrl('on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 480
      },
      {
        id: 'ui-3',
        title: 'Flow Block Design',
        description: 'Designing effective flow blocks and connection interfaces for complex workflows.',
        genre: ['UI/UX', 'Workflow'],
        year: 2024,
        rating: 'PG',
        duration: '42min',
        thumbnail: getImageUrl('on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png'),
        backdrop: getImageUrl('on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 420
      },
      {
        id: 'ui-4',
        title: 'Interactive Dashboards',
        description: 'Building interactive dashboards with dynamic panels and real-time data visualization.',
        genre: ['UI/UX', 'Dashboard'],
        year: 2024,
        rating: 'PG',
        duration: '38min',
        thumbnail: getImageUrl('on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png'),
        backdrop: getImageUrl('on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 390
      }
    ]
  },
  {
    id: 'video-marketing',
    title: 'Video Marketing',
    movies: [
      {
        id: 'video-1',
        title: 'Personalized Video Sales',
        description: 'How to create personalized video content that scales across multiple prospects and customers.',
        genre: ['Marketing', 'Video'],
        year: 2024,
        rating: 'PG',
        duration: '46min',
        thumbnail: getImageUrl('split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png'),
        backdrop: getImageUrl('split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png'),
        videoUrl: '/videos/sample-video.mp4',
        trailerUrl: '/videos/sample-trailer.mp4',
        likes: 670
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