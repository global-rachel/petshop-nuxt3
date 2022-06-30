import { describe, expect, it, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '../Header.vue';
import { createTestingPinia } from '@pinia/testing';
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

class ResizeObserver {
    observe() {}
    unobserve() {}
}

describe('pages', () => {
    // @ts-ignore
    window.ResizeObserver = ResizeObserver;

    it('render index', async () => {
        const vuetify = createVuetify({ components, directives });
        let wrapper = await mount(Header, {
            global: {
                plugins: [createTestingPinia(), vuetify],
            },
        });

        expect(wrapper.exists()).toBeTruthy();

        expect(wrapper.text()).toContain('LOGIN');
    });
});