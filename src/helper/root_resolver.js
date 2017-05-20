/* global IS_PROD:true
  global IS_GITHUB_PROJECT:true
*/
const root = IS_PROD && IS_GITHUB_PROJECT ? `/${window.location.pathname.split('/')[1]}` : '';
export default root;
