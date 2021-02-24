import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Typography from "../Typography/Typography";
import { Item } from "../../layout";

const sizingProperties = css`
  width: ${p => p.full && "100%"};
`;

const StyledButton = styled.button`
  ${sizingProperties}

  background-color: ${p =>
    (p.variant === "primary" && p.theme.color.primary.main) ||
    (p.variant === "secondary" && p.theme.color.grey.dark)};
  /* border-radius: var(--size-xs); */
  min-height: var(--size-button);
  color: ${p => p.theme.color.light};
  box-shadow: ${p => p.theme.shadow[0]};
  transition-property: box-shadow, background-color;
  transition-duration: 100ms;

  &:hover {
    box-shadow: ${p => p.theme.shadow[1]};
  }

  &:active {
    background-color: ${p =>
      (p.variant === "primary" && p.theme.color.primary.dark) ||
      (p.variant === "secondary" && p.theme.color.dark)};
  }

  &:focus {
    box-shadow: 0 0 0 var(--size-xs) ${p => p.theme.color.primary.light};
  }
`;

const StyledButtonText = styled.button`
  /* color: ${p => p.theme.color.dark}; */
  transition-property: color, transform;
  transition-duration: 100ms;
  min-height: var(--size-button);
  width: 100%;

  &:hover {
    color: ${p => !p.dark && p.theme.color.primary.main};
  }

  &:focus {
    transform: scale(1.1);
  }
`;

const StyledButtonIconLink = styled.a`
  cursor: pointer;
  transition-property: transform, box-shadow;
  transition-duration: 100ms;
  min-height: var(--size-button);
  min-width: var(--size-button);

  &:hover {
    transform: scale(1.1);
    color: ${p => p.theme.color.primary.main};
  }

  &:focus {
    transform: scale(1.1);
  }
`;

/*
  variant: primary, secondary, text, icon, icon-link, photo-link
*/

export class Button extends Component {
  static propTypes = {
    as: PropTypes.string,
    variant: PropTypes.string
  };

  static defaultProps = {
    variant: "text"
  };

  render() {
    switch (this.props.variant) {
      case "text":
        return (
          <StyledButtonText {...this.props}>
            <Item center padding="stretch-s">
              <Typography variant="button">{this.props.children}</Typography>
            </Item>
          </StyledButtonText>
        );

      case "icon":
        return (
          <StyledButtonText {...this.props}>
            <Item center>
              <Typography>{this.props.children}</Typography>
            </Item>
          </StyledButtonText>
        );

      case "icon-link":
        return (
          <StyledButtonIconLink
            href={this.props.href}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.children}
          </StyledButtonIconLink>
        );

      case "photo-link":
        return (
          <StyledButtonIconLink
            href={this.props.href}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.children}
          </StyledButtonIconLink>
        );

      default:
        if (this.props.link) {
          return (
            <StyledButton
              as="a"
              href={this.props.href}
              target="_blank"
              rel="noreferrer"
              {...this.props}
            >
              <Item center padding="squish-base">
                <Typography>{this.props.children}</Typography>
              </Item>
            </StyledButton>
          );
        } else {
          return (
            <StyledButton {...this.props}>
              <Item center padding="squish-base">
                <Typography>{this.props.children}</Typography>
              </Item>
            </StyledButton>
          );
        }
    }
  }
}

export default Button;
