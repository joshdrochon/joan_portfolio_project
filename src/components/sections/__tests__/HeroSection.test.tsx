import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";

describe("HeroSection", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<HeroSection />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the UX Designer heading", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { name: /ux designer/i })).toBeInTheDocument();
  });

  it("renders Joan Miguel name", () => {
    render(<HeroSection />);
    expect(screen.getByText("Joan Miguel")).toBeInTheDocument();
  });

  it("renders the profile image", () => {
    render(<HeroSection />);
    expect(screen.getByAltText("Joan Miguel")).toBeInTheDocument();
  });
});
