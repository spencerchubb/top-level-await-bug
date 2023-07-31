Steps to reproduce:

```
git clone https://github.com/spencerchubb/top-level-await-bug.git
cd top-level-await-bug
npm install
npm run build
```

Result:
```
$ npm run build

> vite-app@0.0.0 build
> vite build --mode development --watch

vite v4.4.7 building for development...

watching for file changes...

build started...
✓ 5 modules transformed.
rendering chunks (2)...[vite-plugin-top-level-await] Cannot read properties of undefined (reading 'importedBy')
```

I don't know why this bug is happening, but I do know that it's related to importing the css and ts. If you comment out any of the imports in page1.html or page2.html, then it builds without error.