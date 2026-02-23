export interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    quote: 'That 1 Painter completely transformed our living room. The crew was professional, clean, and finished ahead of schedule. We couldn\'t be happier with the results!',
    rating: 5,
  },
  {
    name: 'James R.',
    location: 'Nashville, TN',
    quote: 'From the free estimate to the final walkthrough, the entire experience was seamless. Our exterior looks brand new and the attention to detail was incredible.',
    rating: 5,
  },
  {
    name: 'Michelle K.',
    location: 'Scottsdale, AZ',
    quote: 'We hired them for cabinet refinishing and the kitchen looks like a completely different room. The team was respectful of our home and delivered outstanding quality.',
    rating: 5,
  },
]
