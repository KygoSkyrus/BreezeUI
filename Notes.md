
# typescript issues
- whenever getting anytype of unusal error in ts file which is not common in js than you may need to install its types, for eg.. importing react throws error than do `npm i -D @types/react` 
- if getting error on any elements than add ("moduleResolution": "node") in compilerOptions key in tsconfig.json file








 "devDependencies": {
    "@rollup/plugin-commonjs": "^28.0.2",
    "@rollup/plugin-node-resolve": "^16.0.0",
    "@types/node": "^22.10.6",
    "@types/react": "^19.0.6",
    "@types/react-dom": "^19.0.3",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "rollup": "^4.30.1",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "typescript": "^5.7.3"
  }