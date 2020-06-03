import GSHeader from "../layouts/header-get-started.js";

const GSBaseLayout = (props) => (
  <div>
    <GSHeader />
    {props.children}
  </div>
);

export default GSBaseLayout;
