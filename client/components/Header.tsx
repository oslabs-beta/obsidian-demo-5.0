import { React } from '../../deps.ts';

const Header = (props : any) =>{
  return (<div>
    Header
    <ul>
      <li>
        {/* <Link to='/plants'>Plants</Link> */}
        {/* <reactRouterDom.Link to='/plants'>Plants</reactRouterDom.Link> */}
      </li>
      <li>
        {/* <reactRouterDom.Link to='/countries'>Countries</reactRouterDomLink> */}
      </li>
    </ul>
  </div>)
};

export default Header;