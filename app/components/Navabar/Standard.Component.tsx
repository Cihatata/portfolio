import React from "react";
import { Disclosure } from "@headlessui/react";
import { Container, Content, Navbar } from "..";
import { ACTIONS } from "@/app/data/actions";
import { Icon } from "@iconify/react";

const DisclousureNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Disclosure as="nav" className="fixed top-5 left-0 w-full z-10">
      {children}
    </Disclosure>
  );
};

export const Standard = () => {
  return (
    <DisclousureNav>
      <Container.Nav>
        <Content.Nav>
          <button>
            <Icon icon="feather:menu" />
          </button>
          {/* <Navbar.Dropdown items={ACTIONS}>
            <button>
              <Icon icon="feather:menu" />
            </button>
          </Navbar.Dropdown>
          <Navbar.Dropdown items={ACTIONS}>
            <button>
              <Icon icon="feather:menu" />
            </button>
          </Navbar.Dropdown> */}
        </Content.Nav>
      </Container.Nav>
    </DisclousureNav>
  );
};
