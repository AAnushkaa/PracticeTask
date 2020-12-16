import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.wallpaperup.com/uploads/wallpapers/2013/03/20/54255/6078201605b6f67eaf795b91215f2092.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://c.wallhere.com/photos/46/e7/women_long_hair_leather_jackets_looking_at_viewer_hands_on_hips_painted_nails_dark_hair_Sonakshi_Sinha-39612.jpg!d',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://img4.goodfon.com/wallpaper/nbig/0/76/gigi-hadid-dzhidzhi-khadid-model-shatenka-sidit-na-kryshe-po.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://img4.goodfon.com/wallpaper/big/b/d2/martin-kuhn-anna-martin-kuhn-model-girl-brunette-long-hair-s.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://c.wallhere.com/photos/b4/26/leonardo_dicaprio_actor_face_beard-553963.jpg!d',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
