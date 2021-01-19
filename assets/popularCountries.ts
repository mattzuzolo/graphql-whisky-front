export type PopularCountry = {
  name: string;
  shortName: string;
  alias: string;
  flagEmojiCode: string;
  img: string;
};

const popularCountries: PopularCountry[] = [
  {
    name: 'Scotland',
    shortName: 'Scotland',
    alias: 'scotland',
    // TODO: Might need to handle emojis better than copy and paste
    flagEmojiCode: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    // TODO: GET RIGHTS TO IMAGES
    img: 'https://live.staticflickr.com/65535/47943444598_d9af95da95_b.jpg',
  },
  {
    name: 'Ireland',
    shortName: 'Ireland',
    alias: 'ireland',
    flagEmojiCode: '🇮🇪',
    img:
      'https://images.unsplash.com/photo-1569531412913-08101790fb10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaG1pbGxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'United States of America',
    shortName: 'USA',
    alias: 'usa',
    flagEmojiCode: '🇺🇸',
    img:
      'https://images.unsplash.com/photo-1528907061761-f2aa74665321?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3750&q=80',
  },
  {
    name: 'Canada',
    shortName: 'Canada',
    alias: 'canada',
    flagEmojiCode: '🇨🇦',
    img:
      'https://images.unsplash.com/photo-1572981135734-1c286884277d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2500&q=80',
  },
  {
    name: 'Japan',
    shortName: 'Japan',
    alias: 'japan',
    flagEmojiCode: '🇯🇵',
    img:
      'https://images.unsplash.com/photo-1601899998044-5bfc57f832a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VudG9yeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    name: 'View all',
    shortName: 'View all',
    alias: '/countries',
    flagEmojiCode: '🇺🇳',
    img:
      'https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4350&q=80',
  },
];

export default popularCountries;
