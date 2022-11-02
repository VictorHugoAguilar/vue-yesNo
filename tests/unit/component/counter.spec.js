import { shallowMount } from "@vue/test-utils";

import Counter from "@/components/Counter";

describe("Counter component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    // test("debe de hacer match con el snapshot", () => {
    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot();
    // });

    test("h2 deberia de tener el valor por defecto Counter", () => {
        expect(wrapper.find("h2").exists()).toBeTruthy();
        const etiqueta = wrapper.find("h2");
        expect(etiqueta.text()).toBe("Counter");
    });

    test("el valor por defecto en el tag p debe de ser 1", () => {
        const etiqueta = wrapper.find('[data-test-id="counter"]');
        expect(etiqueta.text()).toBe("1");
    });

    test("debe incrementar en 1 el valor del contador", async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll("button");
        await increaseBtn.trigger("click");
        await increaseBtn.trigger("click");
        await decreaseBtn.trigger("click");
        const value = wrapper.find('[data-test-id="counter"]').text();
        expect(Number(value)).toBe(2);
    });

    test("debe de establecer el valor por defecto", () => {
        const start = wrapper.props("start");
        const value = wrapper.find('[data-test-id="counter"]').text();
        expect(Number(value)).toBe(start);
    });

    test("debe de mostrar la prop title", () => {
        const messageTitle = "titulo custom";
        const wrapper = shallowMount(Counter, {
            props: {
                title: messageTitle,
            },
        });
        expect(wrapper.find("h2").text()).toBe(messageTitle);
    });
});
