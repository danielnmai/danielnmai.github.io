import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Headline from "../TheHeadline.vue";

describe("Headline", () => {
  it("renders properly", () => {
    const wrapper = mount(Headline, { props: { title: "Test" } });
    expect(wrapper.text()).toContain("Test");
  });
});
