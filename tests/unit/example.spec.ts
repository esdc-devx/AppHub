import { shallowMount } from "@vue/test-utils";
import DashBoardTable from "@/components/DashBoardTable.vue";

describe("DashBoardTable.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Code Coverage Status";
    const wrapper = shallowMount(DashBoardTable, {
      propsData: { msg }
    });
    expect(wrapper.text()).toContain(msg);
  });
});
