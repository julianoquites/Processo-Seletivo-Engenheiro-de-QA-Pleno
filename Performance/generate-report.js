const reporter = require("@avitalique/k6-html-reporter");

const options = {
  jsonFile: "resultados.json",
  output: "reports",
};

reporter.generateSummaryReport(options);
