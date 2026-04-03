import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardsSection from "../CardsSection";

describe("CardsSection", () => {
  it("renders all four card labels", () => {
    render(<CardsSection />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("renders the LinkedIn link with the correct URL", () => {
    render(<CardsSection />);
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/josh-rochon/");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("opens the About Me modal when the About Me card is clicked", async () => {
    render(<CardsSection />);
    await userEvent.click(screen.getByRole("button", { name: /about me/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("opens the contact form when Email is clicked", async () => {
    render(<CardsSection />);
    await userEvent.click(screen.getByRole("button", { name: /^email$/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/say hello/i)).toBeInTheDocument();
  });

  it("closes the About Me modal when Escape is pressed", async () => {
    render(<CardsSection />);
    await userEvent.click(screen.getByRole("button", { name: /about me/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
