import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./breadCrumbs.scss";
import Container from "../container/Container";
import gsap from "gsap";
import { useLayoutEffect } from "react";
const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".breadcrumbs", { opacity: 0 });

    tl.to(".breadcrumbs", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 2,
    });
  }, []);

  return (
    <Container>
      <div className="breadcrumbs">
        <div className="breadcrumbs__wrapper">{crumbs}</div>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
