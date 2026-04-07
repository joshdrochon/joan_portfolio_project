import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResumeModal from "../ResumeModal";

describe("ResumeModal", () => {
  it("matches snapshot when open", () => {
    const { asFragment } = render(<ResumeModal isOpen={true} onClose={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not render when closed", () => {
    render(<ResumeModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open", () => {
    render(<ResumeModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders Joan Miguel name", () => {
    render(<ResumeModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByText("Joan Miguel")).toBeInTheDocument();
  });

  it("renders the Save Copy download link", () => {
    render(<ResumeModal isOpen={true} onClose={() => {}} />);
    const link = screen.getByRole("link", { name: /save copy/i });
    expect(link).toHaveAttribute("href", "/resume.pdf");
    expect(link).toHaveAttribute("download");
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={onClose} />);
    await userEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });
});
