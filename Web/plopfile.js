export default function (plop) {
  plop.setGenerator('component', {
    description: 'New React Component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'enter the component name'
    }],
    actions: [
      {
        type: 'add',
        path: './Client/packages/{{name}}/_{{name}}.sass',
      },
      {
        type: 'addMany',
        destination: './Client/packages/{{name}}/tests',
        templateFiles: 'plop_templates/components/tests/*.hbs',
        base: 'plop_templates/components/tests'
      },
      {
        type: 'addMany',
        destination: './Client/packages/{{name}}',
        templateFiles: 'plop_templates/components/*.hbs',
        base: 'plop_templates/components'
      },
      {
        type: 'append',
        path: './Client/styles/styles.sass',
        template: '@use \'packages/{{name}}\' as {{name}}',
      },
    ],
  }),
  plop.setGenerator('gadget', {
    description: 'New Gadget',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'enter the gadget name'
    }],
    actions: [
      {
        type: 'add',
        path: './Client/packages/gadgets/{{name}}/_{{name}}.sass',
      },
      {
        type: 'addMany',
        destination: './Client/packages/gadgets/{{name}}/tests',
        templateFiles: 'plop_templates/components/tests/*.hbs',
        base: 'plop_templates/components/tests'
      },
      {
        type: 'addMany',
        destination: './Client/packages/gadgets/{{name}}',
        templateFiles: 'plop_templates/components/*.hbs',
        base: 'plop_templates/components'
      },
      {
        type: 'append',
        path: './Client/styles/styles.sass',
        template: '@use \'packages/{{name}}\' as {{name}}',
      },
    ],
  })
};
