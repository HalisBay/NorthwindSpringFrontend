import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40Fu-NeUSjyCvIqFeN5Fx02_WMgzmglt0xw&usqp=CAU"
        />
        <Dropdown pointing="top right" text="Halis">
          <Dropdown.Menu>
            <Dropdown.Item text="bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
