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
    id: 'scarf-portrait',
    url: '/images/profile/simran-scarf.png',
    title: 'Simran Tamrakar',
    tag: 'Kathmandu, Nepal',
    description: 'Portrait with glasses and plaid scarf.',
    alt: 'Simran Tamrakar, QA Engineer'
  },
  {
    id: 'outdoor-balcony',
    url: '/images/profile/simran-outdoor.png',
    title: 'Simran Tamrakar',
    tag: 'Kathmandu, Nepal',
    description: 'Outdoor portrait on a balcony amid trees.',
    alt: 'Simran Tamrakar, QA Engineer, outdoor portrait'
  },
  {
    id: 'braid-portrait',
    url: '/images/profile/simran-braid.png',
    title: 'Simran Tamrakar',
    tag: 'Kathmandu, Nepal',
    description: 'Portrait with braid and glasses.',
    alt: 'Simran Tamrakar, QA Engineer'
  },
  {
    id: 'temple-courtyard',
    url: '/images/profile/simran-temple-courtyard.png',
    title: 'Patan Golden Temple',
    tag: 'Kathmandu, Nepal',
    description: 'At Patan Golden Temple with prayer wheels.',
    alt: 'Simran Tamrakar, QA Engineer, at Patan Golden Temple'
  }
];
