import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Spring, Trail, config } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";

const StyledSidebar = styled.section`
  /* width: ${p => p.theme.incrementFixed(12)}; */
  text-align: center;
  width: 100%;
  height: 100%;

  .container-main {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  .item-photo {
    width: ${p => p.theme.increment(8)};
    height: ${p => p.theme.increment(8)};
    z-index: 1;
  }

  .item-name {
    color: ${p => p.theme.color.primary.dark};
  }

  .item-social {
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .box-sidebar-nav {
    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      display: none;
    }
  }

  .box-copyright {
    margin: 0 auto;
  }

  .item-lje {
    width: var(--size-xl);
  }
`;

export default class extends Component {
  static propTypes = {};

  static defaultProps = {
    sidebarContent: {
      profileImage:
        "https://lh3.googleusercontent.com/5B2QG4NWSpCep-rkDybogB0zWbmXULfBetcg6zbew_XmZrshjNMMbIu_tPbusYLUC9L4UamRgfGSYt-Cy7GYf9dxo86Kz1NVwQLIjCsjHsjyeTMgJ407tVu-2RVHc9R5m6JT7_k06X3aV9OixCJRdOyUV3hzk9IZd9qFf_JP-ALDWPH_4DCxfA2TnoePabyVEwOELhslqokrG2zjFEtWlI_BWsWW4fBpZQGxOMh9M3JhuDVoexX8PxhfJP6sZD-hnM9zEwj3YNGFQj4pK6O0eH_ix9KIu8h1tvUvpI1PKp6yaT_Sfg6hxbzk5C1vOghtzKhjcdsk0TsWYsLeQ4meCkVB5bal0rg9lW__ch8QPPjseX8VELoMgU9TCCJ3S2Xab_kxuU1cWH3vUMPFUiIIK-XV9MyCFFP8CuzNF4uYsxpNNa0D6rjPws-ZZ-sXc119mBU-meFW7Jv5mx78WJ8jaDfizWyYlQd5c2RtXOngJ-kZY1uffThe4YTmXg8izoJCl4jrGVsb9qDqITSox56BndxtCaOvMegfWj_tNhFjwNDlvaxJ-RmPU05BkQ97ONhn3rbooAcbnYhkGytQuOpp_BT4D0DksHrCIwL0GVPJx9lsJ3Wc3MzjBVKVngge4WH5t0HXoT2ylhmtxNZgaQBIRHt15s7GzwuDRy8CiC7LyYeqS939zNpQdgik55hv=w964-h953-no?authuser=0",
      name: "Riski Andriyanto",
      title: "Software Engineer",
      socialLinks: [
        {
          class: "fab fa-2x fa-github",
          href: "https://github.com/andrizan"
        },
        {
          class: "fab fa-2x fa-linkedin",
          href: "https://www.linkedin.com/in/andrizan/"
        },
        {
          class: "fab fa-2x fa-twitter",
          href: "https://twitter.com/_andrizan"
        }
      ],
      navMenu: [
        {
          title: "Projects",
          href: "#projects"
        },
        {
          title: "Skills",
          href: "#skills"
        },
        {
          title: "About Me",
          href: "#about-me"
        }
      ],
      footer: {
        // text: "Made by LJEsp",
        // imageLink:
        //   "https://avatars1.githubusercontent.com/u/36854142?s=460&v=4",
        // imageHref: "https://github.com/LJEsp"
      }
    }
  };

  render() {
    const { sidebarContent, handleMenuClick } = this.props;

    return (
      <StyledSidebar>
        <Container name="main" padding="inset-base">
          <Box column align="center">
            <Spring
              native
              from={{ opacity: "0", transform: "rotate(180deg)" }}
              to={{ opacity: "1", transform: "rotate(0deg)" }}
            >
              {props => (
                <Item name="photo" animate={props} margin="stack-base">
                  <Photo rounded>
                    <img
                      src={sidebarContent.profileImage}
                      alt={sidebarContent.name}
                    />
                  </Photo>
                </Item>
              )}
            </Spring>

            {/* >>> Name */}
            <Spring
              delay={200}
              native
              from={{ opacity: "0", transform: "translateY(-10em)" }}
              to={{ opacity: "1", transform: "translateY(0em)" }}
            >
              {props => (
                <Item name="name" animate={props} center margin="stack-base">
                  <Typography as="h3">{sidebarContent.name}</Typography>
                </Item>
              )}
            </Spring>

            {/* >>> Title */}
            <Spring
              delay={400}
              native
              from={{ transform: "translateY(2em)", opacity: "0" }}
              to={{ transform: "translateY(0)", opacity: "1" }}
            >
              {props => (
                <Item animate={props} center margin="stack-base">
                  <Typography as="h4">{sidebarContent.title}</Typography>
                </Item>
              )}
            </Spring>

            {/* >>> Social links */}
            <Box wrap margin="stack-base" justify="center">
              <Trail
                delay={600}
                config={config.stiff}
                items={sidebarContent.socialLinks}
                native
                keys={item => item.class}
                from={{ opacity: "0" }}
                to={{ opacity: "1" }}
              >
                {item => props => (
                  <Item
                    name="class"
                    key={item.class}
                    animate={props}
                    padding="squish-m"
                  >
                    <Button variant="icon-link" href={item.href}>
                      <i className={item.class} />
                    </Button>
                  </Item>
                )}
              </Trail>
            </Box>

            {/* >>> Nav */}
            <Box name="sidebar-nav" column as="nav" margin="stack-base">
              <Trail
                delay={800}
                config={config.stiff}
                native
                items={sidebarContent.navMenu}
                keys={item => item.title}
                from={{ opacity: "0", transform: "translateX(-10em)" }}
                to={{ opacity: "1", transform: "translateX(0)" }}
              >
                {item => props => (
                  <Item key={item.title} animate={props} padding="squish-m">
                    <Button
                      onClick={() => handleMenuClick(item.title)}
                      variant="text"
                    >
                      {item.title}
                    </Button>
                  </Item>
                )}
              </Trail>
            </Box>
          </Box>

          <Spring
            delay={1500}
            config={config.stiff}
            native
            from={{ transform: "translateY(20em)" }}
            to={{ transform: "translateY(0)" }}
          >
            {props => (
              <Box name="copyright" animate={props} align="center">
                <Item margin="inline-m">
                  <Typography>{sidebarContent.footer.text}</Typography>
                </Item>

                <Item name="lje">
                  <Button
                    variant="photo-link"
                    href={sidebarContent.footer.imageHref}
                  >
                    <Photo variant="cover" rounded>
                      <img src={sidebarContent.footer.imageLink} alt="" />
                    </Photo>
                  </Button>
                </Item>
              </Box>
            )}
          </Spring>
        </Container>
      </StyledSidebar>
    );
  }
}
