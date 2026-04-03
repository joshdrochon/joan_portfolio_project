import { render, screen } from "@testing-library/react";
import ProjectsSection from "../ProjectsSection";

describe("ProjectsSection", () => {
  it("renders the Projects heading", () => {
    render(<ProjectsSection />);
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  });

  it("renders all 3 project placeholder cards", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

  it("renders placeholder descriptions", () => {
    render(<ProjectsSection />);
    const placeholders = screen.getAllByText(/placeholder — case study/i);
    expect(placeholders).toHaveLength(3);
  });
});
