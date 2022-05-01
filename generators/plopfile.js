module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: function (data) {
      var actions = [
        {
          type: "add",
          path: "../src/components/{{ pascalCase name }}/index.js",
          templateFile: "templates/component.js.hbs",
        },
        {
          type: "add",
          path: "../src/components/{{ pascalCase name }}/styled.js",
          templateFile: "templates/styles.js.hbs",
        },
      ];

      return actions;
    },
  });
};
