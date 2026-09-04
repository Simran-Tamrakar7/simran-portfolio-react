/**
 * Profile Photos Configuration
 * -------------------------------------------------------------
 * HOW TO ADD OR EDIT PHOTOS:
 * 1. Drop your new image file into the directory: public/images/profile/
 * 2. Add a new object entry to the `profilePhotos` array below.
 * 3. The gallery will automatically display the photos 1 at a time
 *    with interactive navigation, dots, and lightbox zoom!
 * -------------------------------------------------------------
 */

export const profilePhotos = [
  {
    id: 'avatar',
    url: '/images/profile/simran-avatar.png',
    title: 'Simran Tamrakar',
    tag: 'Kathmandu, Nepal',
    description: 'Portrait avatar from the classic simran-portfolio site.',
    alt: 'Portrait of Simran Tamrakar'
  },
  {
    id: 'temple-wheels',
    url: '/images/profile/simran-temple.jpg',
    title: 'Patan Golden Temple',
    tag: 'Kathmandu, Nepal',
    description: 'Standing at Patan Golden Temple (Hiranya Varna Mahavihar) in Nepal surrounded by traditional Buddhist prayer wheels.',
    alt: 'Simran Tamrakar at Patan Golden Temple'
  },
  {
    id: 'scarf-portrait',
    url: '/images/profile/simran-portrait.jpg',
    title: 'Simran Tamrakar',
    tag: 'Kathmandu, Nepal',
    description: 'Warm Ghibli-inspired portrait of Simran with spectacles and cozy winter scarf.',
    alt: 'Simran Tamrakar Portrait'
  }
];
