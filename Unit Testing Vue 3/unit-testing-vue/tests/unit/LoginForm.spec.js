import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  test("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find("input[type='text']");
    input.setValue("Rodrigo Miranda");
    wrapper.trigger("submit");

    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayLoad = { name: "Rodrigo Miranda" };
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayLoad);
  });
});
