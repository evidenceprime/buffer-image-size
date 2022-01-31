const fs = require('fs');
const path = require('path');

function createPackageFile() {
  const packageData = fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), {
    encoding: 'utf8',
  });

  const newPackageData = Object.assign({}, JSON.parse(packageData), {
    browserslist: undefined,
    devDependencies: undefined,
    scripts: undefined,
    main: './buffer-image-size.js',
    types: './buffer-image-size.d.ts',
    private: false
  });

  const distPath = path.resolve(__dirname, '..', 'dist', 'package.json');

  fs.writeFileSync(distPath, JSON.stringify(newPackageData, null, 2), {encoding: 'utf8'});
  // eslint-disable-next-line no-console
  console.log(`Created package.json in ${distPath}`);

  return newPackageData;
}

createPackageFile();
