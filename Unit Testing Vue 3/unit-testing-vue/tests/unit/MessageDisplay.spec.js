import MessageDisplay from "@/components/MessageDisplay.vue";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import { flushPromises } from "flush-promises";

jest.mock("@/services/axios");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("DisplayMessage", () => {
  it("Calls getMessage annd displays message", async () => {
    const mockMessage = "Hello from db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find("[data-tesxtid='message']").text();
    expect(message).toEqual(mockMessage);
  });

  it("Display an error when getMessage call fails", async () => {
    const mockError = "Oops! Something went wrong!";
    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const displayedError = wrapper
      .find("[data-tesxtid='message-error']")
      .text();
    expect(displayedError).toEqual(mockError);
  });
});
