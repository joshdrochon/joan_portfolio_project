import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactFormModal from "../ContactFormModal";

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve({ success: true }) })
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ContactFormModal", () => {
  it("matches snapshot when open", () => {
    const { asFragment } = render(<ContactFormModal isOpen={true} onClose={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not render when closed", () => {
    render(<ContactFormModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders all form fields when open", () => {
    render(<ContactFormModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What's this about?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your message...")).toBeInTheDocument();
  });

  it("renders the send button", () => {
    render(<ContactFormModal isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows success message after form is submitted", async () => {
    render(<ContactFormModal isOpen={true} onClose={() => {}} />);

    await userEvent.type(screen.getByPlaceholderText("Your name"), "Test User");
    await userEvent.type(screen.getByPlaceholderText("your@email.com"), "test@example.com");
    await userEvent.type(screen.getByPlaceholderText("What's this about?"), "Hello");
    await userEvent.type(screen.getByPlaceholderText("Your message..."), "Test message");
    await userEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = vi.fn();
    render(<ContactFormModal isOpen={true} onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });
});
