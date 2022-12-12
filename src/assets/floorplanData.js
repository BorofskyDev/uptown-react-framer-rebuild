import bdr1 from '../assets/apt-imgs/1bdr/1-bedroom-floorplan.webp'
import bdr2 from '../assets/apt-imgs/2bdr/2-bedroom-floorplan.webp'
import bdr3 from '../assets/apt-imgs/3bdr/3-bedroom-floorplan.webp'
export default [
  {
    id: 1,
    imageUrl: `${bdr1}`,
    title: '1 Bedroom',
    size: '734 - 807',
    bedrooms: '1',
    bathrooms: '1',
    rent: '1,065 - 1,175',
    tourUrl: 'https://uptownlandingwichita.com/3dtours/?t=1',
  },
  {
    id: 2,
    imageUrl: `${bdr2}`,
    title: '2 Bedroom',
    size: '999 - 1,077',
    bedrooms: '2',
    bathrooms: '1-2',
    rent: '1,285 - 1,510',
    tourUrl: 'https://uptownlandingwichita.com/3dtours/?t=2',
  },
  {
    id: 3,
    imageUrl: `${bdr3}`,
    title: '3 Bedroom',
    size: '1,259 - 1,381',
    bedrooms: '3',
    bathrooms: '2',
    rent: '1,850 - 1,965',
    tourUrl: 'https://uptownlandingwichita.com/3dtours/?t=3',
  },
]
