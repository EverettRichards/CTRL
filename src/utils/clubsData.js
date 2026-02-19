// Club data for Inter-Club Council
// This file contains information about all clubs affiliated with CTRL
// To add/edit a club, modify the clubs array below

import appdev_logo from "../images/club_logos/appdev.png"
import aiclub_logo from "../images/club_logos/aiclub.jpeg"
import acm_logo from "../images/club_logos/acm.png"

export const clubs = [
  {
    name: 'App Development Club',
    logo: appdev_logo, // Path to square logo image
    representative: 'TBD',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: 'https://appdev.sdsu.edu/',
    discord: '#'
  },
  {
    name: 'Artificial Intelligence Club',
    logo: aiclub_logo,
    representative: 'TBD',
    description: 'TBD',
    meetingTime: 'Fridays at 1:00pm',
    meetingLocation: 'GMCS 422',
    website: 'https://aiclub.sdsu.edu/',
    discord: '#'
  },
  {
    name: 'Association for Computing Machinery',
    logo: acm_logo,
    representative: 'Shelvy Millado',
    description: 'The ACM is a vibrant community of tech enthusiasts passionate about innovation, learning, and collaboration. Our mission is to equip students with cutting-edge skills, industry connections, and real-world experience. We host weekly workshops on technical topics, as well as socials and competitions throughout the semester. Open to all majors!',
    meetingTime: 'Mondays at 3:30pm',
    meetingLocation: 'GMCS 405',
    website: 'https://acm.sdsu.edu',
    discord: 'https://discord.gg/UuNuggpKYV'
  },
  {
    name: 'Aztec Blockchain Group',
    logo: "",
    representative: 'TBD',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: '#',
    discord: '#'
  },
  {
    name: 'DataX',
    logo: "",
    representative: 'Yesenia Navarro',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: '#',
    discord: '#'
  },
  {
    name: 'ELeet Coders',
    logo: "",
    representative: 'Aditya Ujawane',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: '#',
    discord: '#'
  },
  {
    name: 'Girls Who Code',
    logo: "",
    representative: 'Samantha Manuyag',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: '#',
    discord: '#'
  },
  {
    name: 'Women in Technology',
    logo: "",
    representative: 'Meghan Dang',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: '#',
    discord: '#'
  },
  {
    name: 'World Computing Organization',
    logo: "",
    representative: 'TBD',
    description: 'TBD',
    meetingTime: 'TBD',
    meetingLocation: 'TBD',
    website: '#',
    discord: '#'
  },
  // Add more clubs here as needed
  // Template:
  // {
  //   name: 'Club Name',
  //   logo: null, // or '/src/images/clubs/clubname.png'
  //   representative: 'Representative Name',
  //   description: 'Brief description of the club',
  //   meetingTime: 'Day at Time',
  //   meetingLocation: 'Building Room',
  //   website: 'https://clubwebsite.com', // or '#' if not available
  //   discord: 'https://discord.gg/invite' // or '#' if not available
  // },
];
