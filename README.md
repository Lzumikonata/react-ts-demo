language: node_js

node_js:
  - 10.0.0

cache:
  directories:
  - "node_modules"

branches:
  only:
  - master

install:
  - npm

script:
  - yarn run build

