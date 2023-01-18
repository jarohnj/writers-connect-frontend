import { Outlet, Link } from "react-router-dom";


const Header = () => (
  <>
    <div>
      <div style={{ padding: 50 }}>
        <h1 className="Heading">Writers Circle</h1>
      </div>
      <div style={{ marginTop: 100 }}>
        <h2 className="Sub-header">Where Writers Come to Connect.</h2>
      </div>
    </div>

    <Outlet />
  </>
);

export default Header;
