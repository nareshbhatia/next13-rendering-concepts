import { MovieList } from './MovieList';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/MovieList',
  component: MovieList,
  tags: ['autodocs'],
  argTypes: {
    movies: {
      description: 'A list of movies',
    },
  },
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    movies: [
      {
        id: '1001',
        name: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.3,
        photoUrl: 'https://i.imgur.com/M9Ourpr.jpg',
        certification: 'R',
        genres: ['Drama', 'Crime'],
        cast: ['Tim Robbins', 'Morgan Freeman'],
        runtime: 142,
        favorite: false,
        tagline: 'Fear can hold you prisoner. Hope can set you free.',
        logline:
          'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
      },
      {
        id: '1002',
        name: 'The Godfather',
        year: 1972,
        rating: 9.2,
        photoUrl: 'https://i.imgur.com/0rQ3NE5.jpg',
        certification: 'R',
        genres: ['Drama', 'Crime'],
        cast: ['Marlon Brando', 'Al Pacino'],
        runtime: 175,
        tagline: "An offer you can't refuse.",
        favorite: false,
        logline:
          'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
      },
      {
        id: '1003',
        name: 'The Godfather: Part II',
        year: 1974,
        rating: 9.0,
        photoUrl: 'https://i.imgur.com/5eKaOxa.jpg',
        certification: 'R',
        genres: ['Drama', 'Crime'],
        cast: ['Al Pacino', 'Robert Duvall'],
        runtime: 202,
        tagline:
          "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
        favorite: false,
        logline:
          'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      },
    ],
  },
} satisfies Story;
