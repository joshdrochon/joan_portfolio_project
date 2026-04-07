import { render, screen } from "@testing-library/react";
import ProjectsSection from "../ProjectsSection";

describe("ProjectsSection", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ProjectsSection />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the Projects heading", () => {
    render(<ProjectsSection />);
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  });

  it("renders all 3 project cards", () => {
    render(<ProjectsSection />);
    expect(screen.getAllByText("Lawnboy Website Revamp").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Custom UX/UI Portfolio Wesbite").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Buffalo Wild Wings Mobile App Feature").length).toBeGreaterThan(0);
  });

  it("renders project descriptions", () => {
    render(<ProjectsSection />);
    expect(screen.getAllByText(/partnered with a family owned small business/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/collaborated closely with a software engineer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/orchestrated a game day marketing initiative/i).length).toBeGreaterThan(0);
  });
});
