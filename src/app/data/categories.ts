import { Category } from '@/types';

export const categories: Category[] = [
  {
    name: 'Bridal Makeup',
    slug: 'bridal',
    subcategories: [
      { name: 'Traditional Bridal', slug: 'traditional-bridal' },
      { name: 'Contemporary Bridal', slug: 'contemporary-bridal' },
      { name: 'Destination Wedding Looks', slug: 'destination-wedding' },
    ],
  },
  {
    name: 'Party & Glam Makeup',
    slug: 'party-glam',
    subcategories: [
      { name: 'Cocktail Party', slug: 'cocktail-party' },
      { name: 'Red Carpet Glam', slug: 'red-carpet-glam' },
      { name: 'Evening Party Looks', slug: 'evening-party' },
    ],
  },
  {
    name: 'Casual / Everyday Makeup',
    slug: 'casual-everyday',
    subcategories: [
      { name: 'Office Look', slug: 'office-look' },
      { name: 'Minimal/Natural', slug: 'minimal-natural' },
      { name: 'Day Out/Brunch', slug: 'day-out-brunch' },
    ],
  },
  {
    name: 'Fashion & Editorial Makeup',
    slug: 'fashion-editorial',
    subcategories: [
        { name: 'Runway', slug: 'runway' },
        { name: 'Photoshoot Makeup', slug: 'photoshoot' },
        { name: 'Creative/High Fashion', slug: 'high-fashion' },
    ],
  },
  {
    name: 'Festive / Cultural Makeup',
    slug: 'festive-cultural',
    subcategories: [
        { name: 'Diwali/Eid/Christmas Looks', slug: 'diwali-eid-christmas' },
        { name: 'Navratri/Garba', slug: 'navratri-garba' },
        { name: 'Regional Styles', slug: 'regional-styles' },
    ],
  },
  {
    name: 'Specialty Makeup',
    slug: 'specialty',
    subcategories: [
        { name: 'HD/Camera Ready', slug: 'hd-camera-ready' },
        { name: 'Airbrush Makeup', slug: 'airbrush' },
        { name: 'Theatrical/Stage', slug: 'theatrical-stage' },
    ],
  },
];