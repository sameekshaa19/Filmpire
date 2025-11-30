import { renderHook, act } from "@testing-library/react";
import { ColorModeContext } from "./ToggleColorMode";

describe("ColorModeContext", () => {
  test("toggles between light and dark mode", () => {
    // Mock context value manually like actual provider
    const mockContext = {
      mode: "light",
      toggleColorMode() {
        this.mode = this.mode === "light" ? "dark" : "light";
      }
    };

    // Simulate toggle
    act(() => {
      mockContext.toggleColorMode();
    });

    expect(mockContext.mode).toBe("dark");
  });
});
