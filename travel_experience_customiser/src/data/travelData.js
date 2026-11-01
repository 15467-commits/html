export const steps = [
  { key: "destination", label: "Destination Style" },
  { key: "mood", label: "Mood" },
  { key: "budget", label: "Budget Type" },
  { key: "ageMode", label: "Age Mode" },
];

export const destinationOptions = [
  "Beach Escape",
  "Mountain Retreat",
  "City Adventure",
  "Nature Trail",
  "Cultural Journey",
];

export const moodOptions = [
  "Relaxing",
  "Exciting",
  "Peaceful",
  "Luxurious",
  "Playful",
];

export const budgetOptions = [
  "Budget Friendly",
  "Balanced",
  "Premium",
];

export const ageOptions = [
  "Kids",
  "Teens",
  "Adults",
];

export const recommendationMap = {
  Kids: {
    "Beach Escape": {
      Relaxing: {
        "Budget Friendly": {
          title: "Sunny Family Beach Day",
          description: "A simple beach plan with sand play, snacks, and fun family time.",
          tags: ["Easy travel", "Family safe", "Outdoor fun"],
        },
        Balanced: {
          title: "Beach Resort Fun Pack",
          description: "A cheerful beach stay with kids' activities, pool time, and short adventures.",
          tags: ["Resort fun", "Splash time", "Family comfort"],
        },
        Premium: {
          title: "Luxury Seaside Family Getaway",
          description: "A premium beach stay with private cabana time, family dining, and guided activities.",
          tags: ["Luxury stay", "Family package", "Relaxed pace"],
        },
      },
      Exciting: {
        "Budget Friendly": {
          title: "Busy Beach Explorer Trip",
          description: "Enjoy kite flying, shell hunts, and energetic beach games without overspending.",
          tags: ["Action games", "Low cost", "Energetic"],
        },
        Balanced: {
          title: "Fun Beach Adventure Stay",
          description: "Mix water play, quick sightseeing, and colorful local experiences.",
          tags: ["Adventure mix", "Beach fun", "Balanced cost"],
        },
        Premium: {
          title: "VIP Beach Adventure Escape",
          description: "A lively premium trip with guided play zones, ocean views, and exciting family moments.",
          tags: ["VIP fun", "Ocean view", "Premium adventure"],
        },
      },
    },
    "Mountain Retreat": {
      Relaxing: {
        "Budget Friendly": {
          title: "Cozy Hillside Picnic Trip",
          description: "A calm mountain escape with easy walks, scenic views, and picnic fun.",
          tags: ["Nature calm", "Picnic time", "Budget safe"],
        },
        Balanced: {
          title: "Family Cabin in the Hills",
          description: "A comfortable mountain stay with gentle trails and cozy evenings.",
          tags: ["Cabin stay", "Family warmth", "Fresh air"],
        },
        Premium: {
          title: "Luxury Mountain Family Lodge",
          description: "A peaceful premium retreat with beautiful views and comfort-filled family moments.",
          tags: ["Luxury lodge", "Scenic stay", "Peaceful"],
        },
      },
    },
  },
  Teens: {
    "City Adventure": {
      Exciting: {
        "Budget Friendly": {
          title: "Street Explorer City Break",
          description: "A fast-paced city plan with popular spots, local food, and photo-friendly streets.",
          tags: ["Urban vibe", "Youthful", "Budget"],
        },
        Balanced: {
          title: "Trendy City Explorer Trip",
          description: "Enjoy cool cafes, landmarks, shopping streets, and fun city energy.",
          tags: ["City trend", "Balanced", "Exciting"],
        },
        Premium: {
          title: "Premium City Lights Escape",
          description: "A stylish city plan with premium stays, rooftop views, and immersive experiences.",
          tags: ["City luxury", "Modern", "Premium"],
        },
      },
      Playful: {
        "Budget Friendly": {
          title: "Fun Downtown Discovery Day",
          description: "A playful city outing filled with games, snacks, and colorful places to explore.",
          tags: ["Playful", "Low cost", "Urban fun"],
        },
        Balanced: {
          title: "Creative City Discovery Plan",
          description: "Explore vibrant neighborhoods, fun activities, and memorable teen-friendly stops.",
          tags: ["Creative", "Colorful", "Balanced"],
        },
        Premium: {
          title: "Premium Pop Culture City Tour",
          description: "An energetic premium city trip packed with entertainment and standout experiences.",
          tags: ["Pop culture", "Premium fun", "Memorable"],
        },
      },
    },
    "Beach Escape": {
      Relaxing: {
        Balanced: {
          title: "Sunset Beach Chill Trip",
          description: "A balanced beach trip with calm waves, sunset walks, and relaxing vibes.",
          tags: ["Chill", "Sunset", "Teen-friendly"],
        }
      }
    }
  },
  Adults: {
    "Cultural Journey": {
      Peaceful: {
        Balanced: {
          title: "Heritage and Calm Escape",
          description: "A thoughtful travel plan with museums, local stories, and peaceful exploration.",
          tags: ["Culture", "Quiet", "Balanced"],
        },
        Premium: {
          title: "Luxury Cultural Retreat",
          description: "A refined experience with boutique stays, cultural tours, and elegant local dining.",
          tags: ["Boutique", "Elegant", "Cultural"],
        },
      },
      Luxurious: {
        Balanced: {
          title: "Stylish Heritage Break",
          description: "A smooth journey through iconic places with comfort and curated experiences.",
          tags: ["Stylish", "Curated", "Comfort"],
        },
        Premium: {
          title: "Grand Heritage Luxury Escape",
          description: "A premium cultural journey with exclusive experiences and unforgettable stays.",
          tags: ["Grand", "Exclusive", "Luxury"],
        },
      },
    },
    "Nature Trail": {
      Peaceful: {
        "Budget Friendly": {
          title: "Quiet Forest Trail Escape",
          description: "A grounded outdoor trip with easy trails, fresh air, and peaceful natural surroundings.",
          tags: ["Nature", "Fresh air", "Budget"],
        },
        Balanced: {
          title: "Scenic Nature Wellness Trip",
          description: "A refreshing trip with guided trails, scenic stops, and balanced comfort.",
          tags: ["Wellness", "Scenic", "Balanced"],
        },
        Premium: {
          title: "Luxury Nature Hideaway",
          description: "A calm premium stay surrounded by nature, comfort, and quiet exploration.",
          tags: ["Hideaway", "Premium", "Nature"],
        },
      },
    },
  },
};
