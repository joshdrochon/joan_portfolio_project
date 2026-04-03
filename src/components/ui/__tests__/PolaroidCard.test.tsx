import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PolaroidCard from "../PolaroidCard";

describe("PolaroidCard", () => {
  it("renders the label", () => {
    render(<PolaroidCard imageUrl="/test.jpg" label="Projects" onClick={() => {}} />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<PolaroidCard imageUrl="/test.jpg" label="Projects" onClick={onClick} />);
    await userEvent.click(screen.getByRole("button", { name: /projects/i }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("calls onClick when Enter is pressed", async () => {
    const onClick = vi.fn();
    render(<PolaroidCard imageUrl="/test.jpg" label="Projects" onClick={onClick} />);
    screen.getByRole("button").focus();
    await userEvent.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders the image with correct alt text", () => {
    render(<PolaroidCard imageUrl="/test.jpg" label="Resume" onClick={() => {}} />);
    expect(screen.getByAltText("Resume")).toBeInTheDocument();
  });
});
