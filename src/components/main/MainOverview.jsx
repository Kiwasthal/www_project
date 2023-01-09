import React from 'react';
import PhotoOverlay from './partials/PhotoOverlay';
import {
  authorImageSources,
  bookImageSources,
  relativeImageSources,
  middleEarthImageSources,
} from '../../util/main/SourceHandler';
import AuthLoginForm from '../AuthLoginForm';
import AuthRegisterForm from '../AuthRegisterForm';
import AllWorks from '../AllWorks';
import AddWork from './partials/AddWork';
import UpdateWorks from '../UpdateWork';

function MainOverview({ control, auth, user }) {
  let content = null;
  if (control.main === 'photo') {
    if (control.sub === 'author')
      content = <PhotoOverlay data={authorImageSources} />;
    else if (control.sub === 'works')
      content = <PhotoOverlay data={bookImageSources} />;
    else if (control.sub === 'relatives')
      content = <PhotoOverlay data={relativeImageSources} />;
    else if (control.sub === 'middleEarth')
      content = <PhotoOverlay data={middleEarthImageSources} />;
  } else if (control.main === 'admin') {
    if (control.sub === 'login') content = <AuthLoginForm auth={auth} />;
    if (control.sub === 'register') content = <AuthRegisterForm />;
  } else if (control.main === 'works') {
    console.log(auth);
    if (!user) content = <AllWorks />;
    else {
      if (control.sub === 'add') content = <AddWork />;
      else if (control.sub === 'remove') content = <AllWorks auth={user} />;
      else if (control.sub === 'change') content = <UpdateWorks auth={user} />;
    }
  }

  return content;
}

export default MainOverview;
