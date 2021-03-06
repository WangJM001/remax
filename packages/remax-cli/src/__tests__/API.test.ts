import API from '../API';
import { Platform, Plugin } from '@remax/types';

function entries(): Plugin {
  return {
    name: 'entries',
  };
}

function props1(): Plugin {
  return {
    name: 'props1',
    processProps({ props }) {
      return [...props, 'p1'];
    },
  };
}

function props2(): Plugin {
  return {
    name: 'props2',
    processProps({ props }) {
      return [...props, 'p2'];
    },
  };
}

describe('api', () => {
  const api = new API();

  beforeAll(() => {
    const options: any = {
      plugins: [entries(), props1(), props2()],
    };
    api.registerPlugins(options);
    api.registerAdapterPlugins(Platform.ali, options);
  });

  it('install plugins in a variety of ways', () => {
    expect(api.plugins).toHaveLength(4);
  });

  it('install adapter plugin', () => {
    expect(api.adapter.name).toEqual('ali');
    expect(api.adapter.target).toEqual('ali');
    expect(api.adapter.packageName).toEqual('@remax/ali');
  });

  it('processProps', () => {
    const props = api.processProps('text', []);

    expect(props).toEqual(['p1', 'p2']);
  });

  it('shouldHostComponentRegister', () => {
    expect(api.shouldHostComponentRegister('view', 'import', false)).toBeTruthy();
    expect(api.shouldHostComponentRegister('swiper-item', 'import', false)).toBeFalsy();
  });

  it('getHostComponents', () => {
    expect(api.getHostComponents()).toBeDefined();
  });

  it('getMeta', () => {
    const extensions = api.getMeta();
    expect(extensions.jsHelper).toMatchInlineSnapshot(`
      Object {
        "extension": ".sjs",
        "src": "from",
        "tag": "import-sjs",
      }
    `);
    expect(extensions.style).toMatchInlineSnapshot(`".acss"`);
    expect(extensions.template).toMatchInlineSnapshot(`
      Object {
        "extension": ".axml",
        "src": "src",
        "tag": "import",
      }
    `);
  });
});
