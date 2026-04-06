import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AboutMeModal from "../AboutMeModal";

describe("AboutMeModal", () => {
  it("does not render when closed", () => {
    render(<AboutMeModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open", () => {
    render(<AboutMeModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders greeting and subtitle", () => {
    render(<AboutMeModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/hi, i'm joan miguel/i)).toBeInTheDocument();
    expect(screen.getByText(/ux designer \| asu alum/i)).toBeInTheDocument();
  });

  it("renders all bio sections", () => {
    render(<AboutMeModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/why i design/i)).toBeInTheDocument();
    expect(screen.getByText(/life outside the pixels/i)).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();
    render(<AboutMeModal isOpen={true} onClose={onClose} />);
    await userEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when the backdrop is clicked", async () => {
    const onClose = vi.fn();
    render(<AboutMeModal isOpen={true} onClose={onClose} />);
    await userEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = vi.fn();
    render(<AboutMeModal isOpen={true} onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });
});
