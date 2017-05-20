const root = window.location.pathname.split('/')[1] ? `/${window.location.pathname.split('/')[1]}` : '';
console.log(window.location.pathname);
export default root;
