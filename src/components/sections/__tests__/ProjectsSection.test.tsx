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
    expect(screen.getAllByText("Customer UX/UI Portfolio Wesbite").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Buffalo Wild Wings Mobile App Feature").length).toBeGreaterThan(0);
  });

  it("renders placeholder descriptions", () => {
    render(<ProjectsSection />);
    const placeholders = screen.getAllByText(/placeholder — case study/i);
    expect(placeholders).toHaveLength(2);
  });
});
