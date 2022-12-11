import React from 'react';
import PhotoOverlay from './partials/PhotoOverlay';
import {
  authorImageSources,
  bookImageSources,
  relativeImageSources,
  middleEarthImageSources,
} from '../../util/main/SourceHandler';

function MainOverview({ control }) {
  let content = null;
  console.log(control.main);
  if (control.main === 'photo') {
    if (control.sub === 'author')
      content = <PhotoOverlay data={authorImageSources} />;
    else if (control.sub === 'works')
      content = <PhotoOverlay data={bookImageSources} />;
    else if (control.sub === 'relatives')
      content = <PhotoOverlay data={relativeImageSources} />;
    else if (control.sub === 'middleEarth')
      content = <PhotoOverlay data={middleEarthImageSources} />;
  }

  return content;
}

export default MainOverview;
